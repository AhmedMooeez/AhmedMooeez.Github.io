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
