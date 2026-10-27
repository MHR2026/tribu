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
