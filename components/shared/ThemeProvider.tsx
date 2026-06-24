import React, { createContext, ReactNode } from 'react';
import { Theme } from '../../types/payload';

export const ThemeContext = createContext<Theme>({
  primary: '#000000',
  background: '#FFFFFF',
});

interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeProvider = ({
  children,
  theme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};