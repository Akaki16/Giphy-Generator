'use strict';

import { StateValue } from './state.js';

// UI variables
const darkIcon = document.querySelector('.dark');
const iconArea = document.querySelector('.icon-area');

const setAppBgColor = (color) => {
    document.body.style.backgroundColor = '#' + color;
}

const setAppTextColor = (color) => {
    document.body.style.color = '#' + color;
}

const showAppBgColor = () => {
    const bgColor = StateValue.getBgColor();
    document.body.style.backgroundColor = '#' + bgColor;
}

const showAppTextColor = () => {
    const textColor = StateValue.getTextColor();
    document.body.style.color = '#' + textColor;
}

darkIcon.addEventListener('click', () => {

    setAppBgColor('333');

    setAppTextColor('fff');

    StateValue.addBgColor('333');

    StateValue.addTextColor('fff');

    iconArea.innerHTML = `<i class="fas fa-sun fa-2x light"></i>`;

});

// toggle betwen themes
document.querySelector('.icon-area').addEventListener('click', e => {
    const element = e.target.classList;
    if (element.contains('light')) {
        setAppBgColor('fff');

        setAppTextColor('333');

        StateValue.addBgColor('fff');

        StateValue.addTextColor('333');

        iconArea.innerHTML = `<i class="fas fa-moon fa-2x dark"></i>`;
    } else if (element.contains('dark')) {
        setAppBgColor('333');

        setAppTextColor('fff');

        StateValue.addBgColor('333');

        StateValue.addTextColor('fff');

        iconArea.innerHTML = `<i class="fas fa-sun fa-2x light"></i>`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showAppBgColor();
    showAppTextColor();
});