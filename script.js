// Get reference to the body element
const body = document.body

// Select all elements with the class "slide"
const slides = document.querySelectorAll('.slide')

// Get reference to the left and right buttons
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// Set the initial active slide index to 0
let activeSlide = 0

// Event listener for the right button click
rightBtn.addEventListener('click', () => {
  // Increment the active slide index
  activeSlide++

  // Check if the active slide index is greater than the last slide index
  if (activeSlide > slides.length - 1) {
    // Reset the active slide index to 0 to loop back to the first slide
    activeSlide = 0
  }

  // Call the setBgToBody function to set the background image of the body
  setBgToBody()

  // Call the setActiveSlide function to update the active slide
  setActiveSlide()
})

// Event listener for the left button click
leftBtn.addEventListener('click', () => {
  // Decrement the active slide index
  activeSlide--

  // Check if the active slide index is less than 0
  if (activeSlide < 0) {
    // Set the active slide index to the last slide index to loop back to the last slide
    activeSlide = slides.length - 1
  }

  // Call the setBgToBody function to set the background image of the body
  setBgToBody()

  // Call the setActiveSlide function to update the active slide
  setActiveSlide()
})

// Set the background image of the body to the current active slide
setBgToBody()

// Function to set the background image of the body
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Function to set the active slide by adding the "active" class
function setActiveSlide() {
  // Remove the "active" class from all slides
  slides.forEach((slide) => slide.classList.remove('active'))

  // Add the "active" class to the current active slide
  slides[activeSlide].classList.add('active')
}
