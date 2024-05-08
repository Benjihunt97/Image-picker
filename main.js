// Get all the smaller images
const smallerImages = document.querySelectorAll('.images');

// Get the bigger image
const bigImage = document.querySelector('.current-img');

// Loop through each smaller image and add a click event listener
smallerImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Get the source of the clicked smaller image
    image.classList.add('opacity-0');
    bigImage.classList.add('opacity-0');
    const clickedSrc = image.getAttribute('src');
    
    // Get the source of the current big image
    const currentBigSrc = bigImage.getAttribute('src');
    
    // Swap the sources of the big and clicked images after a short delay
    setTimeout(() => {
      bigImage.setAttribute('src', clickedSrc);
      image.setAttribute('src', currentBigSrc);
      image.classList.remove('opacity-0');
      bigImage.classList.remove('opacity-0')
    }, 400); // Adjust the delay time as needed
  });
});
