# Website Công ty TNHH Công nghệ - Dịch vụ số SAMOC
*(SAMOC DIGITAL SERVICES - TECHNOLOGY COMPANY LIMITED — Giám đốc: Nguyễn Thành Trung)*

Website giới thiệu công ty công nghệ đa ngành, tổ chức theo **6 khối ngành** (gộp từ 27 ngành nghề đăng ký):

1. **CNTT & Phần mềm** (6201, 6202, 6209, 5820, 6311)
2. **Nghiên cứu, Khoa học & Công nghệ / AI** (7211 *ngành chính*, 7212, 7120)
3. **Xây dựng & Kiến trúc** (4101, 4102, 4291, 4292, 4293, 4299, 7110)
4. **Thiết kế, Truyền thông & Quảng cáo** (5911, 7420, 7310, 7320)
5. **Giáo dục & Đào tạo số** (8531, 8532, 8533, 8541, 8559, 8560)
6. **Tư vấn & Dịch vụ doanh nghiệp** (6820, 7490)

Có kinh nghiệm tư vấn quốc tế tại **Nam Phi** và **Namibia** (xem trang Dự án).

## 📁 Cấu trúc dự án

```
New folder/
├── index.html          # Trang chủ (hero, dịch vụ, thống kê, quy trình, đánh giá, CTA)
├── about.html          # Giới thiệu (sứ mệnh, tầm nhìn, giá trị, GĐ Nguyễn Thành Trung)
├── services.html       # 6 khối ngành chi tiết + bảng 27 mã ngành đăng ký + khóa đào tạo + FAQ
├── projects.html       # Dự án tiêu biểu (có bộ lọc theo lĩnh vực)
├── contact.html        # Liên hệ (form tư vấn + thông tin)
├── assets/
│   ├── css/style.css   # Toàn bộ giao diện (design system, responsive)
│   └── js/main.js      # Tương tác: menu mobile, animation, đếm số, FAQ, form
└── README.md
```

## 🚀 Cách chạy

Đây là website tĩnh (HTML/CSS/JS thuần) — **không cần cài đặt gì**.

- **Cách 1:** Nhấp đúp vào `index.html` để mở bằng trình duyệt.
- **Cách 2 (khuyến nghị):** Chạy máy chủ tĩnh để điều hướng mượt hơn:
  ```powershell
  # Nếu có Python
  python -m http.server 8000
  # rồi mở http://localhost:8000
  ```

## ✨ Tính năng & thiết kế (bản nâng cấp chuyên nghiệp v2)

- **Typography cao cấp:** Plus Jakarta Sans (tiêu đề) · Inter (nội dung) · JetBrains Mono (code) — tải từ Google Fonts.
- **Line icons SVG** đồng bộ (thay toàn bộ emoji), logo SVG monogram có gradient.
- **Bento grid** cho phần dịch vụ, **glassmorphism** + nền lưới + hiệu ứng glow theo phong cách Linear/Apple.
- Micro-animation: reveal khi cuộn, đếm số liệu động, spotlight theo con trỏ trên thẻ bento, header đổ bóng khi cuộn.
- Hoàn toàn **responsive** (máy tính, tablet, điện thoại) + tôn trọng `prefers-reduced-motion`.
- Bộ lọc dự án theo lĩnh vực, accordion FAQ, menu mobile.
- **Form liên hệ gửi mail thật qua Formspree** (AJAX, chống spam honeypot, trạng thái loading, thông báo thành công/lỗi). Khi chưa cấu hình, form chạy ở chế độ demo.

> ⚠️ Font chữ tải từ Google Fonts nên cần internet để hiển thị đẹp nhất. Khi offline, trình duyệt tự fallback sang font hệ thống (vẫn đọc tốt).

## 📨 Kết nối form gửi mail thật (Formspree — miễn phí)

Form ở `contact.html` đã tích hợp sẵn Formspree, chỉ cần dán mã form:

1. Vào **https://formspree.io** → đăng ký (có thể dùng chính `tnhhsamoc@gmail.com`).
2. Bấm **New Form** → đặt tên (vd "SAMOC Website") → email nhận là **tnhhsamoc@gmail.com**.
3. Formspree cho một endpoint dạng `https://formspree.io/f/abcdwxyz` → copy phần mã `abcdwxyz`.
4. Mở `contact.html`, tìm dòng `action="https://formspree.io/f/YOUR_FORM_ID"` và **thay `YOUR_FORM_ID` bằng mã** vừa copy.
5. Mở trang Liên hệ, gửi thử 1 lần → Formspree gửi mail xác nhận về hộp thư; bấm xác nhận là form hoạt động.

> Gói miễn phí Formspree: 50 lượt gửi/tháng. Cần nhiều hơn có thể nâng cấp hoặc chuyển sang EmailJS / backend riêng.

## 🔧 Cần tùy chỉnh trước khi đưa lên mạng

- **Form liên hệ:** dán mã form Formspree (xem mục "Kết nối form gửi mail thật" ở trên).
- **Mạng xã hội:** thay `href="#"` trong phần `.socials` bằng link thật (Facebook/LinkedIn/YouTube/Zalo).
- **Tên miền:** thay `https://samoc.com/` trong các thẻ canonical/Open Graph và `sitemap.xml`/`robots.txt` bằng tên miền thật.
- **Ảnh chia sẻ:** xuất `assets/og-image.svg` ra **PNG 1200×630** (`og-image.png`) rồi đổi `og:image`/`twitter:image` sang `.png` (Facebook/Zalo chỉ render PNG/JPG).
- **Logo:** hiện là monogram "S" dạng SVG gradient — có thể thay bằng logo chính thức.
- **Số liệu thật:** số liệu hiện để ở mức trung tính (6 khối ngành, 27 ngành nghề…); cập nhật khi có số thực tế.

> ✅ Đã cấu hình sẵn: thông tin liên hệ thật (địa chỉ, `0967 515 828`, `tnhhsamoc@gmail.com` — bấm gọi/gửi mail được), Google Maps nhúng thật, favicon, SEO/Open Graph.

## 🎨 Đổi màu thương hiệu

Mở `assets/css/style.css`, sửa các biến trong `:root` (ví dụ `--c-primary`, `--grad-brand`).
