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
      <aside class="fixed w-64 h-[calc(100vh-4rem)] border-r bg-white overflow-y-auto">
        <nav class="p-4">
          <router-link 
            v-for="(item, index) in menuItems" 
            :key="index"
            :to="item.path" 
            class="flex items-center px-4 py-3 mb-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            :class="{ 'bg-blue-50 text-blue-600 font-medium': isActiveRoute(item.path) }"
          >
            <i :class="item.icon" class="w-5 text-center mr-3"></i>
            {{ t(item.label) }}
          </router-link>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 ml-64 p-6 h-[calc(100vh-5.5rem)] overflow-hidden">
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
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const route = useRoute();

const menuItems = [
  { path: '/', label: 'menu.home', icon: 'fas fa-home' },
  { path: '/assistant-market', label: 'menu.assistant', icon: 'fas fa-robot' },
  { path: '/chat', label: 'menu.chat', icon: 'fas fa-comments' },
];

const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === path;
  }
  return route.path.startsWith(path);
};
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

/* 添加滚动条样式 */
aside::-webkit-scrollbar {
  width: 4px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}

aside::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 2px;
}

aside::-webkit-scrollbar-thumb:hover {
  background-color: #d1d5db;
}
</style>