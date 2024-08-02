const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

// Inicialize o EmailJS com seu ID de usuário
(function() {
  emailjs.init("kYcw4BEUAtPc22hJl");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenha os valores dos campos do formulário
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Valide os campos (opcional)
  if (!name || !email || !phone || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Envie o e-mail utilizando EmailJS
  emailjs.send("service_f0970kr", "ContatoFormTemplate", {
      name: name,
      email: email,
      phone: phone,
      message: message
  }).then(function(response) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contact-form').reset();
  }, function(error) {
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
  });
});
