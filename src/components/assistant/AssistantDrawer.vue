<template>
    <Transition name="fade">
        <div v-if="show" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">
            <div class="absolute inset-0 overflow-hidden">
                <Transition name="fade" appear>
                    <div class="absolute inset-0 bg-gray-500 bg-opacity-75" @click="$emit('close')"></div>
                </Transition>

                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition name="slide" appear>
                        <div class="pointer-events-auto relative w-96 bg-white shadow-xl flex flex-col max-h-screen">
                            <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2">
                                <button @click="$emit('close')"
                                    class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span class="sr-only">Close panel</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Main content container -->
                            <div class="flex-1 overflow-y-auto">
                                <div class="p-8">
                                    <!-- Header section with image -->
                                    <div class="relative mb-16">
                                        <div
                                            class="h-40 w-full rounded-lg bg-gradient-to-r from-amber-400 to-orange-500">
                                            <div class="absolute inset-0 bg-white/10 backdrop-blur-sm">
                                                <div class="w-full h-full"
                                                    style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0);background-size: 24px 24px;">
                                                </div>
                                            </div>
                                        </div>
                                        <img :src="assistant.avatar" :alt="assistant.name"
                                            class="w-24 h-24 rounded-full absolute -bottom-12 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg" />
                                    </div>

                                    <!-- Assistant info -->
                                    <div class="space-y-6">
                                        <div class="text-center">
                                            <h2 class="text-2xl font-bold text-gray-900">{{ assistant.name }}</h2>
                                            <span
                                                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 mt-2">
                                                {{ t(`assistant.market.categories.${assistant.category}`) }}
                                            </span>
                                        </div>
                                        <p class="text-gray-600">{{ assistant.description }}</p>
                                        <div class="border-t border-gray-100 pt-6">
                                            <h3 class="text-lg font-medium text-gray-900 mb-4">{{
                                                t('assistant.capabilities') }}</h3>
                                            <ul class="space-y-3">
                                                <li v-for="capability in assistant.capabilities" :key="capability"
                                                    class="flex items-start">
                                                    <svg class="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="none"
                                                        stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span class="text-gray-600">{{ capability }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Fixed bottom button -->
                            <div class="p-6 border-t border-gray-100 bg-white">
                                <button @click="$emit('start-chat', assistant)"
                                    class="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg px-4 py-3 hover:from-amber-600 hover:to-orange-700 transform transition-all duration-200">
                                    {{ t('home.startChat') }}
                                </button>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { Assistant } from '@/types/assistant';

const { t } = useI18n();

defineProps<{
    show: boolean;
    assistant: Assistant;
}>();

defineEmits<{
    (e: 'close'): void;
    (e: 'start-chat', assistant: Assistant): void;
}>();
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
    display: none;
}

.overflow-y-auto {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
