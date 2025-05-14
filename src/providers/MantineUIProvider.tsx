// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

interface MantineUIProviderProps {
    children: React.ReactNode;
}

export default function MantineUIProvider({ 
    children,
 }: MantineUIProviderProps) {
    return <MantineProvider>{ children }</MantineProvider>;
}