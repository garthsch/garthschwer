---
type: isa
effort_tier: STANDARD
algorithm_phase: OBSERVE
created: {{date}}
updated: {{date}}
status: active
tags:
  - athena/isa
---

# ISA: [Task Title]

**Description**: [Provide a brief, high-signal description of the objective and background context.]

---

## 1. Constraints & Boundaries
List the explicit constraints and exclusions extracted from the task definition.
*   **[EX-1]**: [Constraint 1]
*   **[EX-2]**: [Constraint 2]
*   **[EX-3]**: [Exclusion or limitation]

---

## 2. Ideal State Criteria (Success Matrix)
The specific, verifiable outcomes that define task completion. These double as verification tests.

| ID | Requirement (Ideal State) | Verification Method | Status |
|---|---|---|---|
| 1 | [Requirement 1] | [Verification Command or Criteria] | [ ] PENDING |
| 2 | [Requirement 2] | [Verification Command or Criteria] | [ ] PENDING |
| 3 | [Requirement 3] | [Verification Command or Criteria] | [ ] PENDING |

---

## 3. Phase Logs (Orchestration History)

### Phase 1: OBSERVE
*   [ ] Extract all constraints (`[EX-N]`).
*   [ ] Initialize the Success Matrix (ISC table).
*   **Log**: [Observation details]

### Phase 2: THINK
*   [ ] Identify potential edge cases or failure modes ("What if I'm wrong?").
*   [ ] Confirm token-efficiency measures (e.g., Graphify scope limits).
*   **Log**: [Interrogation and alternatives considered]

### Phase 3: PLAN
*   [ ] Order dependencies and critical path.
*   [ ] Establish automated test commands.
*   **Log**: [Execution plan or checklist]

### Phase 4: BUILD
*   [ ] Initialize the test harness/environment.
*   [ ] Write verification checks/tests before major code edits.
*   **Log**: [Build state and setup verification]

### Phase 5: EXECUTE
*   [ ] Run execution steps.
*   [ ] Maintain drift checks against `[EX-N]` constraints.
*   **Log**: [Execution milestones and tool telemetry log paths]

### Phase 6: VERIFY
*   [ ] Run automated verification tests.
*   [ ] Check off each row in the Success Matrix.
*   **Log**: [Verification proof / command outputs]

### Phase 7: LEARN
*   [ ] Capture 1–3 insights (best practices, corrections, patterns).
*   [ ] Assign a satisfaction score (1-5).
*   **Log**: [Euphoric Surprise / retrospective]
