// Entrades TribuFest 2027
//
// Quan l'esdeveniment estigui creat a Entradium, posa aquí el seu identificador
// (la part final de l'enllaç: https://entradium.com/events/IDENTIFICADOR).
// Per exemple: const ENTRADIUM_EVENT = 'tribufest-2027-felanitx';
// Mentre estigui buit, els botons diuen «Entrades properament» i porten a la secció d'entrades.
const ENTRADIUM_EVENT = '';

if (ENTRADIUM_EVENT) {
  const url = 'https://entradium.com/events/' + ENTRADIUM_EVENT;
  document.querySelectorAll('a.js-entrades').forEach(function (a) {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.querySelector('.js-entrades-text').textContent = a.dataset.venda;
  });
  // widget d'Entradium a la secció d'entrades
  var properament = document.getElementById('entrades-properament');
  if (properament) properament.hidden = true;
  var widget = document.getElementById('entrades-widget');
  if (widget) {
    widget.innerHTML = '<a href="https://widget.tribufest.com/events/' + ENTRADIUM_EVENT + '" class="cro-widget">ENTRADES TRIBUFEST 2027</a>';
    var s = document.createElement('script');
    s.src = 'https://core.entradium.com/widget_import_all.js';
    document.body.appendChild(s);
  }
}
