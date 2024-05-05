---
title: Moment-generating functions
date: 2024-05-04
---

If $X$ is a random variable, then the moment-generating function of $X$, denoted $M_X(t)$ or $M(t)$ when the context is clear, is
$$
    M_X(t) = \text{E}\left( e^{tX} \right)
$$
and exists for all values of $t\in (-h, h)$ where $h > 0$.

The MGF also has two interesting properties:

1. $\text{E}(X^k) = M_X^{(k)}(0)$

2. $\displaystyle M_X(t) = 1 + \sum_{k=1}^\infty \frac{\text{E}(X^k) t^k}{k!}$
