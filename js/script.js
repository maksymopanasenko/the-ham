'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.services__list');

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target.nodeName != 'LI') return;
        
        updateContent(target);
    });

    function updateContent(currentTab) {
        const tabs = document.querySelectorAll('.services__tab');
        const tabContent = document.querySelectorAll('.services__content');
        const triangle = document.querySelector('.triangle');

        tabContent.forEach((item, i) => item.dataset.content === currentTab.dataset.tab ? item.classList.add('content_active') : item.classList.remove('content_active'));
        
        tabs.forEach((tab, i) => {
            if (tab.dataset.tab === currentTab.dataset.tab) {
                tab.classList.add('tab_active');
                currentTab.appendChild(triangle);
            } else {
                tab.classList.remove('tab_active')
            }
        });
    }

    // slider

    const icons = document.querySelectorAll('.testimonial__item');
    const carousel = document.querySelector('.testimonial__carousel');


    let current = 0;

    const authors = [
        {fullname: 'Alice Green', position: 'Web Developer', image: 'img/reviews/review1.png', review: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'},
        {fullname: 'Jason Statham', position: 'Actor', image: 'img/reviews/review2.png', review: 'Integer dignissim, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'},
        {fullname: 'Hasan Ali', position: 'UX Designer', image: 'img/reviews/review3.png', review: 'Augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'},
        {fullname: 'Doris Jackman', position: 'Project Manager', image: 'img/reviews/review4.png', review: 'Uquam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'},
    ]

    carousel.addEventListener('click', (e) => {
        const target = e.target;

        if (target.className == 'testimonial__arrow testimonial__arrow_next' || target.closest('.testimonial__arrow_next svg')) {
            if (current < icons.length - 1) {
                current++;
            } else {
                current = 0;
            }

            icons.forEach((icon, i) => {
                if (i === current) {
                    icon.classList.add('testimonial__item_active');
                } else {
                    icon.classList.remove('testimonial__item_active');
                }
            });
        }

        if (target.className == 'testimonial__arrow testimonial__arrow_prev' || target.closest('.testimonial__arrow_prev svg')) {
    
            if (current <= 0) {
                current = icons.length - 1;
            } else {
                current--;
            }

            icons.forEach((icon, i) => {
                if (i === current) {
                    icon.classList.add('testimonial__item_active');
                } else {
                    icon.classList.remove('testimonial__item_active');
                }
            });
        }

        if (target.nodeName == 'IMG') {
            icons.forEach(icon => icon.classList.remove('testimonial__item_active'));
            const index = Array.from(icons).indexOf(target.parentElement);
            current = index;
            icons[index].classList.add('testimonial__item_active')
        }

        icons.forEach((icon, i) => {
            if (i === current) {
                document.querySelector('.testimonial__name').innerText = authors[current].fullname;
                document.querySelector('.testimonial__text').innerText = authors[current].review;
                document.querySelector('.testimonial__position').innerText = authors[current].position;
                document.querySelector('.testimonial__photo img').src = authors[current].image;
            }
        })
    });


    // filters

    const filtersParent = document.querySelector('.work__list');

    filtersParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target.nodeName != 'LI') return;
        
        filterData(target);
    });


    function filterData(currentTab) {
        const tabs = document.querySelectorAll('.work__tab');
        const projects = document.querySelectorAll('.work__item');

        projects.forEach(project => {

            if (currentTab.dataset.tab === 'all') {
                project.style.display = 'block';
            } else if (project.dataset.project === currentTab.dataset.tab) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        tabs.forEach((tab, i) => {
            if (tab === currentTab) {
                tab.classList.add('work__tab_active');
            } else {
                tab.classList.remove('work__tab_active')
            }
        });
    }
    















});
