const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const dashboardModal = document.getElementById('dashboardModal');
const dashboardOpeners = document.querySelectorAll('[data-open-dashboard]');
const dashboardClosers = document.querySelectorAll('[data-close-dashboard]');
let lastDashboardTrigger = null;
function openDashboard(event){
  lastDashboardTrigger = event.currentTarget;
  dashboardModal.classList.add('is-open');
  dashboardModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  dashboardModal.querySelector('.modal-close').focus();
}
function closeDashboard(){
  dashboardModal.classList.remove('is-open');
  dashboardModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  if(lastDashboardTrigger) lastDashboardTrigger.focus();
}
dashboardOpeners.forEach(button=>button.addEventListener('click',openDashboard));
dashboardClosers.forEach(button=>button.addEventListener('click',closeDashboard));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && dashboardModal.classList.contains('is-open')) closeDashboard();
});

const galleryItems = [
  {src:"https://raw.githubusercontent.com/AhmedMooeez/AhmedMooeez.github.io/main/Screenshot%20(123).png",alt:"Motocard project cover",label:"01 / PROJECT COVER"},
  {src:"https://raw.githubusercontent.com/AhmedMooeez/Motocard-Sales-Analysis/main/dashboard-preview.png",alt:"Motocard sales analysis dashboard — overview",label:"02 / DASHBOARD OVERVIEW"},
  {src:"https://raw.githubusercontent.com/AhmedMooeez/Motocard-Sales-Analysis/main/dashboard-preview2.png",alt:"Motocard sales analysis dashboard — second view",label:"03 / DASHBOARD VIEW 2"}
];
let galleryIndex=0;
const galleryImage=document.getElementById('galleryImage');
const galleryLink=document.getElementById('galleryImageLink');
const galleryCaption=document.getElementById('galleryCaption');
const galleryDots=[...document.querySelectorAll('[data-gallery-to]')];
function showGalleryImage(index){
  galleryIndex=(index+galleryItems.length)%galleryItems.length;
  const item=galleryItems[galleryIndex];
  galleryImage.src=item.src;
  galleryImage.alt=item.alt;
  galleryLink.href=item.src;
  galleryCaption.textContent=item.label;
  galleryDots.forEach((dot,i)=>dot.classList.toggle('active',i===galleryIndex));
}
document.querySelector('[data-gallery-prev]').addEventListener('click',()=>showGalleryImage(galleryIndex-1));
document.querySelector('[data-gallery-next]').addEventListener('click',()=>showGalleryImage(galleryIndex+1));
galleryDots.forEach(dot=>dot.addEventListener('click',()=>showGalleryImage(Number(dot.dataset.galleryTo))));
