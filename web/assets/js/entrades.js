// Entrades TribuFest 2027
//
// Quan l'esdeveniment estigui creat a Entradium, posa aquí el seu identificador
// (la part final de l'enllaç: https://entradium.com/events/IDENTIFICADOR).
// Per exemple: const ENTRADIUM_EVENT = 'tribufest-2027-felanitx';
// Mentre estigui buit, els botons diuen «Entrades properament». Amb l'identificador, porten al widget de compra de la portada.
const ENTRADIUM_EVENT = 'tribufest-2026-felanitx-parc-municipal-de-sa-torre'; // és l'esdeveniment de 2027 (Entradium va mantenir l'adreça de 2026)

if (ENTRADIUM_EVENT) {
  const url = 'https://entradium.com/events/' + ENTRADIUM_EVENT;
  const widget = document.getElementById('entrades-widget');
  // Els botons porten al widget de compra dins la web (a la portada); des d'altres pàgines, a la portada.
  document.querySelectorAll('a.js-entrades').forEach(function (a) {
    a.href = widget ? '#pricing' : 'index.html#pricing';
    a.querySelector('.js-entrades-text').textContent = a.dataset.venda;
  });
  const properament = document.getElementById('entrades-properament');
  if (properament) properament.hidden = true;
  // Widget oficial d'Entradium
  if (widget) {
    widget.innerHTML = '<a href="https://widget.tribufest.com/events/' + ENTRADIUM_EVENT + '" class="cro-widget">Comprar entradas para Tribufest 2027</a>' +
      '<p class="note" style="margin-top:12px">També pots comprar-les directament a <a href="' + url + '" target="_blank" rel="noopener">Entradium ↗</a></p>';
    const s = document.createElement('script');
    s.src = 'https://core.entradium.com/widget_import_all.js';
    document.body.appendChild(s);
  }
}
