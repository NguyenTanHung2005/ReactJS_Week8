# ReactJS Week8 - Agent Prompt Workflow

Repository: https://github.com/NguyenTanHung2005/ReactJS_Week8

## 1) Project Overview
This project is a React + Vite application for a Mini Food Ordering System.
It includes:
- Auth and role-based routing (USER or ADMIN)
- Food listing/detail/form flows
- Cart, checkout, orders, notifications
- Admin dashboard and management pages
- Site map page and SEO sitemap files

Main app source:
- ReactJS_week8/

## 2) How I Prompt My Agent
This repository uses a Plan-based workflow to manage requests and implementation progress.

Workflow:
1. Define request as a new plan goal (Plan2, Plan3, ...)
2. Create or update plan docs in prompt/PlanN/
3. Implement code changes in ReactJS_week8/
4. Validate with lint and build
5. Save request history and run results in logs/

Common prompt patterns:
- "Tạo PlanN với các yêu cầu..."
- "Chạy PlanN"
- "Cập nhật theo ảnh tham chiếu"
- "Chạy lại Plan1-7 và lưu log"

## 3) Prompt and Plan Structure
All prompt plans are stored in:
- prompt/

Important files:
- prompt/plan_priorities.md: priority and execution order for all plans
- prompt/Plan2/md/prompts.md ... prompt/Plan7/md/prompts.md: prompt definitions per plan
- prompt/PlanN/md/*.md: plan specs, reports, update requirements
- prompt/PlanN/service/system_constraints.md: technical constraints per plan

## 4) Logs and Prompt History
Execution history is tracked in:
- logs/project_requests_log.md: chronological master log for all requests
- logs/plan5_reader_log.md: reader-focused Plan5 run summary
- logs/plan2_to_plan7_rerun_log.md: rerun summary for Plan2-7
- logs/plan1_to_plan7_rerun_log.md: rerun summary for Plan1-7
- logs/site_map.md: human-readable route map
- logs/admin_dashboard_reader_log.md: admin dashboard update summary

## 5) Site Map Artifacts
- In-app Site Map page: /sitemap
- SEO sitemap XML: ReactJS_week8/public/sitemap.xml
- Robots file: ReactJS_week8/public/robots.txt

## 6) Run Project Locally
From ReactJS_week8/ directory:

- Install dependencies:
  npm install

- Start dev server:
  npm run dev

- Lint:
  npm run lint

- Build:
  npm run build

## 7) Notes for Reviewers
- This repo is designed to show both implementation and prompt-driven development process.
- Read logs/project_requests_log.md first to understand chronology.
- Then read prompt/plan_priorities.md and each plan under prompt/PlanN/.
