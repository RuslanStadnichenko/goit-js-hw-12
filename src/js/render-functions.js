export function createGallery(images) {
    return images.map(image =>
` <li class="gallery-item">
      <a class="gallery-link js-gallery-link" href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}">
      </a>
      <div class="image-details">
        <ul class="details-title">
         <li class="details-title-det">
           <h3 class="title-info">Likes:</h3>
           <p class="paragraph-info">${image.likes}</p>
         </li>
         <li class="details-title-det">
           <h3 class="title-info">Views:</h3>
           <p class="paragraph-info">${image.views}</p>
         </li>  
         <li class="details-title-det">
           <h3 class="title-info">Comments:</h3>
           <p class="paragraph-info">${image.comments}</p>
         </li>  
         <li class="details-title-det">
           <h3 class="title-info">Downloads:</h3>
           <p class="paragraph-info">${image.downloads}</p>
         </li>
        </ul>
      </div>
    </li>`).join('');
}