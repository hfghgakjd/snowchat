import { comma } from 'postcss/lib/list';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/chat',
    name: 'NewChat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/assistant-market',
    name: 'AssistantMarket',
    component: () => import('@/views/AssistantMarket.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});