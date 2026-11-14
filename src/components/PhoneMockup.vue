<script setup>
import MvIcon from './MvIcon.vue'
import VenueScene from './VenueScene.vue'
import mark from '@/assets/img/mark.png'
</script>

<template>
  <div class="phone" role="img" aria-label="The MonVenue app showing wedding venues near Beirut">
    <div class="phone__screen">
      <div class="phone__notch"></div>
      <div class="phone__content">
        <div class="phone__top">
          <img :src="mark" alt="" class="phone__mark" />
          <span class="phone__avatar">RK</span>
        </div>
        <div class="phone__title">Find a space near Beirut</div>
        <div class="phone__search">
          <MvIcon name="search" :size="14" />
          Wedding · 200 guests · 14 June
        </div>
        <div class="phone__chips">
          <span class="phone__chip phone__chip--on">All</span>
          <span class="phone__chip">Instant</span>
          <span class="phone__chip">Garden</span>
          <span class="phone__chip">Sea view</span>
        </div>
        <div class="phone__card">
          <div class="phone__photo">
            <VenueScene name="weddings" />
            <span class="phone__badge">
              <MvIcon name="bolt" :size="10" fill="var(--mv-teal)" stroke="none" />
              Instant book
            </span>
          </div>
          <div class="phone__body">
            <div class="phone__name">Seaside Garden Hall</div>
            <div class="phone__meta">Jounieh · Up to 300 guests</div>
            <div class="phone__row">
              <span class="phone__price">From $1,800</span>
              <span class="phone__book">Book</span>
            </div>
          </div>
        </div>
        <div class="phone__card">
          <div class="phone__photo phone__photo--short">
            <VenueScene name="rooftops" />
          </div>
          <div class="phone__body">
            <div class="phone__name">Rooftop at Mar Mikhael</div>
            <div class="phone__meta">Beirut · Up to 120 guests</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.phone {
  width: 300px;
  height: 616px;
  padding: 12px;
  border-radius: 44px;
  background: var(--mv-navy);
  box-shadow: 0 24px 48px rgba(10, 35, 64, 0.16), 0 2px 6px rgba(10, 35, 64, 0.08);
}
.phone__screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 32px;
  background: var(--mv-ivory);
  display: flex;
  flex-direction: column;
}
.phone__notch {
  flex: none;
  width: 88px;
  height: 24px;
  margin: 12px auto 0;
  border-radius: 12px;
  background: var(--mv-navy);
}
.phone__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 16px 0;
}
.phone__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.phone__mark {
  height: 24px;
  width: auto;
}
.phone__avatar {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--mv-pale-mint);
  color: var(--mv-teal);
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 11px;
}
.phone__title {
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: var(--mv-navy);
}
.phone__search {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid var(--mv-border);
  border-radius: 10px;
  background: var(--mv-white);
  font-size: 12px;
  color: var(--mv-slate);
}
.phone__chips {
  display: flex;
  gap: 4px;
  font-size: 11px;
  font-weight: 500;
}
.phone__chip {
  padding: 4px 10px;
  border-radius: 12px;
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  color: var(--mv-slate);
  white-space: nowrap;
}
.phone__chip--on {
  background: var(--mv-navy);
  border-color: var(--mv-navy);
  color: var(--mv-white);
}
.phone__card {
  overflow: hidden;
  border: 1px solid var(--mv-border);
  border-radius: 14px;
  background: var(--mv-white);
}
.phone__photo {
  position: relative;
  height: 128px;
  background: var(--mv-navy);
}
.phone__photo--short {
  height: 96px;
}
.phone__badge {
  position: absolute;
  top: 8px;
  left: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--mv-white);
  color: var(--mv-navy);
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
}
.phone__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px;
}
.phone__name {
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--mv-navy);
}
.phone__meta {
  font-size: 11px;
  line-height: 16px;
  color: var(--mv-slate);
}
.phone__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}
.phone__price {
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: var(--mv-navy);
}
.phone__book {
  padding: 4px 12px;
  border-radius: 8px;
  background: var(--mv-teal);
  color: var(--mv-white);
  font-family: var(--mv-font-display);
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
}
</style>
