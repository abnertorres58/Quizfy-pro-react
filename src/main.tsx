import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MantineUIProvider from './providers/MantineUIProvider';
import MainLayout from './layout/MainLayout';
import WelcomePage from './pages/WelcomePage';
import "./styles/global.css"

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <MantineUIProvider>
    <MainLayout>
      <WelcomePage/>
    </MainLayout>
  </MantineUIProvider>
</StrictMode>
);
