# Plan5 System Constraints

## Execution constraints
- Use available scripts only: `npm run lint`, `npm run build`.
- If no unit test framework exists, treat lint/build as baseline verification tests.
- Record command, status, and concise output summary.

## Debug constraints
- Do not change backend API contracts.
- Focus on compile/runtime safety and maintain existing routing/auth behavior.

## Reporting constraints
- Every finding must map to an update requirement in P502.
- Include pass/fail status and follow-up action.
