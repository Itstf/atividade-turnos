alert("Em que turno você estuda?: ");
alert("M = Matutino, V = Vespertino ou N = Noturno");

var turno = prompt("Digite seu turno: ");
turno.toUpperCase();

switch (turno.toUpperCase()) {
  case 'M':
    alert(turno.toUpperCase() + ", Bom dia")
    break

  case 'V':
    alert(turno.toUpperCase() + ", Boa tarde")
    break

  case 'N':
    alert(turno.toUpperCase() + ", Boa noite")
    break

  default:
  alert(turno + " não existe")
}