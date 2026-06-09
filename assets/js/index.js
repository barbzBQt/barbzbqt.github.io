// Scroll Reveal Logic
const revealOptions = { threshold: 0.01, rootMargin: '0px 0px 0px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    if ('IntersectionObserver' in window) {
        elements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        elements.forEach(el => el.classList.add('active'));
    }
});

// Existing MutationObserver for Calendly...
const observer = new MutationObserver(() => {
    const badge = document.querySelector('.calendly-badge-widget');
    if (badge) {
      badge.addEventListener('click', () => {
        if (typeof gtag === 'function') {
          gtag('event', 'book_session_click', {
            event_category: 'engagement',
            event_label: 'Calendly Badge',
            value: 1
          });
        }
      });
      observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
const bookBtn = document.getElementById('bookSessionBtn');
if (bookBtn) {
  bookBtn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'book_session_click', {
        event_category: 'engagement',
        event_label: 'Book a Session Button',
        value: 1
      });
    }
  });
}

document.querySelectorAll('[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    const serviceName = card.getAttribute('data-service');
    if (typeof gtag === 'function') {
      gtag('event', 'service_click', {
        event_category: 'services',
        event_label: serviceName,
        value: 1
      });
    }
  });
});

document.querySelectorAll('[data-skill]').forEach(skill => {
  skill.addEventListener('click', () => {
    const skillName = skill.getAttribute('data-skill');
    if (typeof gtag === 'function') {
      gtag('event', 'skill_click', {
        event_category: 'technical_skills',
        event_label: skillName,
        value: 1
      });
    }
  });
});

document.querySelectorAll('[data-tool]').forEach(tool => {
  tool.addEventListener('click', () => {
    const toolName = tool.getAttribute('data-tool');
    if (typeof gtag === 'function') {
      gtag('event', 'tool_click', {
        event_category: 'tools_platforms',
        event_label: toolName,
        value: 1
      });
    }
  });
});