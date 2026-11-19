# Hola Mundo en ReactJS con Vite

Proyecto de ejemplo de la asignatura **Sistemas de Información Ubicuos** (Grado en Ingeniería Informática, Talavera de la Reina, UCLM). Muestra el flujo completo: crear una SPA con React + Vite, programar un componente `Saludo` y publicarla en **GitHub Pages** con GitHub Actions.

**Demo:** https://ivan-gdiaz.github.io/holamundo-react-vite/

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción en /dist
npm run preview    # previsualizar la build localmente
```

## Estructura

```
holamundo-react-vite/
├── .github/workflows/deploy.yml   # build + despliegue en GitHub Pages
├── public/                        # recursos estáticos copiados tal cual
├── src/
│   ├── assets/                    # imágenes procesadas por Vite
│   ├── components/Saludo.jsx      # componente "¡Hola Mundo!"
│   ├── App.jsx                    # componente principal
│   ├── App.css / index.css        # estilos
│   └── main.jsx                   # punto de entrada: monta <App /> en #root
├── index.html                     # en la raíz (no en /public)
├── package.json
└── vite.config.js                 # base: '/holamundo-react-vite/'
```

## Despliegue

1. `vite.config.js` define `base: '/holamundo-react-vite/'` (nombre del repositorio).
2. En **Settings > Pages > Build and deployment**, *Source*: **GitHub Actions**.
3. Cada `git push` a `main` ejecuta el workflow: `npm ci` → `npm run build` → publica `dist/`.
