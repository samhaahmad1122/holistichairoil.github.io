/*====================================
Holistic Hair Oil
Premium Landing Page
====================================*/

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}


// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("show");

});

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// Sticky Navbar Shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 15px 35px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="0 8px 30px rgba(0,0,0,.06)";

}

});




// Back To Top Button

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";

backTop.style.visibility="visible";

}

else{

backTop.style.opacity="0";

backTop.style.visibility="hidden";

}

});




// FAQ Accordion

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const answer=item.querySelector("p");

answer.style.display="none";

item.style.cursor="pointer";

item.addEventListener("click",()=>{

const visible=answer.style.display==="block";

faqItems.forEach(i=>{

i.querySelector("p").style.display="none";

});

answer.style.display=visible?"none":"block";

});

});




// Scroll Reveal Animation

const reveals=document.querySelectorAll(

".benefit-card,.ingredient-card,.review-card,.timeline-item,.highlight"

);

const reveal=()=>{

reveals.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-80){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

};

reveals.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();




// Product Gallery Hover Effect

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});




// Console Message

console.log("Holistic Hair Oil Website Loaded Successfully");
