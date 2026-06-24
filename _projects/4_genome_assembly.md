---
layout: page
title: AI-Driven Genome Assembly & Variant Calling
description: AI and bioinformatics methods for more accurate, continuous genome assemblies and improved downstream analysis
img: assets/img/dna.png
importance: 4
category: published
related_publications: true
---

**Status:** Published in *G3: Genes, Genomes, Genetics* (2018); methods extended with AI-based approaches
**First Authors:** Edwin A. Solares & Mahul Chakraborty (co-first authors)
**Collaborators:** Danny E. Miller, Shannon Kalsow, Kate Hall, Anoja G. Perera, J.J. Emerson, R. Scott Hawley

---

## Overview

We develop AI and bioinformatics approaches to produce more accurate, continuous genome assemblies that enable better downstream analysis. Our foundational work demonstrated that reference-quality genomes could be assembled at a fraction of traditional costs, and ongoing efforts apply machine learning to improve assembly contiguity, error correction, and structural variant resolution.

## The Problem

Fragmented or error-prone genome assemblies introduce systematic biases into every analysis built on top of them: gene annotation, variant calling, population genomics, and evolutionary comparisons all suffer when the underlying reference is incomplete.

- **Assembly gaps** obscure repetitive and structurally complex regions where important functional elements reside
- **Misassemblies** propagate errors into downstream analyses, leading to false variant calls and incorrect evolutionary inferences
- **Cost barriers** historically limited high-quality assemblies to a handful of model organisms

## Our Approach

### Foundational Methods
We demonstrated that combining low-coverage long-read sequencing (PacBio, ~20-30X) with strategic use of related reference genomes and optimized assembly algorithms could produce reference-quality genomes at less than 10% of traditional costs.

### AI and Computational Extensions
- Machine learning for assembly quality assessment and error detection
- Computational methods for resolving complex structural variants and repetitive regions
- Automated pipelines integrating multiple data types (long reads, short reads, Hi-C) for maximally continuous assemblies

## Key Results

### Assembly Quality
- Achieved **reference-quality contiguity** (N50 >1 Mb)
- **>98% gene completeness** (BUSCO assessment)
- Accurate representation of structural variants critical for downstream population and evolutionary analyses

### Accessibility
- **90% cost reduction** compared to traditional methods
- **Total cost: <$2,000 per genome** (vs. $20,000+ traditional)
- Method adopted by dozens of labs worldwide across insects, plants, and fungi

## Impact

- Cited **75+ times** in genome assembly literature
- Contributed to the broader movement of making high-quality genomics accessible to resource-limited labs
- Continuous, accurate assemblies from this work underpin downstream analyses across multiple ESB AI Lab research programs, including crop genomics, conservation genetics, and structural variant discovery

## Code Repositories

- **[HapSolo](https://github.com/ESB-AI-Lab/HapSolo):** Optimization tool for reducing haplotigs and duplicate contigs in diploid genome assemblies

## Publication

Solares, E.A., Chakraborty, M., Miller, D.E., et al. (2018). "Rapid Low-Cost Assembly of the *Drosophila melanogaster* Reference Genome Using Low-Coverage, Long-Read Sequencing." *G3: Genes, Genomes, Genetics*, 8(10), 3143-3154.
