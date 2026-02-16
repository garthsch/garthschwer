---
status: 🌿 budding
tags:
  - workflows
  - artificial-intelligence
  - digital-garden
  - pkm
  - gemini
---

# AI-Augmented Digital Gardening

> **Definition:** A structured workflow that utilizes Large Language Models (LLMs) to accelerate the maturity of notes from rough ideas to polished, evergreen content.

## The Maturity Pipeline
This workflow treats AI not as a writer, but as a specialized editor that helps move notes through specific stages of the [[Digital Garden]] maturity model:

1.  **Seedling Phase (Capture):**
    * *Human Action:* Rapidly capturing fleeting thoughts, bullet points, or questions.
    * *AI Role:* None yet. Speed is the priority.
2.  **Budding Phase (Expansion):**
    * *Human Action:* Reviewing the seedling and identifying gaps.
    * *AI Role:* The "Gardener." Using a specific prompt (or **Gemini Gem**) to structure the raw bullets, add context, and suggest [[Wiki-Links]] to existing concepts.
3.  **Evergreen Phase (Polishing):**
    * *Human Action:* Final verification, voice refinement, and publishing.
    * *AI Role:* The "Copy Editor." Checking for tonal consistency and clarity without altering the core insight.

## Architecture: Subscription vs. API
The implementation of this workflow presents a trade-off between convenience and control.

### Option A: The "Gems" Approach (Gemini Advanced)
Google's **Gemini Gems** allow for pre-prompted "personas." You can create a "Garden Architect Gem" pre-loaded with your specific style guide and formatting rules.
* **Pros:** Zero technical setup; excellent for the "Budding" phase where creative expansion is needed.
* **Cons:** Requires a monthly subscription (~$20/mo); content involves copy-pasting out of your vault; data lives in Google's ecosystem.

### Option B: The RAG Approach (Obsidian + API)
To replicate the experience of **NotebookLM**—where the AI "knows" your entire library—inside Obsidian, you cannot rely on the standard chat API alone. You need **Retrieval-Augmented Generation (RAG)**.
* **Mechanism:** A plugin (e.g., Smart Connections or Text Generator) indexes your vault, finds relevant notes, and feeds them to the API as context.
* **Economics:** The Gemini 1.5 Pro API offers a generous free tier for low-volume users. Even the paid tier is "pay-as-you-go," which is often significantly cheaper than a flat monthly subscription for text-only workflows.

## I wonder...
* Is the friction of copy-pasting into a Gemini Gem worth the superior reasoning capabilities of the 1.5 Pro model compared to lighter models integrated directly into Obsidian?
* Could I use a local LLM (via [[Ollama]]) for the "Seedling" expansion to maintain total privacy, only using the Gemini API for the final "Evergreen" polish?
* How do I standardise the "Prompts" across different stages so the AI doesn't hallucinate a new format every time?

## References
* [Google Gemini API Pricing](https://ai.google.dev/pricing)
* [Gemini Gems Overview](https://blog.google/products/gemini/google-gems-tips/)
* [[Digital Garden]] - *Internal Link*
* [[Retrieval-Augmented Generation]] - *Internal Link*