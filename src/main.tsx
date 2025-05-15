import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MantineUIProvider from './providers/MantineUIProvider';
import MainLayout from './layout/MainLayout';
import "./styles/global.css"
import QuizStartPage from './pages/QuizStartPage';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <MantineUIProvider>
    <MainLayout>
      <QuizStartPage/>
    </MainLayout>
  </MantineUIProvider>
</StrictMode>
);
