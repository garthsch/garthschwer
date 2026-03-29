# PARA Mapping for PKM-AI

This file maps current PKM folders to the Tiago Forte PARA model to create "AI Context Bundles".

| Folder | Category | Description |
|--------|----------|-------------|
| the-strategic-bridge | Project | Active research and writing on strategic frameworks. |
| the-workshop | Project | Implementation and tool-building (PKM tools, AI workflows). |
| classical-thinking | Area | Ongoing study of philosophy and logic (Long-term interest). |
| pattern-languages | Area | Ongoing study of architecture and design patterns. |
| private | Area/Archive | Personal context and sensitive historical data. |
| dispatches | Inbox | Raw captures, transcripts, and daily notes (Capture/Distill target). |
| assets | Resources | Supporting media and data files. |

## AI Context Bundle Logic
When a project is activated (e.g., "The Strategic Bridge"), PAI will:
1. Load `the-strategic-bridge/` as the PRIMARY context.
2. Load relevant files from `classical-thinking/` as SUPPORTING context (optional).
3. Ignore other PARA folders to prevent "context poisoning".
