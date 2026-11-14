<script setup>
import MvIcon from './MvIcon.vue'

defineProps({
  venue: { type: Object, required: true },
})
</script>

<template>
  <article class="mv-card venue">
    <div
      class="venue__photo"
      :style="{ backgroundColor: venue.tone, backgroundImage: venue.photo ? `url(${venue.photo})` : undefined }"
      role="img"
      :aria-label="venue.photo ? `${venue.name} photo` : 'Venue photo placeholder'"
    >
      <span class="venue__badge">
        <MvIcon v-if="venue.instant" name="bolt" :size="12" fill="var(--mv-mint)" stroke="none" />
        <MvIcon v-else name="clock" :size="12" stroke="var(--mv-teal)" :stroke-width="2.5" />
        {{ venue.instant ? 'Instant book' : 'On request' }}
      </span>
    </div>

    <div class="venue__body">
      <div class="venue__head">
        <div class="venue__titles">
          <h3 class="venue__name">{{ venue.name }}</h3>
          <span class="venue__meta">{{ venue.location }} · {{ venue.type }}</span>
        </div>
        <span class="venue__rating">
          <MvIcon name="star" :size="14" fill="var(--mv-champagne)" stroke="none" />
          New
        </span>
      </div>

      <div class="venue__facts">
        <span><MvIcon name="users" :size="14" />{{ venue.capacity }}</span>
        <span><MvIcon :name="venue.featureIcon" :size="14" />{{ venue.feature }}</span>
      </div>

      <div class="venue__foot">
        <span class="venue__price">
          {{ venue.price }} <small>{{ venue.unit }}</small>
        </span>
        <a
          href="#top"
          class="mv-btn"
          :class="venue.instant ? 'mv-btn--primary' : 'mv-btn--secondary'"
          style="min-height: 40px; padding: 0 16px; font-size: 14px; border-radius: 10px"
        >
          {{ venue.instant ? 'Book now' : 'Request' }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.venue {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.venue__photo {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 220px;
  padding: 14px;
  background-size: cover;
  background-position: center;
}
.venue__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: var(--mv-radius-pill);
  background: var(--mv-white);
  color: var(--mv-navy);
  font-family: var(--mv-font-display);
  font-weight: 700;
  font-size: 12px;
}
.venue__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px 20px;
}
.venue__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.venue__titles {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.venue__name {
  font-weight: 700;
  font-size: 18px;
}
.venue__meta {
  font-size: 14px;
  color: var(--mv-slate);
}
.venue__rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  font-size: 14px;
}
.venue__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 13px;
  color: var(--mv-slate);
}
.venue__facts span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.venue__foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid var(--mv-border);
}
.venue__price {
  font-family: var(--mv-font-display);
  font-weight: 700;
  font-size: 16px;
  color: var(--mv-navy);
}
.venue__price small {
  font-family: var(--mv-font-body);
  font-weight: 400;
  font-size: 13px;
  color: var(--mv-slate);
}
</style>
