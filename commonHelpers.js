import{i as n,S as p}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function f(r){const e="43393189-93860efddddd16832e4d2b268",l="https://pixabay.com/api/",i=new URLSearchParams({key:e,q:r,orientation:"horizontal",image_type:"photo",safesearch:!0});return fetch(`${l}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(r){return r.map(e=>` <li class="gallery-item">
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
    </li>`).join("")}const m=document.querySelector(".js-search-form"),a=document.querySelector(".js-search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");m.addEventListener("submit",r=>{if(r.preventDefault(),a.value.trim()===""){n.error({message:"Enter a search name",position:"topRight"}),c.innerHTML="";return}d.classList.add("is-visible"),f(a.value).then(e=>{if(!e.hits.length){n.error({title:"Error",message:"Photo not found",position:"topRight"});return}c.innerHTML=h(e.hits),u.refresh()}).catch(e=>console.log(e)).finally(()=>{d.classList.remove("is-visible")}),a.value=""});let u=new p(".js-gallery-link",{captionDelay:250,captionsData:"alt"});u.on("show.simplelightbox",r=>{r.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
