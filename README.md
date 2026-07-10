# hoBIT: Profile-Aware RAG for Academic Advising

This repository hosts the project page for:

**hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising**

[Project Page](https://hobit-emnlp.github.io/) · [Paper PDF](https://hobit-emnlp.github.io/static/pdf/hobit-paper.pdf)

## Overview

University advising questions often look identical on the surface, but the correct answer depends on a student's profile: department, admission cohort, grade, major type, and student status. A profile-blind RAG system can retrieve a semantically similar curriculum document while still citing the wrong cohort or rule.

hoBIT treats a schema-typed session profile as a first-class retrieval signal. It enriches documents with profile metadata offline, acquires missing profile fields through dual-asking online, and injects the profile into retrieval through both a soft query prefix and a hard metadata filter.

## Key Ideas

- **Profile-aware retrieval:** Student profile fields are used directly during retrieval, not only in the prompt.
- **Dual-asking:** hoBIT asks for missing fields proactively before retrieval and reactively when cited evidence requires more profile detail.
- **Filter-prefix synergy:** The soft prefix improves recall, while the hard filter removes wrong-cohort distractors.
- **Source-tracked answers:** Responses are grounded in cited curriculum or advising evidence.
- **Deployability:** Open-weight retrievers and generators remain competitive, supporting lower-cost on-premise deployment.

## Main Findings

On a 3,400-case evaluation suite:

- Profile injection dominates other retrieval components.
- Profile-blind reranking and HyDE become redundant once the profile is available.
- Combining soft profile prefixing with hard payload filtering gives the strongest top-rank retrieval.
- Open embeddings and generators can match or exceed the proprietary baseline on key faithfulness metrics.

## Website Contents

- `index.html` - the GitHub Pages project page.
- `static/pdf/hobit-paper.pdf` - paper PDF used by the page.
- `static/images/` - rendered paper figures and demo screenshots.
- `static/css/` and `static/js/` - static page assets.

## Citation

```bibtex
@inproceedings{anonymous2026hobit,
  title     = {hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising},
  author    = {Anonymous ACL submission},
  booktitle = {Proceedings of EMNLP 2026: System Demonstrations},
  year      = {2026}
}
```
