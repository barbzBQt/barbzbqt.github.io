const observer = new MutationObserver(() => {
    const badge = document.querySelector('.calendly-badge-widget');
    if (badge) {
      badge.addEventListener('click', () => {
        gtag('event', 'book_session_click', {
          event_category: 'engagement',
          event_label: 'Calendly Badge',
          value: 1
        });
      });
      observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
const bookBtn = document.getElementById('bookSessionBtn');
if (bookBtn) {
  bookBtn.addEventListener('click', () => {
    gtag('event', 'book_session_click', {
      event_category: 'engagement',
      event_label: 'Book a Session Button',
      value: 1
    });
  });
}

document.querySelectorAll('[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    const serviceName = card.getAttribute('data-service');
    gtag('event', 'service_click', {
      event_category: 'services',
      event_label: serviceName,
      value: 1
    });
  });
});

document.querySelectorAll('[data-skill]').forEach(skill => {
  skill.addEventListener('click', () => {
    const skillName = skill.getAttribute('data-skill');
    gtag('event', 'skill_click', {
      event_category: 'technical_skills',
      event_label: skillName,
      value: 1
    });
  });
});

document.querySelectorAll('[data-tool]').forEach(tool => {
  tool.addEventListener('click', () => {
    const toolName = tool.getAttribute('data-tool');
    gtag('event', 'tool_click', {
      event_category: 'tools_platforms',
      event_label: toolName,
      value: 1
    });
  });
});