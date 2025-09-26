// Mobilné menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav){
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Rok vo footeri
document.getElementById('year').textContent = new Date().getFullYear();

// Jednoduchá validácia formulára (bez odosielania na server)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const message = (data.get('message') || '').trim();

    if (!name || !email || !message){
      formMsg.textContent = 'Vyplňte prosím všetky polia.';
      formMsg.style.color = 'crimson';
      return;
    }
    // Minimálna pseudo-validácia e-mailu
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      formMsg.textContent = 'Zadajte platný e-mail.';
      formMsg.style.color = 'crimson';
      return;
    }

    // Tu by sa dalo odoslať na backend alebo službu (Formspree, atď.)
    form.reset();
    formMsg.textContent = 'Ďakujeme! Ozveme sa čo najskôr.';
    formMsg.style.color = 'green';
  });
}
