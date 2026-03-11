import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to redirect to the new domain
    const currentHost = window.location.host;
    const currentProtocol = window.location.protocol;
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    
    if (currentHost === 'ds-outdoorliving.com') {
      // Redirect to dsoutdoorliving.com (without www)
      window.location.replace(`${currentProtocol}//dsoutdoorliving.com${currentPath}`);
    } else if (currentHost === 'www.ds-outdoorliving.com') {
      // Redirect to www.dsoutdoorliving.com (with www)
      window.location.replace(`${currentProtocol}//www.dsoutdoorliving.com${currentPath}`);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  return <Outlet />;
}

export default App;
