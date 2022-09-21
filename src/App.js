import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from 'react';

import { UserProvider } from './context/userContext.js';
import { useApp } from './context/userContext.js';
import { Router, AuthRoute } from './pages/routes.js';
import { NavBar } from './pages/NavBar.js';

function App() {
  // get the logged in status from the user context
  const { loggedIn } = useApp();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        {loggedIn ? <AuthRoute /> : <Router />}
      </QueryClientProvider>
    </div>
  );
}

export default App;
