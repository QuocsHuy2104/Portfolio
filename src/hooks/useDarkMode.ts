import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    });

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};
