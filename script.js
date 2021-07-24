const btnLogar = document.getElementById('btn-logar');
const counter = document.getElementById('counter');
const txt = document.getElementById('textarea');
const resultInput = document.getElementById('result');

// ---------------------Dados Form-------------------//
const nome = document.getElementById('input-name');
const sobreNome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const observacao = document.getElementById('textarea');
// ---------------------Dados Resultado-------------------//
const nomeR = document.getElementById('r-nome');
const emailR = document.getElementById('r-email');
const casaR = document.getElementById('r-casa');
const familiaR = document.getElementById('r-familia');
const materiaR = document.getElementById('r-materia');
const avaliacaoR = document.getElementById('r-avaliacao');
const observacaoR = document.getElementById('r-observacao');

function verficaSenha() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
} btnLogar.addEventListener('click', verficaSenha);

const btnAgree = document.getElementById('agreement');
const btnSub = document.getElementById('submit-btn');

function verificaAgree(event) {
  if (event.target.checked) {
    btnSub.removeAttribute('disabled', '');
  } else {
    btnSub.setAttribute('disabled', '');
  }
} btnAgree.addEventListener('change', verificaAgree);

function counterTxt() {
  const qtdPress = txt.value.length;
  const dec = 500 - qtdPress;
  counter.innerHTML = dec;
}txt.addEventListener('keyup', counterTxt); // keyup atualiza automaticamente quando algo é deletado

function checkSelect() {
  const checks = document.querySelectorAll('.subject');
  let checados = '';
  for (let index = 0; index < checks.length; index += 1) {
    if (checks[index].checked) {
      // eslint-disable-next-line no-useless-concat
      checados += `${checks[index].value},` + ' ';
    }
  }
  return checados;
}

function result(event) {
  event.preventDefault(); // Desativa o comportamento padrão
  resultInput.style.display = 'flex';
  nomeR.innerText = `Nome: ${nome.value} ${sobreNome.value}`;
  emailR.innerText = `Email: ${email.value}`;
  casaR.innerText = `Casa: ${document.querySelector('[name="casa"]:checked').value}`;
  familiaR.innerText = `Família: ${document.querySelector('[name="family"]:checked').value}`;
  materiaR.innerText = `Matérias: ${checkSelect()}`;
  avaliacaoR.innerText = `Avaliação: ${document.querySelector('[name="rate"]:checked').value}`;
  observacaoR.innerText = `Observações: ${observacao.value}`;
}btnSub.addEventListener('click', result);
