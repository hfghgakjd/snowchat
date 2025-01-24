import { ref, computed, Ref } from 'vue';
import type { Assistant, CategoryType } from '@/types/assistant';

interface UseAssistantsOptions {
    searchQuery: Ref<string>;
    selectedCategory: Ref<CategoryType | ''>;
    currentPage: Ref<number>;
}

export function useAssistants(options: UseAssistantsOptions) {
    const { searchQuery, selectedCategory, currentPage } = options;

    // 模拟数据 - 实际应用中应该从API获取
    const assistants = ref<Assistant[]>([

        {
            "id": "1",
            "name": "通用助手",
            "description": "多功能AI助手，适用于一般任务和日常对话",
            "avatar": "/avatars/general.png",
            "category": "general",
            "responseTime": "< 1s",
            "languages": "中文, EN",
            "capabilities": [
                "自然对话",
                "任务协助",
                "信息查找",
                "多语言支持"
            ]
        },
        {
            "id": "2",
            "name": "代码助手",
            "description": "专门帮助处理编程和开发任务",
            "avatar": "/avatars/code.png",
            "category": "code",
            "responseTime": "< 2s",
            "languages": "中文",
            "capabilities": [
                "代码补全",
                "错误修复",
                "代码审查",
                "文档"
            ]
        },
        {
            "id": "3",
            "name": "写作助手",
            "description": "内容创作和写作增强方面的专家",
            "avatar": "/avatars/writing.png",
            "category": "writing",
            "responseTime": "< 1s",
            "languages": "中文",
            "capabilities": [
                "内容写作",
                "语法检查",
                "风格改进",
                "翻译"
            ]
        }
    ]);

    // 过滤和分页逻辑
    const filteredAssistants = computed(() => {
        let filtered = assistants.value;

        // 搜索过滤
        if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase();
            filtered = filtered.filter(a =>
                a.name.toLowerCase().includes(query) ||
                a.description.toLowerCase().includes(query)
            );
        }

        // 分类过滤
        if (selectedCategory.value && selectedCategory.value !== 'all') {
            filtered = filtered.filter(a => a.category === selectedCategory.value);
        }

        return filtered;
    });

    // 未来可以添加其他方法，如：
    // const fetchAssistants = async () => { ... }
    // const createAssistant = async (data: CreateAssistantData) => { ... }
    // const updateAssistant = async (id: string, data: UpdateAssistantData) => { ... }
    // const deleteAssistant = async (id: string) => { ... }

    return {
        assistants,
        filteredAssistants,
        // 如果需要，可以返回更多方法
    };
}
