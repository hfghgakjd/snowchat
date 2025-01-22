<template>
    <div class="overflow-hidden bg-gray-50">
        AssistantMarket
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'AssistantMarket',
    setup() {
        const { t } = useI18n()
        return {
            t
        }
    }
})
</script>