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

searchForm.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    if (searchInput.value.trim() === '') { 
        iziToast.error({ 
           message: 'Enter a search name', 
           position: 'topRight', 
        }); 
        listGallery.innerHTML = ''; 
        return; 
    } 

    loader.classList.add('is-visible'); 

    requestServer(searchInput.value)
        .then(obj => { 
            if (!obj.hits.length) { 
                iziToast.error({ 
                    title: 'Error', 
                    message: 'Photo not found', 
                    position: 'topRight', 
                }); 
                return; 
            } 
            listGallery.innerHTML = createGallery(obj.hits); 
            libraryLightBox.refresh(); 
        })
        .catch(error => console.log(error))
        .finally(() => {
            loader.classList.remove('is-visible'); 
        });

    searchInput.value = '';
});

let libraryLightBox = new SimpleLightbox('.js-gallery-link', { 
    captionDelay: 250, 
    captionsData: 'alt', 
});

libraryLightBox.on('show.simplelightbox', event => { 
    event.preventDefault(); 
});