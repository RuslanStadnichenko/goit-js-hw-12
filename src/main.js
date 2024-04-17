import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"; 

import { requestServer } from './js/pixabay-api.js'; 
import { createGallery } from './js/render-functions.js'; 

const searchForm = document.querySelector('.js-search-form'); 
const searchInput = document.querySelector('.js-search-input'); 
const btnSearch = document.querySelector('.search-btn'); 
const listGallery = document.querySelector('.gallery-list'); 
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.gallery-btn')

let textInput = null;
let numberPage = 1;

searchForm.addEventListener('submit', async event => { 
    event.preventDefault(); 

    textInput = searchInput.value;
    numberPage = 1;

    if (searchInput.value.trim() === '') { 
        iziToast.error({ 
           message: 'Enter a search name', 
           position: 'topRight', 
        }); 
        listGallery.innerHTML = ''; 
        return; 
    } 

    try {

        loader.classList.add('is-visible'); 

        listGallery.innerHTML = '';

        searchInput.value = '';

        const { obj } = await requestServer(textInput, numberPage)
        loader.classList.remove('is-visible');

        if (!obj.hits.length) { 
                iziToast.error({ 
                    title: 'Error', 
                    message: 'Photo not found', 
                    position: 'topRight', 
                }); 
                return; 
        } 
        if (!obj.hits.length >= obj.totalHits) {
            loadBtn.classList.add('is-hidden');
            loadBtn.removeEventListener('click', onLoadBtn);

        iziToast.info({
                message: "You have reached the search limit",
                backgroundColor: 'blue',
                theme: 'light',
                position: 'topRight',
            });
        } else {
            loadBtn.classList.remove('is-hidden');
        }
}
    

    // requestServer(searchInput.value)
       
    
            listGallery.innerHTML = createGallery(obj.hits); 
            libraryLightBox.refresh(); 
    })
        .catch(error => console.log(error))
        .finally(() => {
            loader.classList.remove('is-visible'); 
        });

    searchInput.value = '';


let libraryLightBox = new SimpleLightbox('.js-gallery-link', { 
    captionDelay: 250, 
    captionsData: 'alt', 
});

libraryLightBox.on('show.simplelightbox', event => { 
    event.preventDefault(); 
});