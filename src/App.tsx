import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Loader from '@/components/Loader';
import { AppSidebar } from "@/components/app-sidebar"
import { ContentLayout } from '@/components/admin-panel/content-layout';
import ComponentShowcase from '@/components/ComponentShowcase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BankCardOrganism from '@/components/BankCardOrganism';
import { SidebarProvider } from "@/components/ui/sidebar";

const components = [
  'accordion', 'alert-dialog', 'alert', 'aspect-ratio', 'avatar',
  'badge', 'button', 'calendar', 'card', 'checkbox', 'collapsible',
  'combobox', 'command', 'context-menu', 'dialog', 'dropdown-menu',
  'hover-card', 'input', 'label', 'menubar', 'navigation-menu',
  'popover', 'progress', 'radio-group', 'scroll-area', 'select',
  'separator', 'sheet', 'slider', 'switch', 'table', 'tabs',
  'textarea', 'toast', 'toggle', 'tooltip'
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {isLoading ? (
        <Loader />
      ) : (
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<ContentLayout title="Dashboard">Dashboard Content</ContentLayout>} />
                <Route path="/cards" element={
                  <ContentLayout 
                    title="Cards" 
                    breadcrumbs={[
                      { label: 'Playground', href: '/' },
                      { label: 'Cards', href: '/cards' }
                    ]}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Bank Card</CardTitle>
                        <CardDescription>Showcase of the Bank Card component</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BankCardOrganism />
                      </CardContent>
                    </Card>
                  </ContentLayout>
                } />
                <Route path="/users" element={<ContentLayout title="Users">Users Content</ContentLayout>} />
                <Route path="/account" element={<ContentLayout title="Account">Account Content</ContentLayout>} />
                {components.map((component) => (
                  <Route 
                    key={component} 
                    path={`/components/${component}`} 
                    element={
                      <ContentLayout 
                        title={component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, ' ')}
                        breadcrumbs={[
                          { label: 'Components', href: '/components' },
                          { label: component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, ' '), href: `/components/${component}` }
                        ]}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle>{component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, ' ')}</CardTitle>
                            <CardDescription>Showcase of the {component.replace(/-/g, ' ')} component</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ComponentShowcase component={component} />
                          </CardContent>
                        </Card>
                      </ContentLayout>
                    } 
                  />
                ))}
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      )}
      <Toaster />
    </ThemeProvider>
  );
}

export default App;