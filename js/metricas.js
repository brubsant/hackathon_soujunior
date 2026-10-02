// Anima os números quando o utilizador faz scroll até à secção
const counters = document.querySelectorAll('.stat-number');

const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = target / 50; // Ajusta a velocidade da contagem

  const updateCount = () => {
    count += speed;
    if (count < target) {
      counter.innerText = '+' + Math.ceil(count);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = '+' + target;
    }
  };

  updateCount();
};

// Dispara a animação apenas quando a secção fica visível na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target); // Roda apenas uma vez
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));