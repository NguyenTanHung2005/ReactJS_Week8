# P301 - Image Integration and UI Hardening Specification

## Summary
Plan3 tap trung vao 3 muc tieu:
1. Cung cap hinh anh theo kieu central asset registry.
2. Hoan thien cac muc UI con thieu cua Plan2.
3. Nang cap tinh nhat quan va kha nang mo rong cho frontend.

## Scope
- Asset source: src/assets/Lab_01, Lab_02, Lab_02_b, Lab_03, Lab_04.
- Core routes touched:
  - /
  - /foods
  - /foods/:id
  - /notifications
  - /admin (index)
  - /403
  - /*

## Functional Requirements
- FR1: Tao file src/assets/chefifyAssets.js de export grouped assets:
  - logos
  - hero
  - foods
  - icons
  - ratings
- FR2: Cac trang Home/Foods/Detail phai dung hinh tu asset map thay vi hard-code path string.
- FR3: Notifications page co du lieu mock + thumbnail image + read/new badge.
- FR4: Them admin index dashboard page cho route /admin.
- FR5: 403 va 404 pages phai co giao dien dung phong cach Chefify.

## Non-Functional Requirements
- NFR1: Bootstrap5 classes + custom Chefify variables.
- NFR2: Khong duoc pha vo route guard hien co.
- NFR3: Lint and build phai pass.
- NFR4: Toan bo code moi dung ASCII text trong source.

## UI Mapping (Image -> Page)
- logos.primaryPink: header brand, auth screens.
- logos.primaryWhite: dark footer or dark blocks.
- hero.cover: homepage hero section.
- foods.featured[0..n]: home cards, food list cards.
- foods.detailFallback: food detail image fallback.
- icons.emptyState: 404 page / empty notifications state.

## Completion Checklist
- [ ] Plan3 prompt docs created.
- [ ] Asset registry created and imported.
- [ ] Missing Plan2 items completed.
- [ ] App routes updated for /admin index.
- [ ] Lint/build validation passed.
