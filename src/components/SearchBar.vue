<script setup>
import { reactive } from 'vue'
import MvIcon from './MvIcon.vue'

const emit = defineEmits(['search'])

const query = reactive({ location: '', type: '', date: '', guests: '' })

const fields = [
  { key: 'location', label: 'Where', placeholder: 'Beirut, Batroun, Faraya…' },
  { key: 'type', label: 'Event type', placeholder: 'Wedding, meeting, match…' },
  { key: 'date', label: 'Date', placeholder: 'Add a date' },
  { key: 'guests', label: 'Guests', placeholder: 'How many?' },
]

function submit() {
  emit('search', { ...query })
}
</script>

<template>
  <form class="search" aria-label="Search venues" @submit.prevent="submit">
    <template v-for="(f, i) in fields" :key="f.key">
      <div v-if="i > 0" class="search__divider" aria-hidden="true"></div>
      <div class="search__field">
        <label :for="`s-${f.key}`" class="search__label">{{ f.label }}</label>
        <input :id="`s-${f.key}`" v-model="query[f.key]" type="text" :placeholder="f.placeholder" class="search__input" />
      </div>
    </template>
    <button type="submit" class="mv-btn mv-btn--primary search__submit">
      <MvIcon name="search" :size="18" :stroke-width="2.2" />
      Search
    </button>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  padding: 10px;
  background: var(--mv-white);
  border: 1px solid var(--mv-border);
  border-radius: 16px;
  box-shadow: var(--mv-shadow-soft);
}
.search__field {
  flex: 1 1 140px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
}
.search__label {
  font-family: var(--mv-font-display);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--mv-navy);
}
.search__input {
  width: 100%;
  min-height: 28px;
  padding: 4px 0;
  border: 0;
  background: transparent;
  font-size: 15px;
  color: var(--mv-charcoal);
}
.search__input::placeholder {
  color: var(--mv-slate);
}
.search__divider {
  width: 1px;
  margin: 10px 0;
  background: var(--mv-border);
}
.search__submit {
  flex: 0 0 auto;
  align-self: center;
  min-height: 52px;
  padding: 0 22px;
}

@media (max-width: 640px) {
  .search__divider {
    display: none;
  }
  .search__field {
    flex-basis: 100%;
    border-bottom: 1px solid var(--mv-border);
  }
  .search__submit {
    width: 100%;
    margin-top: 4px;
  }
}
</style>
