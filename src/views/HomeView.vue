<template>
  <div class="min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">
        {{ t('welcome') }}
      </h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <p class="text-gray-600 mb-4">
          {{ t('name') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-xl font-semibold mb-2">
              {{ t('menu.home') }}
            </h2>
            <p class="text-gray-600">
              {{ t('welcome') }}
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="text-xl font-semibold mb-2">
              {{ t('menu.assistant') }}
            </h2>
            <p class="text-gray-600">
              {{ t('welcome') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const { t, locale } = useI18n()
    
    return {
      t,
      locale
    }
  }
})
</script>

<style scoped>
.home {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}
</style>