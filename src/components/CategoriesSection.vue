<script setup>
import VenueScene from './VenueScene.vue'
import { categories } from '@/data/content.js'
</script>

<template>
  <section class="mv-container cats">
    <div class="cats__head">
      <span class="mv-eyebrow">One app</span>
      <h2 class="mv-h2">For every kind of occasion</h2>
    </div>

    <ul class="cats__grid">
      <li v-for="c in categories" :key="c.id" class="cats__item">
        <div class="cats__photo">
          <VenueScene :name="c.id" />
        </div>
        <div class="cats__body">
          <span class="cats__name">{{ c.name }}</span>
          <span class="cats__sub">{{ c.sub }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.cats {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: var(--mv-section);
  padding-bottom: var(--mv-section);
}
.cats__head {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 640px;
}
.cats__grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.cats__item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
/* Signature: venue photos are cropped to the arched doorway from the logo mark.
   40% of a 4:5 box equals half its width, so the top is a true semicircle. */
.cats__photo {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 50% 50% 12px 12px / 40% 40% 12px 12px;
  background: var(--mv-navy);
}
.cats__photo::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(10, 35, 64, 0.08);
  border-radius: inherit;
  pointer-events: none;
}
.cats__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.cats__name {
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--mv-navy);
}
.cats__sub {
  font-size: 14px;
  line-height: 20px;
  color: var(--mv-slate);
}

@media (max-width: 1024px) {
  .cats__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 32px;
  }
}
@media (max-width: 560px) {
  .cats {
    gap: 32px;
  }
  .cats__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px;
  }
  .cats__item {
    gap: 12px;
  }
}
</style>
