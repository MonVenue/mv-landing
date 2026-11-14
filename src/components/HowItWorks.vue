<script setup>
import { steps } from '@/data/content.js'
</script>

<template>
  <section id="how" class="how">
    <div class="mv-container how__inner">
      <div class="how__head">
        <span class="mv-eyebrow">How it works</span>
        <h2 class="mv-h2">From download to booked in minutes</h2>
      </div>
      <ol class="how__grid">
        <li v-for="(s, i) in steps" :key="s.title" class="how__step">
          <div class="how__marker" aria-hidden="true">
            <span class="how__num">{{ i + 1 }}</span>
            <span class="how__rule"></span>
          </div>
          <h3 class="how__title">{{ s.title }}</h3>
          <p class="how__body">{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  background: var(--mv-white);
  border-top: 1px solid var(--mv-border);
  border-bottom: 1px solid var(--mv-border);
}
.how__inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: var(--mv-section);
  padding-bottom: var(--mv-section);
}
.how__head {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 640px;
}
.how__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.how__step {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
/* The numbers and the rule between them read as one sequence across the row */
.how__marker {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.how__num {
  flex: none;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--mv-border);
  border-radius: 50%;
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  color: var(--mv-navy);
}
.how__rule {
  flex: 1;
  height: 1px;
  background: var(--mv-border);
}
.how__step:last-child .how__rule {
  visibility: hidden;
}
.how__title {
  font-size: 20px;
  line-height: 28px;
}
.how__body {
  margin-top: 8px;
  max-width: 360px;
  color: var(--mv-slate);
}

@media (max-width: 860px) {
  .how__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .how__marker {
    margin-bottom: 16px;
  }
  .how__rule {
    display: none;
  }
}
</style>
