'use strict'

// UI variables
const loadingModal = document.querySelector('.loading-modal');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search_input');
const img = document.querySelector('.result > img');
/* ------- */
const API_KEY = 'A6tEPlyiI6reJXVdDoHzBM5Kxb1PjoMy';

const showLoading = () => {
    loadingModal.style.display = 'block';
}

const hideLoading = () => {
    loadingModal.style.display = 'none';
}

const clearInput = input => input.value = '';

const showGipgy = (data) => {
    img.src = data.data.images.original.url;
    img.alt = `${searchInput.value}-image`;
}

const getGiphy = async () => {
    const API = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`;

    showLoading();

    fetch(API, {mode: 'cors'})
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((jsonData) => {
        hideLoading();
        showGipgy(jsonData);
        clearInput(searchInput);
    })
    .catch((err) => {
        Swal.fire('Please type valid giphy name in the search box');
        hideLoading();
    })

}

searchForm.addEventListener('submit', e => {
    e.preventDefault();

    getGiphy();
});