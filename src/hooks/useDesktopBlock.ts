import { useMemo } from 'react';

export const useDesktopBlock = () => {
  const isDesktop = useMemo(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
    const isTablet = /ipad|tablet/i.test(userAgent);
    
    // Check screen width as fallback
    const isSmallScreen = window.innerWidth <= 1024;
    
    return !isMobile && !isTablet && !isSmallScreen;
  }, []);

  const hasDevBypass = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('dev') === 'true';
  }, []);

  const shouldBlock = isDesktop && !hasDevBypass;

  return { isDesktop, hasDevBypass, shouldBlock };
};
