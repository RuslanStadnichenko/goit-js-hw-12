import{i as n,S as p}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const f="43393189-93860efddddd16832e4d2b268",h="https://pixabay.com/api/";function m(r){const e=new URLSearchParams({key:f,q:r,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${h}?${e}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function y(r){return r.map(e=>` <li class="gallery-item">
      <a class="gallery-link js-gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" title="${e.tags}">
      </a>
      <div class="image-details">
        <ul class="details-title">
         <li class="details-title-det">
           <h3 class="title-info">Likes:</h3>
           <p class="paragraph-info">${e.likes}</p>
         </li>
         <li class="details-title-det">
           <h3 class="title-info">Views:</h3>
           <p class="paragraph-info">${e.views}</p>
         </li>  
         <li class="details-title-det">
           <h3 class="title-info">Comments:</h3>
           <p class="paragraph-info">${e.comments}</p>
         </li>  
         <li class="details-title-det">
           <h3 class="title-info">Downloads:</h3>
           <p class="paragraph-info">${e.downloads}</p>
         </li>
        </ul>
      </div>
    </li>`).join("")}const g=document.querySelector(".js-search-form"),o=document.querySelector(".js-search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");g.addEventListener("submit",r=>{if(r.preventDefault(),o.value.trim()===""){n.error({message:"Enter a search name",position:"topRight"}),c.innerHTML="";return}d.classList.add("is-visible"),m(o.value).then(e=>{if(!e.hits.length){n.error({title:"Error",message:"Photo not found",position:"topRight"});return}c.innerHTML=y(e.hits),u.refresh()}).catch(e=>console.log(e)).finally(()=>{d.classList.remove("is-visible")}),o.value=""});let u=new p(".js-gallery-link",{captionDelay:250,captionsData:"alt"});u.on("show.simplelightbox",r=>{r.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
