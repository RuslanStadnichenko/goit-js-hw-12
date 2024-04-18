import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import { requestServer } from "./js/pixabay-api";
import { createCard } from "./js/render-functions";


const formElem = document.querySelector('.form')
const inputFormElem = document.querySelector('.form-input')
const galleryListElem = document.querySelector('.gallery-list')
const loaderElem = document.querySelector('.loader')
const loadMoreBtnElem = document.querySelector('.gallery-btn')

let textInput = null
let numberPage = 1

async function inputSearch(event) {
    event.preventDefault();

    textInput = inputFormElem.value
    numberPage = 1

    if (textInput.trim() === '') {
       iziToast.error({
            message: 'Enter a search name',
            position: 'topRight',
        })
        galleryListElem.innerHTML = ''

        return
    }

    try {
        loaderElem.classList.add('is-visible')


        galleryListElem.innerHTML = ''


        inputFormElem.value = ''

        const { data } = await requestServer(textInput, numberPage)
        loaderElem.classList.remove('is-visible')

        if (!data.hits.length) {
            iziToast.error({
                      title: 'Error', 
                    message: 'Photo not found', 
                    position: 'topRight', 
            });
            return
        }

        if(data.hits.length >= data.totalHits) {
            loadMoreBtnElem.classList.add('is-hidden')
            loadMoreBtnElem.removeEventListener('click', onLoadMoreBtn)

            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: 'blue',
                theme: 'light',
                position: 'topRight',
            });
        } else {
            loadMoreBtnElem.classList.remove('is-hidden')
        }

        galleryListElem.innerHTML = createCard(data.hits)
        loadMoreBtnElem.addEventListener('click', onLoadMoreBtn)

        gallery.refresh()

    } catch (error) {
        console.log(error)
    }
}

let gallery = new SimpleLightbox('.gallery-item__link', {
    captionsData: 'alt',
    captionDelay: 250
}
);

gallery.on('show.simplelightbox', function (event) {
    event.preventDefault()
});


async function onLoadMoreBtn() {
    try {
        numberPage++
        const { data } = await requestServer(textInput, numberPage)

        galleryListElem.insertAdjacentHTML('beforeend', createCard(data.hits))

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

formElem.addEventListener('submit', inputSearch)