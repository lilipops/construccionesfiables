const searchButton = document.querySelector('.search-icon');
const searchWrapper = document.querySelector('.search-wrapper');

searchButton.addEventListener('click', () => {
  searchButton.classList.toggle('hide');
  searchWrapper.classList.toggle('active');
});

// Hide the search bar when the window is resized to be larger than 600px
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    searchButton.classList.remove('hide');
    searchWrapper.classList.remove('active');
  }
});
