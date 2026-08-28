import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { About, BlogDetail, Contact, Home, LocationDetail, MissingState, ProjectDetail, ServiceDetail, ServicesHub } from '@/pages';

const queryClient = new QueryClient();

function Router() {
  return <RoutedErrorBoundary><Switch>
    <Route path="/" component={Home} />
    <Route path="/marangoz/" component={ServicesHub} />
    <Route path="/marangoz" component={ServicesHub} />
    <Route path="/hizmetler/:slug/" component={ServiceDetail} />
    <Route path="/hizmetler/:slug" component={ServiceDetail} />
    <Route path="/hizmet-bolgeleri/:slug/" component={LocationDetail} />
    <Route path="/hizmet-bolgeleri/:slug" component={LocationDetail} />
    <Route path="/projeler/:slug/" component={ProjectDetail} />
    <Route path="/projeler/:slug" component={ProjectDetail} />
    <Route path="/blog/:slug/" component={BlogDetail} />
    <Route path="/blog/:slug" component={BlogDetail} />
    <Route path="/hakkimizda/" component={About} />
    <Route path="/hakkimizda" component={About} />
    <Route path="/iletisim/" component={Contact} />
    <Route path="/iletisim" component={Contact} />
    <Route component={() => <MissingState label="Sayfa bulunamadı" />} />
  </Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <div data-route={location}>{children}</div>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;