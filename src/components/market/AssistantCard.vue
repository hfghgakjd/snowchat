<template>
    <div class="bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
        @click="$emit('select', assistant)">
        <div class="p-4">
            <div class="flex items-center mb-4">
                <img :src="assistant.avatar" :alt="assistant.name" class="w-12 h-12 rounded-full">
                <div class="ml-3">
                    <h3 class="font-semibold text-lg">{{ assistant.name }}</h3>
                    <span class="text-sm text-gray-500">{{ t(`assistant.market.categories.${assistant.category}`)
                        }}</span>
                </div>
            </div>
            <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ assistant.description }}</p>
            <div class="flex items-center text-sm text-gray-500 space-x-4">
                <span>{{ assistant.responseTime }}</span>
                <span>{{ assistant.languages }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { Assistant } from '@/types/assistant';

const { t } = useI18n();

defineProps<{
    assistant: Assistant;
}>();

defineEmits<{
    (e: 'select', assistant: Assistant): void;
}>();
</script>
