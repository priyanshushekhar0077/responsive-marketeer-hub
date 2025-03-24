
// Initialize Lucide icons when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  // Set current year in the footer
  const currentYearElements = document.querySelectorAll('#currentYear');
  if (currentYearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    currentYearElements.forEach(element => {
      element.textContent = currentYear;
    });
  }
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  if (mobileMenuButton && mobileNav) {
    mobileMenuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Scroll animations for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  
  if (serviceCards.length > 0) {
    const observeElements = (elements) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const delay = parseFloat(element.dataset.index || 0) * 0.1;
            element.style.animationDelay = `${delay}s`;
            element.classList.add('animated');
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    observeElements(serviceCards);
  }
  
  // Timeline animations
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (timelineItems.length > 0) {
    const observeTimeline = (elements) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.style.animationDelay = `${index * 0.2}s`;
            element.style.opacity = '1';
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    observeTimeline(timelineItems);
  }
  
  // Header scroll effect
  const header = document.querySelector('.navigation');
  
  if (header) {
    const scrollHeader = () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', scrollHeader);
    scrollHeader(); // Call on initial load
  }
  
  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Disable the submit button and show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      // Simulate form submission (would be an actual API call in production)
      setTimeout(() => {
        // Show success message
        formStatus.innerHTML = `
          <div class="success-message">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        `;
        
        // Reset the form
        contactForm.reset();
        
        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Clear the success message after 5 seconds
        setTimeout(() => {
          formStatus.innerHTML = '';
        }, 5000);
      }, 1500);
    });
  }
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.navigation').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileNav && mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  });
});
