import iziToast from "izitoast"; 
import SimpleLightbox from "simplelightbox"; 
import { requestServer } from './js/pixabay-api.js'; 
import { createGallery } from './js/render-functions.js'; 

const searchForm = document.querySelector('.js-search-form'); 
const searchInput = document.querySelector('.js-search-input'); 
const listGallery = document.querySelector('.gallery-list'); 
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.gallery-btn')

let numberPage = 1

async function inputSearch(event) {
    event.preventDefault();

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
        const { obj } = await requestServer(textInput, numberPage);
        loader.classList.remove('is-visible');

        if (!obj || !obj.hits || obj.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Photo not found',
                position: 'topRight',
            });
            return;
        }

        if (obj && obj.hits && obj.hits.length > 0) {
            loadMoreBtn.classList.add('is-hidden');
            loadMoreBtn.removeEventListener('click', onLoadMoreBtn);
            iziToast.info({
                message: "End of search results.",
                position: 'topRight',
            });
        } else {
            loadMoreBtn.classList.remove('is-hidden');
        }

        listGallery.innerHTML = createGallery(obj.hits);
        loadMoreBtn.addEventListener('click', onLoadMoreBtn);
        libraryLightBox.refresh();

        searchInput.value = '';
    } catch (error) {
        console.log(error);
    }
}



let libraryLightBox = new SimpleLightbox('.js-gallery-link', { 
    captionDelay: 250, 
    captionsData: 'alt', 
});

libraryLightBox.on('show.simplelightbox', event => { 
    event.preventDefault(); 
});

async function onLoadMoreBtn() {
    try {
        numberPage++
        const { obj } = await requestServer(textInput, numberPage)

        listGallery.insertAdjacentHTML('beforeend', createGallery(obj.hits))

        function getCardHeight() {
            const card = document.querySelector('.gallery-item')
            const cardRect = card.getBoundingClientRect()
            return cardRect.height
        }

        function smoothScroll(distance) {
            window.scrollBy({
                top: distance,
                behavior: 'smooth'
            })
        }
        const cardHeight = getCardHeight()
        smoothScroll(cardHeight * 2)
     

    } catch (error) {
        console.log(error)
    }
}

searchForm.addEventListener('submit', inputSearch)