# 🚀 Hướng dẫn Deploy website SAMOC + tên miền samoc.com

Website này là **trang tĩnh (HTML/CSS/JS)** — không cần build, không cần server. Dưới đây là cách **phổ biến & uy tín nhất**.

---

## ✅ Việc cần làm trước khi công bố (checklist)

- [ ] Dán **mã form Formspree** vào `contact.html` (xem `README.md` → mục "Kết nối form gửi mail thật").
- [ ] Thay `href="#"` ở mạng xã hội (`.socials`) bằng link Facebook/LinkedIn/YouTube/Zalo thật.
- [ ] (Nên) Xuất `assets/og-image.svg` ra **PNG 1200×630** rồi đổi `og:image` / `twitter:image` sang `.png`.

---

## 1️⃣ Mua tên miền `samoc.com` (nhà cung cấp uy tín nhất)

| Nhà cung cấp | Vì sao chọn | Ghi chú |
|---|---|---|
| **Cloudflare Registrar** ⭐ | Uy tín nhất, bán **đúng giá gốc** (không markup), **miễn phí bảo mật WHOIS**, không upsell | Cần tạo tài khoản Cloudflare; quản lý DNS rất mạnh |
| **Namecheap** ⭐ | Phổ biến, dễ dùng, giá tốt, WHOIS privacy miễn phí | Phù hợp người mới |
| Porkbun | Rẻ, sạch sẽ, uy tín | Giao diện đơn giản |
| Mắt Bão / PA Vietnam / Tenten | Nhà cung cấp Việt Nam, hỗ trợ tiếng Việt, xuất hóa đơn VAT | Giá cao hơn quốc tế đôi chút |

> **Khuyến nghị:** Mua `.com` ở **Cloudflare** hoặc **Namecheap**. Nếu cần hóa đơn đỏ (VAT) cho công ty → dùng nhà cung cấp Việt Nam.

**Các bước mua (ví dụ Namecheap):**
1. Vào https://www.namecheap.com → tìm `samoc.com`.
2. Add to Cart → Checkout → thanh toán (thẻ Visa/Mastercard).
3. Bật **Domain Privacy** (miễn phí) để ẩn thông tin cá nhân.

---

## 2️⃣ Deploy (cách phổ biến nhất: **GitHub + Netlify** — tự động cập nhật)

Với cách này, mỗi lần sửa code chỉ cần `git push` là web **tự lên** sau ~1 phút.

### Bước A — Đưa code lên GitHub
1. Tạo tài khoản tại https://github.com (miễn phí).
2. Tạo repository mới: tên `samoc-website`, để **Private** hoặc Public đều được.
3. Trên máy bạn, mở thư mục dự án bằng terminal và chạy:
   ```bash
   git init
   git add .
   git commit -m "SAMOC website"
   git branch -M main
   git remote add origin https://github.com/<tài-khoản>/samoc-website.git
   git push -u origin main
   ```
   > Chưa có Git? Tải tại https://git-scm.com. Hoặc dùng **GitHub Desktop** (giao diện kéo-thả, không cần gõ lệnh).

### Bước B — Nối Netlify với GitHub
1. Vào https://app.netlify.com → đăng nhập bằng GitHub.
2. **Add new site → Import an existing project → GitHub** → chọn repo `samoc-website`.
3. Để **trống** Build command, **Publish directory** = `.` (hoặc để mặc định). Bấm **Deploy**.
4. Sau ~30–60 giây, Netlify cho 1 link dạng `random-name.netlify.app` → web đã chạy!

> **Không muốn dùng Git?** → Cách nhanh hơn: vào https://app.netlify.com/drop và **kéo-thả cả thư mục** vào. Nhược điểm: lần sau cập nhật phải kéo-thả lại thủ công.

### (Tuỳ chọn) Vercel hoặc Cloudflare Pages
Cả 2 cũng miễn phí, làm tương tự (Import từ GitHub, không cần build). Netlify là phổ biến và dễ nhất cho người mới.

---

## 3️⃣ Gắn tên miền `samoc.com` vào Netlify

1. Trong site Netlify → **Domain settings → Add a domain** → nhập `samoc.com`.
2. Netlify sẽ hướng dẫn 1 trong 2 cách:

   **Cách 1 — Dùng Netlify DNS (đơn giản nhất):**
   - Netlify cho bạn 4 **nameservers** (vd `dns1.p01.nsone.net`…).
   - Vào trang quản lý tên miền (Namecheap/Cloudflare) → mục **Nameservers** → đổi sang 4 nameservers của Netlify.

   **Cách 2 — Giữ DNS ở nhà cung cấp tên miền:**
   - Thêm bản ghi tại nhà cung cấp tên miền:
     - `A` record: `@` → `75.2.60.5`
     - `CNAME` record: `www` → `<site>.netlify.app`

3. Chờ DNS lan truyền (vài phút → tối đa 24 giờ).

---

## 4️⃣ Bật HTTPS (https://)

- Netlify **tự cấp SSL miễn phí** (Let's Encrypt). Vào **Domain settings → HTTPS → Verify / Provision certificate**.
- Bật **Force HTTPS** để mọi truy cập tự chuyển sang `https://`.

---

## 5️⃣ Sau khi lên sóng

- **Google Search Console** (https://search.google.com/search-console): thêm `samoc.com`, xác minh, rồi **Submit sitemap**: `https://samoc.com/sitemap.xml`.
- Kiểm tra: mở `samoc.com` trên máy tính + điện thoại; thử gửi form; bấm số điện thoại/email.
- Kiểm tra chia sẻ link đẹp: dán `samoc.com` vào https://www.opengraph.xyz để xem preview.

---

## 🔄 Cập nhật code sau này — VẪN SỬA BÌNH THƯỜNG

Code gốc luôn nằm trong thư mục này trên máy bạn. Sau khi sửa:

- **Nếu dùng GitHub + Netlify:** chạy
  ```bash
  git add .
  git commit -m "Cập nhật nội dung"
  git push
  ```
  → Netlify **tự deploy lại** trong ~1 phút. Tên miền giữ nguyên.

- **Nếu dùng Netlify Drop:** kéo-thả lại thư mục đã sửa.

- **Nếu dùng hosting cPanel:** upload lại file đã sửa vào `public_html`.

> ⚠️ Sau khi deploy, nếu chưa thấy thay đổi → bấm **Ctrl + F5** (hard refresh) hoặc xoá cache. Đó chỉ là cache trình duyệt/CDN, không phải lỗi.

---

## 📁 File hỗ trợ deploy đã có sẵn trong dự án
- `netlify.toml` — cấu hình Netlify (redirect www→non-www, header bảo mật).
- `404.html` — trang báo lỗi 404 đúng thương hiệu (Netlify tự dùng).
- `robots.txt`, `sitemap.xml` — cho Google index.
- `.gitignore` — loại trừ file local khi đẩy lên GitHub.
