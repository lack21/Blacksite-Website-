// lear
// JS

window.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('switch-btn');
    const specialBtns = document.querySelector('.spec-btns');
    const navigation = document.querySelector('nav');
    const hiddenOffers = document.querySelectorAll('.hidden-offer');
    const offerBtn = document.getElementById('offer-btn');

    const sliders = document.querySelectorAll('.slide');
    const testimonialsContainer = document.querySelector('.container');

    const navLinks = document.querySelector('.nav-links');
    const showLinksBtn = document.getElementById('show-links');
    const hideLinksBtn = document.getElementById('hide-links');

    // Switching Background Mode
    switchBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-body');
    });

    // Showing Elements By Scrolling The Page
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0){
            specialBtns.style.display = 'flex';
            navigation.style.padding = '1em 5%';
            navigation.style.backgroundColor = '#131319';
            navigation.style.boxShadow = '0 0 1em #363636';
        }else{
            specialBtns.style.display = 'none';
            navigation.style.padding = '3% 5%';
            navigation.style.backgroundColor = 'transparent';
            navigation.style.boxShadow = 'none';
        }
    });

    // Showing Offers
    offerBtn.addEventListener('click', () => {
        hiddenOffers.forEach((item) => {
            if (item.style.display != 'block'){
                item.style.display = 'block';
                offerBtn.innerHTML = 'Show Less';
            }else{
                item.style.display = 'none';
                offerBtn.innerHTML = 'Show More';
            }
        });
    });

    // Sliding Testimonials
    for (let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener('click', () => {
            testimonialsContainer.style.transform = `translateX(-${i * 100}vw)`;
            sliders.forEach((item) => item.classList.remove('active'));
            sliders[i].classList.add('active');
        });
    }

    // Show Navigation Links
    showLinksBtn.addEventListener('click', () => {
        navLinks.style.right = '0';
    });

    // Hide Navigation Links
    hideLinksBtn.addEventListener('click', () => {
        navLinks.style.right = '-160px';
    });
});