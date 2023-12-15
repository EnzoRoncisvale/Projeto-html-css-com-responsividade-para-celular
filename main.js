// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Efeito de hover nas imagens da seção de benefícios
  const imagensBeneficios = document.querySelectorAll('.imagem-beneficios');

  imagensBeneficios.forEach(function (imagem) {
    imagem.addEventListener('mouseover', function () {
      imagem.style.opacity = 0.7;
    });

    imagem.addEventListener('mouseout', function () {
      imagem.style.opacity = 1;
    });
  });

  // Botão "Voltar ao Topo"
  const btnVoltarTopo = document.createElement('button');
  btnVoltarTopo.textContent = 'Voltar ao Topo';
  btnVoltarTopo.classList.add('btn-voltar-topo');

  btnVoltarTopo.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.body.appendChild(btnVoltarTopo);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btnVoltarTopo.style.opacity = 1;
    } else {
      btnVoltarTopo.style.opacity = 0;
    }
  });

  // Botão "Modo Noturno"
  const btnModoNoturno = document.createElement('button');
  btnModoNoturno.textContent = 'Modo Noturno';
  btnModoNoturno.classList.add('btn-modo-noturno');

  btnModoNoturno.addEventListener('click', function () {
    document.body.classList.toggle('modo-noturno');
  });

  document.body.appendChild(btnModoNoturno);
});
