<template>
    <div class="w-64 bg-white rounded-lg shadow p-4">
        <h2 class="text-lg font-semibold mb-4">{{ t('assistant.market.category') }}</h2>
        <div class="space-y-2">
            <button v-for="category in categories" :key="category"
                class="w-full text-left px-3 py-2 rounded-md transition"
                :class="selected === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'"
                @click="$emit('update:selected', category)">
                {{ t(`assistant.market.categories.${category}`) }}
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { CategoryType } from '@/types/assistant';

const { t } = useI18n();

defineProps<{
    selected: CategoryType | '';
    categories: CategoryType[];
}>();

defineEmits<{
    (e: 'update:selected', value: CategoryType | ''): void;
}>();
</script>
