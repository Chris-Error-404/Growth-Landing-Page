//MOBILE NAV SCRIPT
/* ============================= */
/* CLOSE MENU WHEN CLICK OUTSIDE */
/* AND PREVENT BODY SCROLL IF DESIRED */
/* ============================= */
document.addEventListener('click', function(event) {
  const navToggle = document.querySelector('.mobile-header__toggle');
  const header    = document.querySelector('.mobile-header');

  // Close when clicking outside header
  if (navToggle.checked && !header.contains(event.target)) {
    navToggle.checked = false;
  }
});

// Optional: disable body scroll when menu open
document.querySelector('.mobile-header__toggle')
  .addEventListener('change', function() {
    document.body.style.overflow = this.checked ? 'hidden' : '';
  });




// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });