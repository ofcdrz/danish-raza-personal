/* ISARA SITE SETTINGS
   Replace the WhatsApp number below with your business number.
   Use country code and digits only, e.g. 919876543210.
*/
const ISARA_WHATSAPP_NUMBER = "91XXXXXXXXXX";

const ISARA_PRODUCTS = [
  {
    id:"ethnic-001", name:"Blush Embroidered Ensemble", category:"ethnic",
    price:"Price on enquiry", description:"An elegant occasion ensemble with intricate detailing and a graceful silhouette. Contact ISARA for fabric, size and availability details.",
    image:"assets/assets/IMG_20261105_194327.jpg.jpeg",
    gallery:["assets/assets/IMG_20261105_194327.jpg.jpeg","assets/assets/IMG_20261105_194324.jpg.jpeg","assets/assets/IMG_20261105_194328.jpg.jpeg"]
  },
  {
    id:"ethnic-002", name:"Classic Draped Ethnic Look", category:"ethnic",
    price:"Price on enquiry", description:"A refined traditional look designed for celebrations, festive gatherings and special occasions.",
    image:"assets/assets/IMG-20261108-WA0015~2.jpg.jpeg",
    gallery:["assets/assets/IMG-20261108-WA0015~2.jpg.jpeg","assets/assets/IMG_20261105_194316.jpg.jpeg"]
  },
  {
    id:"party-001", name:"Rose Evening Statement", category:"party",
    price:"Price on enquiry", description:"A sophisticated party look with a statement finish. Enquire with our team for styling and availability.",
    image:"assets/assets/IMG_20261105_194316.jpg.jpeg",
    gallery:["assets/assets/IMG_20261105_194316.jpg.jpeg","assets/assets/IMG_20261105_194324.jpg.jpeg","assets/assets/IMG_20261105_194327.jpg.jpeg"]
  },
  {
    id:"party-002", name:"Signature Celebration Look", category:"party",
    price:"Price on enquiry", description:"A distinctive celebration outfit curated for memorable evenings and special events.",
    image:"assets/assets/IMG_20261105_194328.jpg.jpeg",
    gallery:["assets/assets/IMG_20261105_194328.jpg.jpeg","assets/assets/IMG-20261108-WA0015~2.jpg.jpeg"]
  }
];

function isaraWhatsAppUrl(message){
  const number = ISARA_WHATSAPP_NUMBER.replace(/\D/g,"");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function isaraEnquire(productName){
  const msg = `Hello ISARA, I would like to enquire about ${productName}. Please share the price, available sizes and details.`;
  if(ISARA_WHATSAPP_NUMBER.includes("X")){
    alert("Please add your WhatsApp business number in js/products.js first.");
    return;
  }
  window.open(isaraWhatsAppUrl(msg),"_blank","noopener");
}
function isaraProductUrl(id){ return `product.html?id=${encodeURIComponent(id)}`; }
function isaraProductCard(p){
  return `<article class="product-card">
    <a href="${isaraProductUrl(p.id)}" class="product-image">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span class="product-tag">${p.category==="ethnic"?"Ethnic Wear":"Party Wear"}</span>
    </a>
    <div class="product-info">
      <h3><a href="${isaraProductUrl(p.id)}">${p.name}</a></h3>
      <p>${p.category==="ethnic"?"Traditional artistry":"Occasion wear"}</p>
      <div class="product-price">${p.price}</div>
      <div class="product-actions">
        <a class="btn btn-outline" href="${isaraProductUrl(p.id)}">View details</a>
        <button class="btn" onclick="isaraEnquire('${p.name.replace(/'/g,"\\'")}')">Enquire</button>
      </div>
    </div>
  </article>`;
}
function isaraRenderCategory(category, targetId){
  const target=document.getElementById(targetId);
  if(!target)return;
  const list=ISARA_PRODUCTS.filter(p=>p.category===category);
  target.innerHTML=list.length?list.map(isaraProductCard).join(""):'<div class="empty-note">New designs will be added soon.</div>';
}
function isaraRenderFeatured(targetId){
  const target=document.getElementById(targetId);
  if(target)target.innerHTML=ISARA_PRODUCTS.slice(0,4).map(isaraProductCard).join("");
}
function isaraRenderProduct(){
  const params=new URLSearchParams(location.search);
  const p=ISARA_PRODUCTS.find(x=>x.id===params.get("id"));
  const target=document.getElementById("product-detail");
  if(!target)return;
  if(!p){target.innerHTML='<div class="empty-note">Product not found. Please return to the collection.</div>';return;}
  const photos=p.gallery.map((src,i)=>`<img src="${src}" alt="${p.name} view ${i+1}">`).join("");
  target.innerHTML=`
    <div class="detail-gallery">${photos}</div>
    <div class="detail-copy">
      <div class="eyebrow">${p.category==="ethnic"?"ISARA ETHNIC COLLECTION":"ISARA OCCASION COLLECTION"}</div>
      <h1>${p.name}</h1>
      <div class="detail-price">${p.price}</div>
      <p>${p.description}</p>
      <div class="detail-label">Select a size to enquire</div>
      <div class="size-options">
        ${["XS","S","M","L","XL","XXL","Custom"].map(s=>`<button type="button" onclick="isaraSelectSize(this,'${s}')">${s}</button>`).join("")}
      </div>
      <div class="detail-buttons">
        <button class="btn whatsapp" onclick="isaraDetailEnquire('${p.name.replace(/'/g,"\\'")}')">Enquire on WhatsApp</button>
      </div>
      <p class="notice">For current pricing, availability, fabric and custom sizing, please contact our team.</p>
    </div>`;
}
let isaraChosenSize="";
function isaraSelectSize(button,size){
  document.querySelectorAll(".size-options button").forEach(b=>b.classList.remove("selected"));
  button.classList.add("selected");isaraChosenSize=size;
}
function isaraDetailEnquire(name){
  const size=isaraChosenSize?` Preferred size: ${isaraChosenSize}.`:"";
  if(ISARA_WHATSAPP_NUMBER.includes("X")){alert("Please add your WhatsApp business number in js/products.js first.");return;}
  window.open(isaraWhatsAppUrl(`Hello ISARA, I am interested in ${name}.${size} Please share price and availability.`),"_blank","noopener");
}
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const nav=document.querySelector(".main-nav");
  if(toggle&&nav)toggle.addEventListener("click",()=>nav.classList.toggle("open"));
  isaraRenderFeatured("featured-products");
  isaraRenderCategory("ethnic","ethnic-products");
  isaraRenderCategory("party","party-products");
  isaraRenderProduct();
});
