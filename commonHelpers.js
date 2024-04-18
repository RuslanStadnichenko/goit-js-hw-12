import{a as h,S as L,i as o}from"./assets/vendor-4d51048b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();h.defaults.baseURL="https://pixabay.com";const v="43393189-93860efddddd16832e4d2b268";function y(r,e){const s={image_type:"photo",orientation:"horizontal",safesearch:!0,key:v,q:r,page:e,per_page:15};return h.get("/api/?",{params:s})}function _(r){return r.map(e=>`<li class="gallery-item">
            <a class="gallery-item__link" href="${e.largeImageURL}"><div class="img-container"><img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"></div>
            <ul class="img-description__list">
            <li class="img-description__item">
                <p class="img-description__title">
                Likes
                </p>
                <p class="img-description__text">
                ${e.likes}
                </p>
            </li>
            <li class="img-description__item">
                <p class="img-description__title">
                Views
                </p>
                <p class="img-description__text">
                ${e.views}
                </p>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Comments
                </p>
                <p class="img-description__text">
                    ${e.comments}
                </p>
                </li>
            </li>
            <li>
                <li class="img-description__item">
                <p class="img-description__title">
                    Downloads
                </p>
                <p class="img-description__text">
                    ${e.downloads}
                </p>
                </li>
            </li>
            </ul>
        </a>
      </li>`).join("")}const b=document.querySelector(".form"),u=document.querySelector(".form-input"),l=document.querySelector(".gallery-list"),g=document.querySelector(".loader"),a=document.querySelector(".gallery-btn");let c=null,d=1;async function w(r){if(r.preventDefault(),c=u.value,d=1,c.trim()===""){o.error({message:"Enter a search name",position:"topRight"}),l.innerHTML="";return}try{g.classList.add("is-visible"),l.innerHTML="",u.value="";const{data:e}=await y(c,d);if(g.classList.remove("is-visible"),!e.hits.length){o.error({title:"Error",message:"Photo not found",position:"topRight"});return}e.hits.length>=e.totalHits?(a.classList.add("is-hidden"),a.removeEventListener("click",f),o.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",theme:"light",position:"topRight"})):a.classList.remove("is-hidden"),l.innerHTML=_(e.hits),a.addEventListener("click",f),p.refresh()}catch(e){o.error({message:"An error occurred. Please try again later.",position:"topRight"}),console.error(e)}}let p=new L(".gallery-item__link",{captionsData:"alt",captionDelay:250});p.on("show.simplelightbox",function(r){r.preventDefault()});async function f(){try{let e=function(){return document.querySelector(".gallery-item").getBoundingClientRect().height},s=function(t){window.scrollBy({top:t,behavior:"smooth"})};d++;const{data:r}=await y(c,d);l.insertAdjacentHTML("beforeend",_(r.hits));const n=e();s(n*2),p.refresh()}catch(r){o.error({message:"An error occurred while loading more images. Please try again later.",position:"topRight"}),console.error(r)}}b.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
