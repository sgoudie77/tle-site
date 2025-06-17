// Responsive nav menu
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Nav bg change on scroll
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('.header');
    header.classList.toggle('down', window.scrollY > 0);
});

// Animate on scroll

// Splash Banners for Course Categories
// A - Set Splash Variables
const splash = document.querySelector(".splash-hero");

// B - Set Splash Image Variables
let all = document.querySelector('#all');
let conversation = document.querySelector('#conversation');
let business = document.querySelector('#business');
let ielts = document.querySelector('#ielts');

// Add Event Listeners for Splash Image Changes
all.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-all.png)";
})
conversation.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-ge.png)";
})
business.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-business.png)";
})
ielts.addEventListener('click', () => {
    splash.style.backgroundImage = "url(img/splash-ielts.png)";
})

// Course filter display
// A - Set Course Filter Variables
const filterContainer = document.querySelector(".course-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const courseItems = document.querySelectorAll(".course-item");
const totalCourseItems = courseItems.length;

// B - Filter and Display Items for the Selected Course Category
for(let i = 0; i < totalFilterBtns; i++){
  filterBtns[i].addEventListener("click", function(){
      filterContainer.querySelector(".active").classList.remove("active");
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      for(let k = 0; k < totalCourseItems; k++){
          if(filterValue === courseItems[k].getAttribute("data-category")){
              courseItems[k].classList.remove("hide");
              courseItems[k].classList.add("show");
          }
          else {
              courseItems[k].classList.remove("show");
              courseItems[k].classList.add("hide");
          }
          if (filterValue === "all") {
              courseItems[k].classList.remove("hide");
              courseItems[k].classList.add("show");
          }
      }
  })
}

// Modal popup up for course banners
// A - set the variables
const openModalCard = document.querySelectorAll('[data-modal-target]');
const closeModalCard = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay-course');

const course = document.querySelectorAll('.course-item');

// B - loop to select the clicked card
openModalCard.forEach(course => {
    course.addEventListener('click', () => {
        const modal = document.querySelector(course.dataset.modalTarget);
        // button.style.opacity = 0.3;
        openModal(modal);
        console.log(modal);
        document.querySelector('.course-wrapper').style.overflow = "hidden";
    })
})

// C - open the clicked card
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
        document.querySelector('.course-wrapper').style.overflow = "visible";
    })
})

// D - close the open card
closeModalCard.forEach(course => {
    course.addEventListener('click', () => {
        const modal = course.closest('.modal');
        closeModal(modal);
    })
})

// E - handle modal opening
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

// F - handle modal closing
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}