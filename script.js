// Configure o WhatsApp da loja com código do país e DDD, apenas dígitos.
const WHATSAPP_NUMBER = '5511000000000'; // Número fictício para demonstração.
if (WHATSAPP_NUMBER) {
  document.querySelectorAll('.whatsapp').forEach(link => {
    const url = new URL(link.href);
    url.pathname = '/' + WHATSAPP_NUMBER.replace(/\D/g, '');
    link.href = url.toString();
  });
  document.querySelector('.contact-note').textContent = 'WhatsApp demonstrativo: +55 (11) 00000-0000 · número fictício';
}
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(tab => {
      tab.classList.toggle('active', tab === button);
      tab.setAttribute('aria-pressed', String(tab === button));
    });
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
