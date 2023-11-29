// Add JavaScript to toggle the visibility of the dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('mouseenter', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  });
});
