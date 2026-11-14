<script setup>
import logoWhite from '@/assets/img/logo-h-white.png'
import { footerLinks } from '@/data/content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="mv-container footer__inner">
      <div class="footer__top">
        <img :src="logoWhite" alt="MonVenue" class="footer__logo" />
        <nav class="footer__links" aria-label="Footer">
          <a v-for="l in footerLinks" :key="l.label" :href="l.href" class="footer__link">{{ l.label }}</a>
        </nav>
      </div>
      <div class="footer__bottom">
        <span>© {{ year }} MonVenue · Beirut, Lebanon</span>
        <span class="footer__langs">
          <span>English</span>
          <span lang="ar">العربية</span>
          <span lang="fr">Français</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--mv-navy);
  color: var(--mv-white);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 48px;
  padding-bottom: 32px;
}
.footer__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.footer__logo {
  height: 32px;
  width: auto;
}
.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  font-size: 14px;
}
.footer__link {
  color: var(--mv-on-navy-muted);
  text-decoration: none;
  border-radius: 4px;
  transition: color var(--mv-ease);
}
.footer__link:hover {
  color: var(--mv-white);
}
.footer__link:focus-visible {
  outline-color: var(--mv-mint);
}
.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid var(--mv-on-navy-line);
  font-size: 13px;
  line-height: 20px;
  color: var(--mv-on-navy-muted);
}
.footer__langs {
  display: inline-flex;
  gap: 16px;
}
</style>
