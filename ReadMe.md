# Aafiya Mediretreats

This is a simple HTML5 webpage. The webpage consists of a header, a hero section, a table of contents, main content sections with a right image, and a footer.

## Usage


1. Open the `index.html` file in your preferred web browser to view the webpage.

## Page Structure

- The webpage consists of a header with a logo and contact information.
- It has a navigation bar with links to different sections of the page.
- The hero section contains a background image and displays some content with a button.
- The table of contents provides links to various sections on the page.
- The main content sections are structured as a left div and right image layout.
- The footer contains important links, hospital information, and social media links.

## CSS Styling

The CSS styles for different sections of the page are split into separate CSS files. The files are linked in the following order:

- `index.css`: Basic styling for the entire page.
- `uphead.css`: Styling for the header section.
- `header.css`: Styling for the navigation bar and search container.
- `hero.css`: Styling for the hero section.
- `footer.css`: Styling for the footer section.


2. Open the `Slider.html` file in your preferred web browser to view the webpage.

## Page Sections

### Testimonials of Patients

The first section, with the `id="team2"`, displays testimonials of patients who underwent medical procedures. Each testimonial includes a video, title, and information about the patient.

### Top Orthopaedic Doctors

The second section, with the `id="team1"`, showcases top orthopaedic doctors. Each doctor's information includes an image, name, location, and qualification.

### Recommended Hospitals

The third section, with the `id="team"`, presents recommended hospitals. Each hospital's information includes an image and location.

## Dependencies

The webpage uses the following dependencies, which are linked within the HTML file:

- [Bootstrap](https://getbootstrap.com/): CSS framework for responsive design.
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/): jQuery plugin for creating responsive sliders.

## Carousel Configuration

The team sliders are created using Owl Carousel 2 with the following configuration:

- `loop: true`: Enables infinite looping of carousel items.
- `nav: false`: Disables the navigation arrows.
- `dots: true`: Enables pagination dots.
- `autoplay: false`: Disables autoplay.
- `autoplayTimeout: 5000`: Sets autoplay timeout to 5 seconds.
- `margin: 10`: Sets the margin between carousel items.
- `responsive`: Configures the number of items to display at different breakpoints.

## Custom Styling

Custom styling for the sliders can be found in the `css/Slider.css` file.

## JavaScript Functionality

The webpage includes a JavaScript function `search()` that is triggered when the search button is clicked. It shows an alert with the search term entered in the search input.

## Dependencies

No external JavaScript or CSS libraries are used. All the styles and functionality are implemented using pure HTML, CSS, and JavaScript.





