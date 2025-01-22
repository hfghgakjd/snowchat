<template>
    <div class="overflow-hidden bg-gray-50">
        chat
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'Chat',
    setup() {
        const { t } = useI18n()
        return {
            t
        }
    }
})
</script>