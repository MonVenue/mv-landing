<script setup>
import { ownerStats } from '@/data/content.js'
</script>

<template>
  <section id="owners" class="mv-container owners">
    <div class="owners__band">
      <div class="owners__copy">
        <span class="mv-eyebrow owners__eyebrow">For venue owners</span>
        <h2 class="owners__title">Own a space? List it in the app</h2>
        <p class="owners__lead">
          Add your venue from the same app, choose instant booking or approve each request, and get paid out
          after every confirmed booking. No subscription, no listing fee.
        </p>
        <a href="#download" class="mv-btn mv-btn--on-navy mv-btn--lg owners__cta">Get the app to list your venue</a>
      </div>

      <dl class="owners__stats">
        <div v-for="s in ownerStats" :key="s.label" class="owners__stat">
          <dt class="owners__label">{{ s.label }}</dt>
          <dd class="owners__value">{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.owners {
  padding-bottom: var(--mv-section);
}
.owners__band {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  align-items: center;
  gap: 64px;
  padding: 64px;
  border-radius: 24px;
  background: var(--mv-navy);
}
.owners__copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.owners__eyebrow {
  color: var(--mv-on-navy-muted);
}
.owners__title {
  color: var(--mv-white);
  font-weight: 500;
  font-size: clamp(30px, 3.2vw, 40px);
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.owners__lead {
  max-width: 520px;
  font-size: 17px;
  line-height: 28px;
  color: var(--mv-on-navy-muted);
}
.owners__cta {
  align-self: flex-start;
  margin-top: 16px;
}
.owners__stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
}
/* Figures first visually, labels after; dt stays first for screen readers */
.owners__stat {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 8px;
  padding: 4px 0 4px 24px;
  border-left: 1px solid var(--mv-on-navy-line);
}
.owners__value {
  margin: 0;
  font-family: var(--mv-font-display);
  font-weight: 500;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  color: var(--mv-mint);
}
.owners__label {
  max-width: 180px;
  font-size: 14px;
  line-height: 20px;
  color: var(--mv-on-navy-muted);
}

@media (max-width: 960px) {
  .owners__band {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
    padding: 48px;
  }
}
@media (max-width: 640px) {
  .owners__band {
    gap: 40px;
    padding: 40px 24px;
    border-radius: 20px;
  }
  .owners__cta {
    align-self: stretch;
  }
  .owners__value {
    font-size: 44px;
  }
}
</style>
