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

        const step = 100 * current + '%';
        document.querySelector('.testimonial__slides').style.right = step;
    });

    // button load more 

    let tabTarget;
    const moreBtn = document.querySelector('.work__btn');

    const additionalProjects = [
        {img: 'img/projects/work13.jpg', alt: 'project', data: 'web'},
        {img: 'img/projects/work4.png', alt: 'project', data: 'graphic'},
        {img: 'img/projects/work15.jpg', alt: 'project', data: 'landing'},
        {img: 'img/projects/work6.png', alt: 'project', data: 'landing'},
        {img: 'img/projects/work17.jpg', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work18.jpg', alt: 'project', data: 'graphic'},
        {img: 'img/projects/work9.png', alt: 'project', data: 'web'},
        {img: 'img/projects/work20.jpg', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work11.png', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work22.jpg', alt: 'project', data: 'landing'},
        {img: 'img/projects/work2.png', alt: 'project', data: 'web'},
        {img: 'img/projects/work24.jpg', alt: 'project', data: 'graphic'},
        {img: 'img/projects/work13.jpg', alt: 'project', data: 'web'},
        {img: 'img/projects/work14.jpg', alt: 'project', data: 'graphic'},
        {img: 'img/projects/work15.jpg', alt: 'project', data: 'landing'},
        {img: 'img/projects/work16.jpg', alt: 'project', data: 'landing'},
        {img: 'img/projects/work17.jpg', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work8.png', alt: 'project', data: 'graphic'},
        {img: 'img/projects/work19.jpg', alt: 'project', data: 'web'},
        {img: 'img/projects/work20.jpg', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work21.jpg', alt: 'project', data: 'wordpress'},
        {img: 'img/projects/work22.jpg', alt: 'project', data: 'landing'},
        {img: 'img/projects/work3.png', alt: 'project', data: 'web'},
        {img: 'img/projects/work24.jpg', alt: 'project', data: 'graphic'},
    ];

    
    const projectsParent = document.querySelector('.work__gallery');

    let hoveredImg;

    projectsParent.addEventListener('mouseover', (e) => {
        const img = e.target;

        if (img.nodeName != 'IMG') return false;

        const dataAttr = img.parentElement.dataset.project;
        let text;

        document.querySelectorAll('.work__tab').forEach(tab => {
            if (tab.dataset.tab == dataAttr) {
                text = tab.innerText;
            };
        })

        const hoverElem = document.createElement('a');
        hoverElem.classList.add('work__item-link', 'appear');
        hoverElem.setAttribute('href', '#');
        hoverElem.innerHTML = `
            <svg width="88" height="43" viewBox="0 0 88 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2143_233)">
                <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z" fill="#18CFAB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z" fill="#18CFAB"/>
                <rect x="60" y="17" width="12" height="11" fill="white"/>
                </g>
            </svg>
            <h6 class="work__item-label">creative design</h6>
            <span class="work__item-sublabel">${text}</span>
        `;

        img.style.display = 'none';
        img.parentElement.append(hoverElem);

        if (hoveredImg) {
            hoveredImg.nextElementSibling.remove();
            hoveredImg.style.display = 'block';
        }

        hoveredImg = img;
        
    });

    projectsParent.addEventListener('mouseleave', () => {
        hoveredImg.nextElementSibling.remove();
        hoveredImg.style.display = 'block';
        hoveredImg = null;
    });
    
    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        moreBtn.setAttribute('disabled', '');

        const spinner = document.createElement('img');
        spinner.classList.add('spinner');
        spinner.setAttribute('src', '../icons/spinner.gif');
        spinner.setAttribute('alt', 'spinner');

        moreBtn.insertAdjacentElement('beforebegin', spinner);

        setTimeout(() => {
            spinner.remove();
            moreBtn.removeAttribute('disabled');

            if (projectsParent.children.length === additionalProjects.length) {
                addListItem(12, 24);
                moreBtn.remove();
            } else {
                addListItem(0, 12);
            }
    
            function addListItem(n, m) {
                additionalProjects.slice(n, m).forEach(obj => {
                    const newListItem = document.createElement('li');
                    newListItem.classList.add('work__item');
                    newListItem.setAttribute('data-project', obj.data);
                    newListItem.innerHTML = `
                        <img src=${obj.img}  alt=${obj.alt}>
                    `;
                    projectsParent.append(newListItem);
                });
            }
            
            filterData(tabTarget);
        }, 2000)
        

    });


    // filters

    const filtersParent = document.querySelector('.work__list');

    filtersParent.addEventListener('click', (e) => {
        const target = e.target;
        tabTarget = target;

        if (target.nodeName != 'LI') return;
        
        filterData(target);
    });


    function filterData(currentTab) {

        if (!currentTab) return false;
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
