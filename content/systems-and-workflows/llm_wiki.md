---
title: 'llm-wiki'
date: 2026-05-24
type: Protocol
maturity: Sapling
publish: false
folder: systems-and-workflows
tags:
  - pkm
  - llm-wiki
  - retrieval-augmented-generation
nlm_source_id: "nlm_doc_b9943a45"
source_ref: "G:/My Drive/WikiLLM_Raw/library/llm-wiki.md"
model_version: "gemini-3.5-flash"
---

# llm-wiki

## Core Extraction (Thesis & Synthesis)
**The LLM Wiki pattern replaces standard de-contextualized Retrieval-Augmented Generation (RAG) by having an LLM incrementally build and maintain a persistent, compounding wiki of structured markdown files.** Unlike standard RAG systems that query raw documents in a vacuum and re-derive insights from scratch for every request, this methodology compiles incoming sources once, dynamically integrating new data, resolving contradictions, and maintaining bi-directional connections. The resulting wiki acts as a persistent repository where the analytical heavy-lifting is done upfront at the ingestion step, allowing subsequent user queries to benefit from pre-synthesized networks of information.

The architecture decouples immutable **raw sources** from the LLM-owned **wiki** directory, governed by a versioned **schema contract** (like `CLAUDE.md` or `AGENTS.md`) to establish content governance. Standardized operations include structured ingestion, user querying, and periodic lint checks to resolve orphans and conceptual gaps. This keeps the maintenance cost of the knowledge base near zero, allowing the human to focus strictly on curation, exploration, and synthesis.

## Source Grounding
- **Source Document:** [[llm-wiki.md]]
- **Exact Citation:** Local Reference

## Semantic Connections
- Links:
  - **Concept Anchors**:
    - [[LLM Wiki]]: A design pattern for managing personal knowledge by using an LLM to incrementally build and maintain a persistent, compounding folder of markdown files.
    - [[Retrieval-Augmented Generation]]: A RAG framework that retrieves raw content chunks at query time to generate answers without persistent accumulation.
    - [[Schema Contract]]: A governance document defining folder structures, metadata standards, and LLM editing rules for a wiki.
  - **Relational Connections**:
    - [[LLM Wiki]] challenges [[Retrieval-Augmented Generation]] by compiling and interlinking insights once at ingestion rather than re-deriving them at query time.
    - [[Schema Contract]] guides the operations of [[LLM Wiki]] by locking the LLM into strict editing and indexing constraints.

## Inquiry & Speculation
- What are the performance and cost thresholds of text-based index files like `index.md` before moving to vector databases?
- How do we handle file conflicts and transaction safety when multiple human editors and agent sub-routines commit to the same Git repository?
- Can we expose local hybrid search engines (like `qmd`) to LLM agents as native Model Context Protocol (MCP) tools for high-speed indexing?

## References
- [Andrej Karpathy's LLM Wiki GitHub Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [Vannevar Bush's As We May Think (1945)](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/)
