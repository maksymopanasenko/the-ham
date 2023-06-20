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

    const icons = document.querySelectorAll('.testimonial__item');
    const carousel = document.querySelector('.testimonial__carousel');


    let current = 0;

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
    });



    















});
