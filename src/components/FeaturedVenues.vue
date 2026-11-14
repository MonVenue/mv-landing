<script setup>
import { ref, computed } from 'vue'
import VenueCard from './VenueCard.vue'
import { venues, regions } from '@/data/content.js'

const active = ref('All')
const shown = computed(() => (active.value === 'All' ? venues : venues.filter((v) => v.region === active.value)))
</script>

<template>
  <section id="featured" class="mv-container featured">
    <div class="mv-section-head">
      <div>
        <span class="mv-eyebrow">Featured</span>
        <h2 class="mv-h2">Spaces people are booking</h2>
      </div>
      <div class="featured__filters" role="group" aria-label="Filter by region">
        <button
          v-for="r in regions"
          :key="r"
          type="button"
          class="mv-btn mv-btn--pill"
          :class="active === r ? 'mv-btn--primary' : 'mv-btn--secondary'"
          :aria-pressed="active === r"
          @click="active = r"
        >
          {{ r }}
        </button>
      </div>
    </div>

    <div class="featured__grid">
      <VenueCard v-for="v in shown" :key="v.id" :venue="v" />
      <p v-if="!shown.length" class="featured__empty">No featured venues in this region yet.</p>
    </div>
  </section>
</template>

<style scoped>
.featured {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.featured__filters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}
.featured__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.featured__empty {
  grid-column: 1 / -1;
  color: var(--mv-slate);
}

@media (max-width: 1024px) {
  .featured__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .featured__grid {
    grid-template-columns: 1fr;
  }
  .featured {
    padding-top: 56px;
    padding-bottom: 56px;
  }
}
</style>
