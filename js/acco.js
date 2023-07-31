function toggleAccordion(accordionHeader) {
    // Get the parent accordion-item of the clicked header
    const accordionItem = accordionHeader.parentElement;
  
    // Toggle the active class to open/close the accordion item
    accordionItem.classList.toggle("active");
  
    // Get the accordion icon span element
    const accordionIcon = accordionHeader.querySelector(".accordion-icon");
  
    // Toggle the plus (+) and minus (-) signs in the accordion icon
    if (accordionItem.classList.contains("active")) {
      accordionIcon.textContent = "-";
    } else {
      accordionIcon.textContent = "+";
    }
  }
  