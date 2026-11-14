<script setup>
import MvIcon from './MvIcon.vue'
import StoreButtons from './StoreButtons.vue'
import PhoneMockup from './PhoneMockup.vue'
</script>

<template>
  <section id="top" class="mv-container hero">
    <div class="hero__copy">
      <p class="hero__where">
        <MvIcon name="pin" :size="16" />
        Launching in Lebanon
      </p>
      <h1 class="hero__title">Find and book venues across&nbsp;Lebanon</h1>
      <p class="hero__lead">
        Wedding halls, rooftops, private dining rooms and pitches, with real photos, clear prices and live
        availability. Free on iOS and Android, in Arabic, English and French.
      </p>
      <StoreButtons class="hero__actions" />
    </div>

    <div class="hero__visual">
      <PhoneMockup />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  align-items: center;
  gap: 64px;
  padding-top: 64px;
}
.hero__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  animation: mv-rise var(--mv-enter) both;
}
.hero__where {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--mv-muted);
}
/* Sized so "Find and book venues" holds one line at every width */
.hero__title {
  font-weight: 500;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.04;
  letter-spacing: -0.03em;
}
.hero__lead {
  max-width: 540px;
  font-size: 19px;
  line-height: 30px;
  color: var(--mv-slate);
}
.hero__actions {
  margin-top: 8px;
}
.hero__visual {
  display: flex;
  justify-content: center;
  animation: mv-rise var(--mv-enter) 60ms both;
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
    padding-top: 48px;
  }
  .hero__title {
    font-size: clamp(32px, 9vw, 56px);
    letter-spacing: -0.02em;
  }
}
@media (max-width: 640px) {
  .hero__lead {
    font-size: 17px;
    line-height: 28px;
  }
}
</style>
