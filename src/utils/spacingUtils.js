// Consistent spacing utilities for the portfolio
export const spacingClasses = {
  // Section spacing - for main sections
  section: {
    padding: 'py-section px-container sm:px-container-lg lg:px-container-xl',
    margin: 'my-section',
    container: 'max-w-content mx-auto',
  },
  
  // Content spacing - for content within sections
  content: {
    padding: 'p-content',
    margin: 'mb-content',
    container: 'max-w-content-lg mx-auto',
  },
  
  // Card spacing - for cards and components
  card: {
    padding: 'p-4 sm:p-6 lg:p-8',
    margin: 'mb-6',
    gap: 'gap-4 sm:gap-6 lg:gap-8',
  },
  
  // Header spacing - for navigation and headers
  header: {
    padding: 'px-container sm:px-container-lg lg:px-container-xl',
    height: 'h-16 sm:h-20',
  },
  
  // Responsive spacing helpers
  responsive: {
    section: 'py-8 sm:py-section lg:py-section-lg',
    content: 'px-4 sm:px-6 lg:px-8',
    gap: 'gap-4 sm:gap-6 lg:gap-8',
  }
};

// Helper function to get consistent spacing classes
export const getSpacingClasses = (type, variant = 'default') => {
  const baseClasses = spacingClasses[type] || spacingClasses.content;
  
  switch (variant) {
    case 'compact':
      return {
        ...baseClasses,
        padding: baseClasses.padding.replace('py-section', 'py-8').replace('px-container', 'px-4'),
        margin: baseClasses.margin.replace('mb-content', 'mb-6'),
      };
    case 'spacious':
      return {
        ...baseClasses,
        padding: baseClasses.padding.replace('py-section', 'py-section-lg').replace('px-container', 'px-container-lg'),
        margin: baseClasses.margin.replace('mb-content', 'mb-content-lg'),
      };
    default:
      return baseClasses;
  }
};

// Standard section wrapper component classes
export const sectionWrapperClasses = 'py-section px-container sm:px-container-lg lg:px-container-xl max-w-content mx-auto';
export const contentWrapperClasses = 'py-content px-4 sm:px-6 lg:px-8 max-w-content-lg mx-auto';
export const cardWrapperClasses = 'p-4 sm:p-6 lg:p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-violet-700/30';

// Responsive text spacing
export const textSpacing = {
  heading: 'mb-4 sm:mb-6 lg:mb-8',
  paragraph: 'mb-4 sm:mb-6',
  list: 'space-y-2 sm:space-y-3',
  button: 'px-6 py-3 sm:px-8 sm:py-4',
};

// Grid spacing
export const gridSpacing = {
  default: 'gap-4 sm:gap-6 lg:gap-8',
  compact: 'gap-3 sm:gap-4 lg:gap-6',
  spacious: 'gap-6 sm:gap-8 lg:gap-12',
};
