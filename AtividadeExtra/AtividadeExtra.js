const form = document.getElementById("form");
const resultado = document.getElementById("resultado");
const mediaGeral = document.getElementById("mediaGeral");

let alunos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const ra = document.getElementById("ra").value.trim();
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  // Validando nome completo, RA e notas
  if (nome == "" || nome.split(" ").length < 2) {
    alert("Informe o nome completo (nome e sobrenome).");
    return;
  }

  if (!/^\d{5}$/.test(ra)) {
    alert("RA deve conter exatamente 5 dígitos numéricos.");
    return;
  }

  if ([nota1, nota2, nota3].some(n => isNaN(n) || n < 0 || n > 10)) {
    alert("Notas devem ser números entre 0 e 10.");
    return;
  }

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  alunos.push({nome, ra, media: parseFloat(media)});

  resultado.innerHTML += `<p><strong>Aluno:</strong> ${nome}; <strong>RA:</strong> ${ra}; <strong>Média:</strong> ${media}</p>`;

  form.reset();

  if (alunos.length == 2) {
    form.querySelector("button").disabled = true;
    const somaMedias = alunos.reduce((acumulador, aluno) => acumulador + aluno.media, 0);
    const mediaFinal = (somaMedias / alunos.length).toFixed(2);
    mediaGeral.innerHTML = `<h3>Média geral: ${mediaFinal}</h3>`;
  }
});