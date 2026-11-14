<script setup>
import MvIcon from './MvIcon.vue'
import { storeLinks } from '@/data/content.js'

defineProps({
  align: { type: String, default: 'start' }, // 'start' | 'center'
})
</script>

<template>
  <div class="stores" :class="`stores--${align}`">
    <a :href="storeLinks.appStore" class="store">
      <MvIcon name="phone" :size="24" />
      <span class="store__text">
        <span class="store__small">Download on the</span>
        <span class="store__big">App Store</span>
      </span>
    </a>
    <a :href="storeLinks.googlePlay" class="store">
      <MvIcon name="android" :size="24" />
      <span class="store__text">
        <span class="store__small">Get it on</span>
        <span class="store__big">Google Play</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.stores {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.stores--center {
  justify-content: center;
}
.store {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 20px 0 16px;
  border-radius: var(--mv-radius-btn);
  background: var(--mv-navy);
  color: var(--mv-white);
  text-decoration: none;
  transition: background-color var(--mv-ease), transform var(--mv-ease);
}
.store:hover {
  background: var(--mv-navy-hover);
}
.store:active {
  transform: scale(0.98);
}
.store__text {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.store__small {
  font-size: 11px;
  line-height: 14px;
  color: var(--mv-on-navy-muted);
}
.store__big {
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
}

@media (max-width: 420px) {
  .store {
    flex: 1 1 100%;
    justify-content: center;
  }
}
</style>
