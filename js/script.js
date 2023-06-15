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
});
