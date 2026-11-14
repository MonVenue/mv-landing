<script setup>
import { ref } from 'vue'
import MvIcon from './MvIcon.vue'
import logo from '@/assets/img/logo-h.png'
import { navLinks } from '@/data/content.js'

const open = ref(false)
</script>

<template>
  <header class="nav">
    <nav class="mv-container nav__inner" aria-label="Main">
      <a href="#top" class="nav__logo" aria-label="MonVenue home">
        <img :src="logo" alt="MonVenue" width="160" height="32" />
      </a>

      <button
        class="nav__toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="nav-menu"
        @click="open = !open"
      >
        <span class="mv-sr-only">Menu</span>
        <span class="nav__bar" aria-hidden="true"></span>
        <span class="nav__bar" aria-hidden="true"></span>
        <span class="nav__bar" aria-hidden="true"></span>
      </button>

      <div id="nav-menu" class="nav__menu" :class="{ 'nav__menu--open': open }">
        <div class="nav__links">
          <a v-for="l in navLinks" :key="l.href" :href="l.href" class="nav__link" @click="open = false">
            {{ l.label }}
          </a>
        </div>
        <a href="#download" class="mv-btn mv-btn--primary nav__cta" @click="open = false">
          <MvIcon name="download" :size="16" />
          Get the app
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--mv-ivory);
  border-bottom: 1px solid var(--mv-border);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 72px;
}
.nav__logo {
  display: flex;
  border-radius: 4px;
}
.nav__logo img {
  height: 32px;
  width: auto;
}
.nav__menu {
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  justify-content: flex-end;
}
.nav__links {
  display: flex;
  gap: 32px;
  font-size: 15px;
  font-weight: 500;
}
.nav__link {
  color: var(--mv-slate);
  text-decoration: none;
  border-radius: 4px;
  transition: color var(--mv-ease);
}
.nav__link:hover {
  color: var(--mv-navy);
}
.nav__cta {
  min-height: 40px;
  padding: 0 16px;
}
.nav__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 44px;
  height: 44px;
  padding: 12px;
  background: transparent;
  border: 1px solid var(--mv-border);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color var(--mv-ease);
}
.nav__toggle:hover {
  background: var(--mv-white);
}
.nav__bar {
  display: block;
  height: 2px;
  background: var(--mv-navy);
  border-radius: 2px;
}

@media (max-width: 860px) {
  .nav__inner {
    height: 64px;
  }
  .nav__logo img {
    height: 28px;
  }
  .nav__toggle {
    display: flex;
  }
  .nav__menu {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 16px var(--mv-gutter) 24px;
    background: var(--mv-ivory);
    border-bottom: 1px solid var(--mv-border);
  }
  .nav__menu--open {
    display: flex;
    animation: mv-rise 200ms var(--mv-curve);
  }
  .nav__links {
    flex-direction: column;
    gap: 4px;
    font-size: 16px;
  }
  .nav__link {
    display: flex;
    align-items: center;
    min-height: 40px;
    color: var(--mv-navy);
  }
  .nav__cta {
    min-height: 44px;
  }
}
</style>
