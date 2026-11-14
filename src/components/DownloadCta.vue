<script setup>
import StoreButtons from './StoreButtons.vue'
import mark from '@/assets/img/mark.png'
</script>

<template>
  <section id="download" class="dl">
    <div class="mv-container dl__inner">
      <img :src="mark" alt="" aria-hidden="true" class="dl__mark" />
      <h2 class="dl__title">Where every moment finds its place</h2>
      <p class="dl__lead">Download MonVenue and book your next venue from your phone</p>
      <StoreButtons align="center" class="dl__actions" />
    </div>
  </section>
</template>

<style scoped>
.dl {
  background: var(--mv-white);
  border-top: 1px solid var(--mv-border);
}
.dl__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: var(--mv-section);
  padding-bottom: var(--mv-section);
  text-align: center;
}
.dl__mark {
  height: 48px;
  width: auto;
  margin-bottom: 8px;
}
.dl__title {
  max-width: 720px;
  font-weight: 500;
  font-size: clamp(30px, 3.2vw, 40px);
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.dl__lead {
  max-width: 520px;
  font-size: 17px;
  line-height: 28px;
  color: var(--mv-slate);
}
.dl__actions {
  margin-top: 16px;
}
</style>
