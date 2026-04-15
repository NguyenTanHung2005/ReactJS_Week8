# ReactJS Week8 - Quy Trinh Prompt Agent

Repository: https://github.com/NguyenTanHung2005/ReactJS_Week8

## 1) Tong Quan Du An
Du an nay duoc xay dung bang React + Vite, mo phong he thong Mini Food Ordering System.

Chuc nang chinh bao gom:
- Dang nhap va phan quyen theo vai tro USER hoac ADMIN
- Quan ly mon an (danh sach, chi tiet, tao moi, chinh sua)
- Gio hang, thanh toan, don hang, thong bao
- Khu vuc quan tri (dashboard, quan ly user, quan ly food)
- Trang Site Map trong app va bo sitemap cho SEO

Thu muc code chinh:
- ReactJS_week8/

## 2) Cach Prompt Agent Trong Repo Nay
Repo su dung quy trinh lam viec theo Plan de quan ly yeu cau va tien do.

Quy trinh tong quat:
1. Xac dinh yeu cau va dat vao mot Plan (Plan2, Plan3, ...)
2. Tao hoac cap nhat tai lieu trong prompt/PlanN/
3. Trien khai code trong ReactJS_week8/
4. Kiem tra chat luong bang lint va build
5. Luu lich su xu ly va ket qua chay vao logs/

Mau prompt thuong dung:
- "Tao PlanN voi cac yeu cau..."
- "Chay PlanN"
- "Cap nhat theo anh tham chieu"
- "Chay lai Plan1-7 va luu log"

## 3) Cau Truc Prompt Va Plan
Tat ca plan duoc quan ly trong:
- prompt/

Cac file quan trong:
- prompt/plan_priorities.md: thu tu uu tien va quy tac doc plan
- prompt/Plan2/md/prompts.md ... prompt/Plan7/md/prompts.md: dinh nghia prompt tung plan
- prompt/PlanN/md/*.md: dac ta, bao cao test, yeu cau cap nhat
- prompt/PlanN/service/system_constraints.md: rang buoc ky thuat cua tung plan

## 4) He Thong Logs Va Lich Su Prompt
Lich su trien khai duoc luu tai:
- logs/project_requests_log.md: log tong theo thu tu thoi gian
- logs/plan5_reader_log.md: tong hop de doc nhanh cho Plan5
- logs/plan2_to_plan7_rerun_log.md: ket qua chay lai Plan2-7
- logs/plan1_to_plan7_rerun_log.md: ket qua chay lai Plan1-7
- logs/site_map.md: so do route de doc cho dev
- logs/admin_dashboard_reader_log.md: tong hop cap nhat dashboard admin

## 5) Site Map Cua Du An
- Trang Site Map trong app: /sitemap
- Sitemap XML cho crawler: ReactJS_week8/public/sitemap.xml
- Robots file: ReactJS_week8/public/robots.txt

## 6) Huong Dan Chay Du An Local
Di chuyen vao thu muc ReactJS_week8/ va chay:

- Cai dependencies:
  npm install

- Chay dev server:
  npm run dev

- Kiem tra lint:
  npm run lint

- Build production:
  npm run build

## 7) Ghi Chu Cho Nguoi Review
- Repo nay vua the hien ket qua code, vua the hien quy trinh phat trien bang prompt Agent.
- Nen doc logs/project_requests_log.md truoc de nam duoc toan bo timeline thay doi.
- Sau do doc prompt/plan_priorities.md va cac plan trong prompt/PlanN/ de hieu cach ra quyet dinh.
