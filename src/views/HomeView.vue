<template>
  <div class="overflow-hidden bg-gray-50">
    <div class="h-full flex items-center justify-center">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-8">
          {{ t('home.welcome') }}
        </h1>
        <p class="text-xl text-gray-600 mb-12 leading-relaxed">
          {{ t('home.introduction') }}
        </p>
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            @click="goToAssistant(1)">
            {{ t('home.startChat') }}
          </button>
          <button
            class="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            @click="goToAssistant(2)">
            {{ t('home.assistantMarket') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const { t } = useI18n()
    const router = useRouter()

    const goToAssistant = (i: number) => {
      if (i === 1) {
        // 使用命名路由导航到新聊天
        router.push({ name: 'NewChat' })
      } else if (i === 2) {
        router.push('/assistant-market')
      }
    }
    return {
      t,
      goToAssistant
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