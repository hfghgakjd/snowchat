<template>
    <div>
        <MarketHeader :title="t('assistant.market.title')" />
        <div class="px-4 sm:px-6 lg:px-8 py-6">
            <div class="flex gap-6">
                <CategorySidebar v-model:selected="selectedCategory" :categories="CATEGORY_KEYS" />
                <div class="flex-1">
                    <SearchBar v-model="searchQuery" />
                    <div class="mt-4 h-[calc(100vh-17.75rem)] overflow-y-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
                            <AssistantCard v-for="assistant in filteredAssistants" :key="assistant.id"
                                :assistant="assistant" @select="selectAssistant" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AssistantDrawer :show="!!selectedAssistant" :assistant="selectedAssistant!" @close="selectedAssistantId = null"
            @start-chat="startChat" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { CATEGORY_KEYS } from '@/types/assistant';
import type { Assistant, CategoryType } from '@/types/assistant';
import { useAssistants } from '@/composables/useAssistants';
import MarketHeader from '@/components/market/MarketHeader.vue';
import CategorySidebar from '@/components/market/CategorySidebar.vue';
import SearchBar from '@/components/market/SearchBar.vue';
import AssistantCard from '@/components/market/AssistantCard.vue';
import AssistantDrawer from '@/components/assistant/AssistantDrawer.vue';

const { t } = useI18n();
const router = useRouter();

// State
const searchQuery = ref('');
const selectedCategory = ref<CategoryType | ''>('');
const currentPage = ref(1);
const selectedAssistantId = ref<string | null>(null);

// Composables
const { assistants, filteredAssistants } = useAssistants({
    searchQuery,
    selectedCategory,
    currentPage,
});

// Computed
const selectedAssistant = computed<Assistant | null>(() =>
    assistants.value.find(a => a.id === selectedAssistantId.value) || null
);

const totalPages = computed(() =>
    Math.ceil(assistants.value.length / 9)
);

// Methods
const selectAssistant = (assistant: Assistant) => {
    selectedAssistantId.value = assistant.id;
};

const startChat = (assistant: Assistant) => {
    router.push({
        name: 'Chat',
        params: { assistantId: assistant.id }
    });
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.2s ease-in;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.overflow-y-auto::-webkit-scrollbar {
    width: 0px;
}
</style>