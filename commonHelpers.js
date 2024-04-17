import{a as f,S as L,i as d}from"./assets/vendor-4d51048b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();f.defaults.baseURL="https://pixabay.com";const v="43393189-93860efddddd16832e4d2b268";function m(s,e){const i={image_type:"photo",orientation:"horizontal",safesearch:!0,key:v,q:s,page:e,per_page:15};return f.get("/api/?",{params:i})}function g(s){return s.map(e=>` <li class="gallery-item">
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
    </li>`).join("")}const b=document.querySelector(".js-search-form"),u=document.querySelector(".js-search-input"),a=document.querySelector(".gallery-list"),h=document.querySelector(".loader"),l=document.querySelector(".gallery-btn");let n=1;async function w(s){if(s.preventDefault(),n=1,u.value.trim()===""){d.error({message:"Enter a search name",position:"topRight"}),a.innerHTML="";return}try{h.classList.add("is-visible"),a.innerHTML="",u.value="";const{obj:e}=await m(textInput,n);if(h.classList.remove("is-visible"),!e||!e.hits||e.hits.length===0){d.error({title:"Error",message:"Photo not found",position:"topRight"});return}e&&e.hits&&e.hits.length>0?(l.classList.add("is-hidden"),l.removeEventListener("click",p),d.info({message:"End of search results.",position:"topRight"})):l.classList.remove("is-hidden"),a.innerHTML=g(e.hits),l.addEventListener("click",p),y.refresh(),u.value=""}catch(e){console.log(e)}}let y=new L(".js-gallery-link",{captionDelay:250,captionsData:"alt"});y.on("show.simplelightbox",s=>{s.preventDefault()});async function p(){try{let e=function(){return document.querySelector(".gallery-item").getBoundingClientRect().height},i=function(t){window.scrollBy({top:t,behavior:"smooth"})};n++;const{obj:s}=await m(textInput,n);a.insertAdjacentHTML("beforeend",g(s.hits));const o=e();i(o*2)}catch(s){console.log(s)}}b.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
