import './app.css';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { Vite } from '@/features/vite-demo/vite';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Vite />
    </ThemeProvider>
  );
}

export default App;
