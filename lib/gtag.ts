// Google Analytics Helper Functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'WhatsApp Button',
  });
};

// Track phone clicks
export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Button',
  });
};

// Track service card clicks
export const trackServiceClick = (serviceName: string) => {
  event({
    action: 'click',
    category: 'Services',
    label: serviceName,
  });
};

// Track portfolio clicks
export const trackPortfolioClick = (projectName: string) => {
  event({
    action: 'click',
    category: 'Portfolio',
    label: projectName,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
