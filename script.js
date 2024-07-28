


const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const sidebarMenuIcon = document.querySelector(".sidebar .menu-icon");
menuIcon.addEventListener("click", () => {
  sideBar.classList.toggle("open");
});
sidebarMenuIcon.addEventListener("click", () => {
  sideBar.classList.remove("open");
});

const listItems = document.querySelectorAll('.portfolio-links li')
console.log(listItems);

listItems.forEach(item => {
   item.addEventListener('click', function() {
    listItems.forEach(li => li.classList.remove('active'))
    this.classList.add('active')
   })
})

const overlay = document.querySelector('.overlay')
overlay.addEventListener('click',()=>{
    sideBar.classList.remove("open");
})


const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
console.log(filterBtns);
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-filter-item");
const totalPortfolioItem = portfolioItems.length;

console.log(totalPortfolioItem);

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        console.log(filterValue);

        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === 'all' || filterValue === portfolioItems[k].getAttribute('data-category')) {
                portfolioItems[k].classList.remove('hide');
                portfolioItems[k].classList.add('show');
            } else {
                portfolioItems[k].classList.add('hide');
                portfolioItems[k].classList.remove('show');
            }
        }
    });
}

 const text = document.querySelector('#text');

const texts = [ 'Graphic Designer', 'Freelancer', 'Learner']
let index = 0;

function textLoad()  {
    text.textContent = texts[index]
    index = (index + 1) % texts.length
}

textLoad()
setInterval(textLoad, 4000)
 

/* const openIcon = document.querySelector('.open-icon')
const closeIcon = document.querySelector('.close-icon')
const wrapper = document.querySelector('.form-container')
console.log(openIcon,closeIcon);

openIcon.addEventListener('click',()=>{
    wrapper.classList.add('show')
})
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('show')
}) */

const formContainer = document.querySelector('.form-container');
const closeButton = document.querySelector('.close-icon');
const openButton = document.querySelector('.open-icon');

openButton.addEventListener('click', () => {
    formContainer.classList.add('show'); // Show the form container
});

closeButton.addEventListener('click', () => {
    const wrapper = formContainer.querySelector('.wrapper');
    wrapper.style.animation = 'slideDownAndHide 0.6s ease forwards'; // Trigger closing animation

    // Optional: Remove the 'show' class after the animation ends
    setTimeout(() => {
        formContainer.classList.remove('show'); // Remove show class after animation
        wrapper.style.animation = ''; // Reset animation
    }, 600); // Match this duration to the animation duration
});
