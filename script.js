
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


const form = document.getElementById('form-contato');
const msgErro = document.getElementById('msg-erro');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !mensagem || !email.includes('@')) {
    msgErro.style.display = 'block';
  } else {
    msgErro.style.display = 'none';
    alert("Mensagem enviada com sucesso!");
    form.reset();
  }
});
