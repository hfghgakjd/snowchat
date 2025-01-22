<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 bg-white border-b z-40">
      <div class="flex items-center justify-between px-4 h-16">
        <div class="flex items-center space-x-4">
          <span class="text-xl font-bold text-primary">{{ t('name') }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <select 
            v-model="locale" 
            class="px-3 py-1 border rounded-lg text-sm bg-white"
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">{{ t('header.admin') }}</span>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" 
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Sidebar and Content -->
    <div class="flex pt-16">
      <!-- Sidebar -->
      <aside class="fixed w-64 h-[calc(100vh-4rem)] border-r bg-white">
        <nav class="p-4 space-y-2">
          <router-link to="/" class="menu-item">
            <i class="fas fa-home mr-2"></i>{{ t('menu.home') }}
          </router-link>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 ml-64 p-6">
        <div class="max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>