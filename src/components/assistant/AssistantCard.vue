<template>
    <div 
        class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
        @click="$emit('select', assistant)"
    >
        <div class="relative overflow-hidden rounded-t-xl">
            <div class="h-32 bg-gradient-to-r from-amber-400 to-orange-500">
                <div class="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0);background-size: 24px 24px;"></div>
                </div>
            </div>
            <img 
                :src="assistant.avatar" 
                :alt="assistant.name"
                class="w-20 h-20 rounded-full absolute left-4 -bottom-10 border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300" 
            />
        </div>

        <div class="p-6 pt-12">
            <AssistantCardContent :assistant="assistant" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { Assistant } from '@/types/assistant';
import AssistantCardContent from './AssistantCardContent.vue';

defineProps<{
    assistant: Assistant;
}>();

defineEmits<{
    (e: 'select', assistant: Assistant): void;
}>();
</script>
