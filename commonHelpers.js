import{a as f,S as L,i as u}from"./assets/vendor-4d51048b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();f.defaults.baseURL="https://pixabay.com";const v="43393189-93860efddddd16832e4d2b268";function h(i,e){const s={image_type:"photo",orientation:"horizontal",safesearch:!0,key:v,q:i,page:e,per_page:15};return f.get("/api/?",{params:s})}function y(i){return i.map(e=>`<li class="gallery-item">
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
      </li>`).join("")}const b=document.querySelector(".form"),m=document.querySelector(".form-input"),l=document.querySelector(".gallery-list"),p=document.querySelector(".loader"),n=document.querySelector(".gallery-btn");let c=null,a=1;async function w(i){if(i.preventDefault(),c=m.value,a=1,c.trim()===""){u.error({message:"Enter a search name",position:"topRight"}),l.innerHTML="";return}try{p.classList.add("is-visible"),l.innerHTML="",m.value="";const{data:e}=await h(c,a);if(p.classList.remove("is-visible"),!e.hits.length){u.error({title:"Error",message:"Photo not found",position:"topRight"});return}e.hits.length>=e.totalHits?(n.classList.add("is-hidden"),n.removeEventListener("click",g),u.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",theme:"light",position:"topRight"})):n.classList.remove("is-hidden"),l.innerHTML=y(e.hits),n.addEventListener("click",g),_.refresh()}catch(e){console.log(e)}}let _=new L(".gallery-item__link",{captionsData:"alt",captionDelay:250});_.on("show.simplelightbox",function(i){i.preventDefault()});async function g(){try{let e=function(){return document.querySelector(".gallery-item").getBoundingClientRect().height},s=function(t){window.scrollBy({top:t,behavior:"smooth"})};a++;const{data:i}=await h(c,a);l.insertAdjacentHTML("beforeend",y(i.hits));const o=e();s(o*2)}catch(i){console.log(i)}}b.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
