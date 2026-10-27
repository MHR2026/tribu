# TribuFest — web

Web de **TribuFest**, festival de música per a famílies a Felanitx (https://www.tribufest.com).

La carpeta `web/` és la web tal com es publica al hosting: HTML estàtic (plantilla Bootstrap), sense base de dades.

| Què | On |
| --- | --- |
| Portada (edició actual) | `web/index.html` |
| Contacte | `web/contacto.html` |
| Edicions anteriors | `web/festival2023/`, `web/festival2024/`, `web/festival2025/` |
| Estils, scripts i imatges | `web/assets/` |
| Programa i autorització de menors (PDF) | `web/*.pdf` |
| Entrades | Entradium (enllaços i widget a `web/index.html`) |

## Publicació

`.github/workflows/deploy.yml` puja `web/` al servidor per SFTP a cada canvi de `main`.
Necessita els secrets `SFTP_HOST`, `SFTP_USER`, `SFTP_PASSWORD` i `SFTP_PATH`
(Settings → Secrets and variables → Actions). Sense ells no publica res.

## Edició 2027

- Portada: dissabte 29 de maig de 2027, cinquena edició, compte enrere fins a les 11:00 d'aquell dia.
- L'edició 2026 està arxivada a `web/festival2026/` (amb els seus propis `assets`).
- **Entrades:** quan l'esdeveniment estigui creat a Entradium, posa el seu identificador a
  `web/assets/js/entrades.js` (`ENTRADIUM_EVENT`). Els botons passen de «Entrades properament»
  a l'enllaç de compra i apareix el widget d'Entradium a la secció d'entrades.
