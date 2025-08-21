// Mobile-specific utilities and touch gesture handlers

// Touch gesture detection
export const useTouchGestures = () => {
    const handleSwipe = (element, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown) => {
      let startX = 0;
      let startY = 0;
      let endX = 0;
      let endY = 0;
  
      const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };
  
      const handleTouchEnd = (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipeDirection();
      };
  
      const handleSwipeDirection = () => {
        const diffX = startX - endX;
        const diffY = startY - endY;
        const minSwipeDistance = 50;
  
        if (Math.abs(diffX) > Math.abs(diffY)) {
          // Horizontal swipe
          if (diffX > minSwipeDistance && onSwipeLeft) {
            onSwipeLeft();
          } else if (diffX < -minSwipeDistance && onSwipeRight) {
            onSwipeRight();
          }
        } else {
          // Vertical swipe
          if (diffY > minSwipeDistance && onSwipeUp) {
            onSwipeUp();
          } else if (diffY < -minSwipeDistance && onSwipeDown) {
            onSwipeDown();
          }
        }
      };
  
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
  
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    };
  
    return { handleSwipe };
  };
  
  // Mobile-specific breakpoints
  export const MOBILE_BREAKPOINTS = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };
  
  // Check if device is mobile
  export const isMobile = () => {
    return window.innerWidth <= MOBILE_BREAKPOINTS.md;
  };
  
  // Check if device supports touch
  export const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };
  
  // Mobile-specific scroll behavior
  export const smoothScrollTo = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };
  
  // Mobile-optimized image loading
  export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };
  
  // Mobile-specific animation delays
  export const getMobileAnimationDelay = (index, baseDelay = 0.1) => {
    return isMobile() ? baseDelay * (index + 1) * 0.5 : baseDelay * (index + 1);
  };
  
  // Touch-friendly button sizing
  export const getTouchTargetSize = () => {
    return isMobile() ? 44 : 32; // 44px minimum for mobile touch targets
  };
  
  // Mobile-specific spacing
  export const getMobileSpacing = (desktopSpacing, mobileMultiplier = 0.75) => {
    return isMobile() ? `${parseInt(desktopSpacing) * mobileMultiplier}px` : desktopSpacing;
  };
  
  // Debounce function for mobile performance
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // Throttle function for mobile performance
  export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };