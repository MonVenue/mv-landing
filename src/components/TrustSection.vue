<script setup>
import MvIcon from './MvIcon.vue'
import { trustItems } from '@/data/content.js'
</script>

<template>
  <section id="why" class="mv-container trust">
    <div class="trust__head">
      <span class="mv-eyebrow">Why MonVenue</span>
      <h2 class="mv-h2">Built for trust on both sides</h2>
    </div>
    <ul class="trust__grid">
      <li v-for="t in trustItems" :key="t.title" class="trust__item">
        <MvIcon :name="t.icon" :size="20" class="trust__icon" />
        <h3 class="trust__title">{{ t.title }}</h3>
        <p class="trust__body">{{ t.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.trust {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 64px;
  padding-top: var(--mv-section);
  padding-bottom: var(--mv-section);
}
.trust__head {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
}
.trust__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 48px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.trust__item {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding-top: 24px;
  border-top: 1px solid var(--mv-border);
}
.trust__icon {
  color: var(--mv-navy);
}
.trust__title {
  margin-top: 16px;
  font-size: 18px;
  line-height: 28px;
}
.trust__body {
  margin-top: 4px;
  font-size: 15px;
  line-height: 24px;
  color: var(--mv-slate);
}

@media (max-width: 960px) {
  .trust {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .trust__head {
    max-width: 640px;
  }
}
@media (max-width: 560px) {
  .trust__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
}
</style>
