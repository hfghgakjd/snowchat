// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export interface Locale {
    [key: string]: string;
}

// Add other types and interfaces as needed