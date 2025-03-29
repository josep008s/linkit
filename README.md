# LinkIt

LinkIt es una aplicación web moderna estilo Linktree construida con Next.js 15 y React 19, que permite mostrar enlaces personales y profesionales en una interfaz atractiva y responsiva.

## Características

- Interfaz moderna con animaciones fluidas usando Framer Motion
- Diseño completamente responsivo
- Tema oscuro por defecto con gradientes elegantes
- Optimizado para SEO y rendimiento
- Componentes reutilizables

## Tecnologías utilizadas

- Next.js 15.2.4
- React 19.0.0
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

## Requisitos previos

- Node.js 18.0.0 o superior
- npm, yarn o pnpm

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/josep008s/linkit.git
cd linkit

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

## Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Construcción para producción

```bash
npm run build
npm start
```

## Personalización

Puedes personalizar la aplicación editando los siguientes archivos:

- `src/app/page.tsx` - Contenido principal y estructura de los enlaces
- `src/app/components/ProfileHeader.tsx` - Información del perfil
- `src/app/components/Footer.tsx` - Enlaces de redes sociales
- `src/app/globals.css` - Estilos globales y variables CSS

## Licencia

MIT