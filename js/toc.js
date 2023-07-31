// Generate Table of Contents
window.addEventListener('DOMContentLoaded', function () {
  const tocList = document.getElementById('toc-list');
  const sections = document.querySelectorAll('.container');

  sections.forEach((section, index) => {
      const h1Tag = section.querySelector('h1');
      const listItem = document.createElement('li');
      const anchorTag = document.createElement('a');

      anchorTag.textContent = h1Tag.textContent;
      anchorTag.href = `#section-${index + 1}`;
      anchorTag.addEventListener('click', () => {
          setActiveLink(index + 1);
      });

      listItem.appendChild(anchorTag);
      tocList.appendChild(listItem);
  });

  // Set initial active link
  setActiveLink(1);
});

// Function to set the active link in Table of Contents
function setActiveLink(activeIndex) {
  const tocLinks = document.querySelectorAll('.table-of-contents a');

  tocLinks.forEach((link, index) => {
      if (index + 1 === activeIndex) {
          link.classList.add('active-link');
      } else {
          link.classList.remove('active-link');
      }
  });
}

// Get all TOC links
const tocLinks = document.querySelectorAll('.table-of-contents a');

// Get all section headings
const sectionHeadings = document.querySelectorAll('.content h1');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to update the active link
function updateActiveLink() {
  for (let i = 0; i < sectionHeadings.length; i++) {
      if (isInViewport(sectionHeadings[i])) {
          tocLinks.forEach(link => link.classList.remove('active-link'));
          tocLinks[i].classList.add('active-link');
          break;
      }
  }
}

// Add click event listener to each link
tocLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      // Remove the 'active-link' class from all links
      tocLinks.forEach(link => link.classList.remove('active-link'));
      // Add the 'active-link' class to the clicked link
      event.target.classList.add('active-link');
      // Scroll to the corresponding section
      const targetSectionId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetSectionId);
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Add scroll event listener to update the active link while scrolling
window.addEventListener('scroll', function () {
  updateActiveLink();
  const tocElement = document.getElementById('toc');
  const section8 = document.getElementById('section-8');
  const section8Rect = section8.getBoundingClientRect();

  if (section8Rect.top <= 0) {
      tocElement.classList.add('sticky');
  } else {
      tocElement.classList.remove('sticky');
  }
});

// Initial call to set the active link on page load
updateActiveLink();
