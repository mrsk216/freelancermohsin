import { useSyncExternalStore } from 'react';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'theme-mode';
const listeners = new Set<() => void>();
let currentTheme: ThemeMode | null = null;
type DocumentWithViewTransition = Document & {
    startViewTransition?: (updateCallback: () => void) => { finished: Promise<void> };
};

const applyTheme = (mode: ThemeMode) => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.style.colorScheme = mode;
};

export const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light';

    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

const getTheme = (): ThemeMode => {
    if (currentTheme) return currentTheme;
    currentTheme = getInitialTheme();
    return currentTheme;
};

const notify = () => {
    listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

const setTheme = (theme: ThemeMode) => {
    currentTheme = theme;

    if (typeof window !== 'undefined') {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const docWithViewTransition = document as DocumentWithViewTransition;
        const supportsViewTransition = typeof docWithViewTransition.startViewTransition === 'function';

        if (supportsViewTransition && !prefersReducedMotion) {
            docWithViewTransition.startViewTransition?.(() => {
                applyTheme(theme);
                localStorage.setItem(STORAGE_KEY, theme);
            });
        } else {
            applyTheme(theme);
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }

    notify();
};

export function useTheme() {
    const theme = useSyncExternalStore(subscribe, getTheme, () => 'light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return { theme, toggleTheme };
}
