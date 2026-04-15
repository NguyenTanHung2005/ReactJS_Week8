# Prompt Plans Priorities

Saved instruction:
- "Bạn hãy đọc lại các Plan mổi lần chạy prompt" — instruction lưu trữ và sẽ được tuân thủ trước mỗi lần xử lý prompt.

Priority rules:
- Plan1: priority = absolute (ưu tiên tuyệt đối).
- Plan2: priority = 1 (mặc định).
- All other Plans: priority = 1 (mặc định) until user changes.

Behavior:
- Assistant will read Plans ordered from highest priority to lowest before handling any new prompt.
- The assistant will refresh/read Plan files at the start of each run.

Files reflecting priorities:
- `t:\\23709281\\prompt\\Plan1\\md\\prompts.md` — master Plan1 file (highest priority).
- `t:\\23709281\\prompt\\Plan2\\md\\prompts.md` — Plan2 prompts file (priority 1).

To change priorities, edit this file or instruct the assistant to update specific Plan files.
