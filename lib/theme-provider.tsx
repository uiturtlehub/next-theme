'use client'; // Client component

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"      // uses <html class="dark"> for Tailwind
      defaultTheme="system"  // default to system theme
      enableSystem           // allow system preference
    >
      {children}
    </NextThemesProvider>
  );
}