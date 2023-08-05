// Function to toggle the visibility of additional details under each section
function toggleDetails(event) {
  const section = event.target.closest('section');
  const details = section.querySelector('ul');

  details.classList.toggle('hidden');
}

// Add click event listeners to each section header
const sectionHeaders = document.querySelectorAll('section h2');
sectionHeaders.forEach(header => {
  header.addEventListener('click', toggleDetails);
});
