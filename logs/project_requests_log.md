# Project Request Log

Purpose: Luu lai cac yeu cau cua user trong qua trinh phat trien project.

## 2026-04-15
- Yeu cau: "ban hay cac prompt trong plan1 va plan2 sao do hay tiep tuc update project theo prompt cho toi"
- Ket qua: Da doc Plan1/Plan2, trien khai routing P201 (route tree day du, guard, lazy-load), bo sung AuthProvider, build/lint pass.

## 2026-04-15 (lan tiep theo)
- Yeu cau: "hay tiep tuc theo ca 3 y va ghi lai 1 thu muc log dong cap voi thu muc prompt de luu lai cac yeu cau cua toi danh cho ban trong qua trinh lam project"
- Huong xu ly:
  - Noi foods/orders vao service API co fallback dev.
  - Them interceptor 401 de logout + redirect /auth/login.
  - Them kiem tra quyen orders/:id theo role + owner.
  - Tao thu muc logs dong cap voi prompt va file log nay.

## 2026-04-15 (CSS Redesign)
- Yeu cau: "cập nhật CSS. Chuẩn Bootstrap5. Đúng với file pdf 3_Week_8_10_ReactJS_UI. Chia cấu trúc hệ thống rõ ràng"
- Ket qua:
  - Sao chep 11 anh PNG tu Plan2/md/assets sang public/assets (Chefify design images).
  - Cai dat Bootstrap5 package.
  - Viet lai index.css: Import Bootstrap5 + 9 CSS variables cho Chefify colors (--chefify-primary #E91E63, --chefify-secondary #FFB300, dark #2d3436, etc).
  - Viet lai App.css: Status badges va responsive grid.
  - Update 16 pages voi Bootstrap5:
    * MainLayout: Navbar (expand-lg, user dropdown), footer (3-column, dark bg).
    * AuthLayout: Centered card layout.
    * AdminLayout: Sidebar navigation (250px fixed).
    * HomePage: Hero section + featured cards grid.
    * FoodListPage: Bootstrap grid (col-md-6 col-lg-4) voi card layout.
    * FoodDetailPage: Card detail view voi back button.
    * FoodFormPage: Form inputs voi form-label/form-control.
    * LoginPage: Bootstrap form styling voi error alerts.
    * RegisterPage: Create account form mirror.
    * OrdersPage: Bootstrap table voi status badges.
    * OrderDetailPage: Card-based detail view.
    * CartPage: Table + checkout CTA.
    * CheckoutPage: Billing form + order summary card.
    * NotificationsPage: Notification cards voi read/new badges.
    * UserManagementPage: Admin user table.
    * FoodManagementPage: Admin food table.
    * Error pages: Minimal styling (404/403).
  - Lint: 0 errors.
  - Build: Success (595ms), 233.93 kB CSS (gzip: 31.96 kB).

## 2026-04-15 (Plan3 - Image Integration + Completion)
- Yeu cau: "toi da cap nhat them hinh anh lien quan den project. Hay tao prompt Plan3 de cung cap hinh anh cho project, va dinh dang lai project va tiep tuc bo sung update con thieu o Plan2 chua hoan thien..."
- Huong xu ly:
  - Tao bo tai lieu Plan3:
    * prompt/Plan3/md/prompts.md
    * prompt/Plan3/md/P301_image_integration_spec.md
    * prompt/Plan3/service/system_constraints.md
  - Tao central asset registry: src/assets/chefifyAssets.js.
  - Tich hop hinh anh vao MainLayout, HomePage, FoodListPage, FoodDetailPage.
  - Hoan thien trang con thieu Plan2:
    * Sua sach NotificationsPage (xoa noi dung bi trung, them mock notifications co thumbnail).
    * Nang cap giao dien 403/404 dung phong cach Chefify.
    * Bo sung AdminDashboardPage va route index cho /admin.
  - Cap nhat plan priorities de them Plan3.
- Validation:
  - Lint: PASS (0 errors).
  - Build: PASS (474ms), tai san hinh anh da duoc bundle vao dist/assets.

## 2026-04-15 (Plan4 - Functional Detail and UX Completion)
- Yeu cau: "Tao Plan4... lam chi tiet chuc nang/component, bo sung nghiep vu thao tac, text thong bao, update project giong bo img va khoi chay Plan4"
- Huong xu ly:
  - Tao bo tai lieu Plan4:
    * prompt/Plan4/md/prompts.md
    * prompt/Plan4/md/P401_functional_ux_spec.md
    * prompt/Plan4/service/system_constraints.md
  - Nang cap MainLayout: search bar, nav structure, recipe box action, profile/avatar, footer newsletter.
  - Nang cap Auth flow: split auth modal visual + login social actions + helper text.
  - HomePage: onboarding modal step-by-step (Next/Skip), summer/video/editor sections.
  - FoodListPage: left filter panel, apply action, no-result empty state + chips, pagination.
  - FoodDetailPage: article-like recipe steps, cooking note action, comments, recently viewed.
  - NotificationsPage: doi thanh Recipe Box style page (profile intro, save toggle, user notices).
  - Them SubscriptionPage va route /subscriptions.
  - Cap nhat theme CSS cho overlay, dots, font, pagination va utility classes.
- Validation:
  - Lint: PASS (0 errors).
  - Build: PASS (vite build completed successfully).

## 2026-04-15 (Plan5 - Debug and Test Evidence)
- Yeu cau: tao Plan5, thuc hien debug, test, luu du lieu test vao Plan, dua ra yeu cau update, sau do chay Plan5.
- Huong xu ly:
  - Tao bo tai lieu Plan5:
    * prompt/Plan5/md/prompts.md
    * prompt/Plan5/md/P501_debug_test_report.md
    * prompt/Plan5/md/P502_update_requirements.md
    * prompt/Plan5/service/system_constraints.md
  - Thuc hien debug va test:
    * `get_errors`: khong co loi.
    * `npm run lint`: PASS.
    * `npm run build`: PASS.
  - Tong hop update requirements P0/P1/P2 cho Plan6.
  - Chay lai Plan5 sau khi Plan6 cap nhat: lint/build van PASS.

## 2026-04-15 (Plan6 - Update Implementation + Modern CSS)
- Yeu cau: khoi tao/cap nhat Plan6 tu yeu cau update, bo sung toi uu, cap nhat CSS theo chuan hien dai, va chay Plan6.
- Huong xu ly:
  - Tao bo tai lieu Plan6:
    * prompt/Plan6/md/prompts.md
    * prompt/Plan6/md/P601_execution_spec.md
    * prompt/Plan6/service/system_constraints.md
  - Thuc thi update CSS hien dai trong `src/index.css`:
    * Them design tokens (spacing/radius/shadow/motion).
    * Typography responsive voi `clamp()`.
    * Keyboard focus with `:focus-visible`.
    * Reduced motion fallback.
    * `color-scheme` hint + transition control toi uu.
  - Debug trong luc chay Plan6:
    * Phat hien loi build CSS `Unclosed block`.
    * Sua triet de va build lai.
- Validation:
  - Lint: PASS.
  - Build: PASS.

## 2026-04-15 (Plan7 - Interaction, Map, API Entertainment, Motion)
- Yeu cau: tao Plan7 voi cac hang muc tuong tac login/card, map co dinh vi mac dinh IUH Nguyen Van Bao, tim API giai tri, hieu ung chuyen trang, va nang cap hieu ung background/component/button/card.
- Huong xu ly:
  - Tao bo tai lieu Plan7:
    * prompt/Plan7/md/prompts.md
    * prompt/Plan7/md/P701_interaction_map_fx_spec.md
    * prompt/Plan7/md/P702_api_candidates.md
    * prompt/Plan7/service/system_constraints.md
  - Cap nhat tuong tac dang nhap social (Google/Facebook/Apple) voi loading + feedback state.
  - Cap nhat tuong tac card tren HomePage (save/remove + notice).
  - Tich hop map tuong tac bang React Leaflet:
    * Vi tri mac dinh: Co so Nguyen Van Bao, Dai hoc Cong nghiep TP.HCM.
    * Click-to-select toa do, recenter, set default, open directions.
  - Tich hop API giai tri:
    * Official Joke API
    * Advice Slip API
    * Co fallback content neu API loi.
  - Tang do muot chuyen trang va hieu ung giao dien:
    * Route transition animation.
    * Background gradient atmosphere.
    * Spotlight card effect.
    * Button hover motion.
- Validation:
  - Lint: PASS.
  - Build: PASS.

## 2026-04-15 (Plan2 Update - User Profile + Rerun Plan2-7)
- Yeu cau: "them vao Plan2: Tao 1 trang thong tin nguoi dung. hay chay lai tu Plan2 - 7"
- Huong xu ly:
  - Cap nhat tai lieu Plan2 de bo sung route/profile requirement.
  - Tao trang `UserProfilePage` va noi vao route protected `/profile`.
  - Cap nhat menu user de truy cap profile.
  - Rerun chuoi Plan2-Plan7 bang artifact check + debug/lint/build.
- Validation:
  - Artifact check Plan2-Plan7: PASS (FOUND day du prompts.md).
  - Debug diagnostics: PASS.
  - Lint: PASS.
  - Build: PASS.

## 2026-04-15 (Admin Dashboard UI Update + Text Expansion)
- Yeu cau: "cap nhat them trang nay va tiep tuc them noi dung text vao project"
- Huong xu ly:
  - Lam moi trang admin dashboard theo bo cuc tham chieu:
    * KPI cards (Turnover, Profit, New customer)
    * Detailed report table (customer, company, value, date, status)
    * Search, Import/Export actions, pagination area
  - Nang cap AdminLayout theo phong cach sidebar sang mau + promo block text.
  - Bo sung them text mo ta o dashboard va user management de noi dung day du hon.
  - Sua trang UserManagementPage de loai bo duplicate section va dong nhat noi dung.
- Validation:
  - Lint: PASS.
  - Build: PASS.

## 2026-04-15 (Admin Sync + Site Map Creation)
- Yeu cau: "hay dong bo va tao site map"
- Huong xu ly:
  - Dong bo giao dien khu admin theo cung he thong visual:
    * Cap nhat AdminLayout menu theo dung module (Dashboard/User management/Food management).
    * Dong bo UserManagementPage va FoodManagementPage theo style dashboard (toolbar, table, status, text guidance).
  - Tao sitemap:
    * Them `public/sitemap.xml` (public URLs cho SEO).
    * Them `public/robots.txt` tro den sitemap.
    * Them `logs/site_map.md` de mo ta day du route tree (public/protected/admin).
- Validation:
  - Lint: PASS.
  - Build: PASS.

## 2026-04-15 (Site Map Page + Rerun Plan1-7)
- Yeu cau: "tao 1 trang sitemap va chay lai Plan1-7"
- Huong xu ly:
  - Tao trang Site Map trong app (`/sitemap`) de hien thi route tree public/protected/admin.
  - Noi route vao AppRoutes va them link Site map trong footer.
  - Rerun Plan1-Plan7 qua cac buoc: artifact check, diagnostics, lint, build.
- Validation:
  - Artifact Plan1-Plan7: PASS (FOUND day du).
  - Diagnostics: PASS.
  - Lint: PASS.
  - Build: PASS.
