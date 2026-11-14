<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import CategoriesSection from './components/CategoriesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import TrustSection from './components/TrustSection.vue'
import OwnersBand from './components/OwnersBand.vue'
import DownloadCta from './components/DownloadCta.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <CategoriesSection />
    <HowItWorks />
    <TrustSection />
    <OwnersBand />
    <DownloadCta />
  </main>
  <SiteFooter />
</template>
