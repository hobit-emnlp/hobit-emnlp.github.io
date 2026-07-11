# hoBIT: Profile-Aware RAG for Academic Advising

This repository hosts the project page for:

**hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising**

[Project Page](https://hobit-emnlp.github.io/) · [Paper PDF](https://hobit-emnlp.github.io/static/pdf/hobit-paper.pdf)

## Overview

In university academic advising, identical questions can require different answers depending on a student's department, admission cohort, and degree program. A profile-blind retriever can surface semantically similar but inapplicable evidence.

proFILL extends hoBIT with profile-aware indexing and on-demand adaptive profiling. It annotates institutional evidence with applicable profile values offline, acquires only the attributes needed for each query online, and conditions retrieval using soft query augmentation and hard filtering.

## Key Ideas

- **Offline profile-aware indexing:** Chunks are annotated with the profile values for which they are valid.
- **Query-driven profiling:** Missing profile attributes are requested only when the query requires them.
- **Evidence-driven profiling:** Retrieved evidence can trigger targeted follow-up questions and re-retrieval.
- **Soft augmentation + hard filtering:** Profile values are prepended to the query and used to filter incompatible chunks.
- **Deployability:** Open-weight retrievers and generators remain competitive, supporting lower-cost on-premise deployment.

## Main Findings

On the paper's profile-grounded QA evaluation:

- In the deployment setting, proFILL reaches 0.593 MRR, 0.749 Source Match, and 0.625 Grounded Correctness.
- In the oracle setting with complete profiles, proFILL reaches 0.780 MRR and 0.847 Source Match.
- Both soft query augmentation and hard filtering are critical in ablation.
- In a blind pairwise study with 48 students, proFILL is preferred on all ten profile-dependent questions, with an 85.3% aggregate non-tie win rate.

## Website Contents

- `index.html` - the GitHub Pages project page.
- `static/pdf/hobit-paper.pdf` - paper PDF used by the page.
- `static/images/` - rendered paper figures and demo screenshots.
- `static/css/` and `static/js/` - static page assets.
