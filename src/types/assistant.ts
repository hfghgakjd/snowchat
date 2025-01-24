export interface Assistant {
    id: string;
    name: string;
    description: string;
    avatar: string;
    category: CategoryType;
    responseTime: string;
    languages: string;
    capabilities: string[];
}

export type CategoryType = 
    | 'all'
    | 'general'
    | 'code'
    | 'writing'
    | 'creative'
    | 'business'
    | 'academic'
    | 'translation';

export const CATEGORY_KEYS: CategoryType[] = [
    'all',
    'general',
    'code',
    'writing',
    'creative',
    'business',
    'academic',
    'translation'
];
