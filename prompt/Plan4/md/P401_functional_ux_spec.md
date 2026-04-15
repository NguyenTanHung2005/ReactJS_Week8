# P401 - Functional and UX Completion Spec

## Summary
Plan4 mo rong Plan3 de hoan thien tinh nang va giao dien theo bo anh tham chieu:
1. Onboarding modal + auth modal layout.
2. Advanced food listing with filters and no-result state.
3. Recipe box style page with save state and pagination.
4. Subscription page with pricing plan and benefit text.
5. User-facing messages and operational feedback.

## Functional Requirements
- FR1: Home page co onboarding modal da buoc (Next/Skip/Done) va luu trang thai localStorage.
- FR2: Login screen co split visual layout, helper text, social action buttons.
- FR3: Food list co search + sidebar filters (type/time/rating), apply action, no-result illustration.
- FR4: Recipe box page co list card, toggle save state, message feedback, pagination controls.
- FR5: Subscription page co package details, CTA action, confirmation text.
- FR6: Food detail page mo ta theo kieu article steps + comments + related recipes.

## Business Operation Details
- Apply Filter: cap nhat danh sach va hien thong bao "Filter applied".
- Save Recipe: toggle trang thai da luu, hien alert "Saved"/"Removed".
- Subscribe: co confirm state va text huong dan tiep theo.
- Authentication helper: hien text mo ta dieu khoan va thong diep loi neu dang nhap that bai.

## User Text and Notification Requirements
- Co thong bao thanh cong/that bai ro rang bang alert banner.
- Co text huong dan cho form va cac thao tac chinh.
- Co empty-state message khi khong co du lieu tim thay.

## UI Mapping to Images
- Layout top nav + search + recipe box action + avatar.
- Home sections: summer recipes, videos, editor picks.
- Food list page: left filter panel + right card grid.
- No result state: icon + suggestion chips.
- Recipe box profile section and card collections.
- Subscription page: pricing + benefits + CTA.
- Admin dashboard remains aligned with existing visual.

## Completion Criteria
- [ ] Plan4 docs created
- [ ] Functional details implemented in code
- [ ] User messages and business actions implemented
- [ ] UI updated to match reference image structure
- [ ] Lint/build validation passed
