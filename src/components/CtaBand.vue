<script setup>
import { ref } from 'vue'
import mark from '@/assets/img/mark.png'

const email = ref('')
const sent = ref(false)

function join() {
  // Wire to your waitlist endpoint later.
  sent.value = true
}
</script>

<template>
  <section class="mv-container cta">
    <img :src="mark" alt="" aria-hidden="true" class="cta__mark" />
    <h2 class="cta__title">Where every moment finds its place.</h2>
    <p class="cta__lead">
      Be first to know when MonVenue opens in your city. No spam, just the launch and a few venues worth seeing.
    </p>

    <form v-if="!sent" class="cta__form" aria-label="Join the launch list" @submit.prevent="join">
      <label for="cta-email" class="mv-sr-only">Email address</label>
      <input id="cta-email" v-model="email" type="email" required placeholder="you@example.com" class="cta__input" />
      <button type="submit" class="mv-btn mv-btn--primary mv-btn--lg">Join the list</button>
    </form>
    <p v-else class="cta__thanks" role="status">Thanks, you're on the list.</p>
  </section>
</template>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
}
.cta__mark {
  height: 56px;
  width: auto;
}
.cta__title {
  max-width: 720px;
  font-weight: 800;
  font-size: clamp(30px, 3.4vw, 40px);
  line-height: 1.12;
}
.cta__lead {
  max-width: 560px;
  font-size: 18px;
  color: var(--mv-slate);
}
.cta__form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 520px;
  margin-top: 8px;
}
.cta__input {
  flex: 1 1 260px;
  min-width: 0;
  min-height: 50px;
  padding: 0 16px;
  border: 1px solid var(--mv-border);
  border-radius: var(--mv-radius-btn);
  background: var(--mv-white);
  font-size: 15px;
  color: var(--mv-charcoal);
}
.cta__thanks {
  font-family: var(--mv-font-display);
  font-weight: 600;
  color: var(--mv-teal);
}
</style>
