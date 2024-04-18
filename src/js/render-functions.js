export function createCard(elements) {
    return elements.map(elem => {
        return `<li class="gallery-item">
            <a class="gallery-item__link" href="${elem.largeImageURL}"><div class="img-container"><img class="gallery-img" src="${elem.webformatURL}" alt="${elem.tags}"></div>
            <ul class="img-description__list">
            <li class="img-description__item">
                <p class="img-description__title">
                Likes
                </p>
                <p class="img-description__text">
                ${elem.likes}
                </p>
            </li>
            <li class="img-description__item">
                <p class="img-description__title">
                Views
                </p>
                <p class="img-description__text">
                ${elem.views}
                </p>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Comments
                </p>
                <p class="img-description__text">
                    ${elem.comments}
                </p>
                </li>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Downloads
                </p>
                <p class="img-description__text">
                    ${elem.downloads}
                </p>
                </li>
            </li>
            </ul>
        </a>
      </li>`
    }).join('')
}