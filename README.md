# ReactJS Week8 - Quy Trình Prompt Agent

Repository: https://github.com/NguyenTanHung2005/ReactJS_Week8

## 1) Tổng Quan Dự Án
Dự án này được xây dựng bằng React + Vite, mô phỏng hệ thống Mini Food Ordering System.

Chức năng chính bao gồm:
- Đăng nhập và phân quyền theo vai trò USER hoặc ADMIN
- Quản lý món ăn (danh sách, chi tiết, tạo mới, chỉnh sửa)
- Giỏ hàng, thanh toán, đơn hàng, thông báo
- Khu vực quản trị (dashboard, quản lý user, quản lý food)
- Trang Site Map trong app và bộ sitemap cho SEO

Thư mục code chính:
- ReactJS_week8/

## 2) Cách Prompt Agent Trong Repo Này
Repo sử dụng quy trình làm việc theo Plan để quản lý yêu cầu và tiến độ.

Quy trình tổng quát:
1. Xác định yêu cầu và đặt vào một Plan (Plan2, Plan3, ...)
2. Tạo hoặc cập nhật tài liệu trong prompt/PlanN/
3. Triển khai code trong ReactJS_week8/
4. Kiểm tra chất lượng bằng lint và build
5. Lưu lịch sử xử lý và kết quả chạy vào logs/

Mẫu prompt thường dùng:
- "Tạo PlanN với các yêu cầu..."
- "Chạy PlanN"
- "Cập nhật theo ảnh tham chiếu"
- "Chạy lại Plan1-7 và lưu log"

## 3) Cấu Trúc Prompt Và Plan
Tất cả plan được quản lý trong:
- prompt/

Các file quan trọng:
- prompt/plan_priorities.md: thứ tự ưu tiên và quy tắc đọc plan
- prompt/Plan2/md/prompts.md ... prompt/Plan7/md/prompts.md: định nghĩa prompt từng plan
- prompt/PlanN/md/*.md: đặc tả, báo cáo test, yêu cầu cập nhật
- prompt/PlanN/service/system_constraints.md: ràng buộc kỹ thuật của từng plan

## 4) Hệ Thống Logs Và Lịch Sử Prompt
Lịch sử triển khai được lưu tại:
- logs/project_requests_log.md: log tổng theo thứ tự thời gian
- logs/plan5_reader_log.md: tổng hợp để đọc nhanh cho Plan5
- logs/plan2_to_plan7_rerun_log.md: kết quả chạy lại Plan2-7
- logs/plan1_to_plan7_rerun_log.md: kết quả chạy lại Plan1-7
- logs/site_map.md: sơ đồ route để đọc cho dev
- logs/admin_dashboard_reader_log.md: tổng hợp cập nhật dashboard admin

## 5) Site Map Của Dự Án
- Trang Site Map trong app: /sitemap
- Sitemap XML cho crawler: ReactJS_week8/public/sitemap.xml
- Robots file: ReactJS_week8/public/robots.txt

## 6) Hướng Dẫn Chạy Dự Án Local
Di chuyển vào thư mục ReactJS_week8/ và chạy:

- Cài dependencies:
  npm install

- Chạy dev server:
  npm run dev

- Kiểm tra lint:
  npm run lint

- Build production:
  npm run build

## 7) Ghi Chú Cho Người Review
- Repo này vừa thể hiện kết quả code, vừa thể hiện quy trình phát triển bằng prompt Agent.
- Nên đọc logs/project_requests_log.md trước để nắm được toàn bộ timeline thay đổi.
- Sau đó đọc prompt/plan_priorities.md và các plan trong prompt/PlanN/ để hiểu cách ra quyết định.
