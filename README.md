# 🎯 Fact Hub - Centro de Datos Interactivos

Una aplicación web moderna construida con **Astro**, **React** y **TypeScript** que ofrece datos curiosos y frases en múltiples idiomas con una experiencia de usuario optimizada.

## 🌟 Características Principales

### 📚 Contenido Diverso
- **Facts por Categoría**: Ciencia, Historia, Tecnología, Naturaleza, Espacio
- **Frases Multiidioma**: Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Chino, Ruso, Latín
- **Búsqueda Inteligente**: Filtra contenido en tiempo real
- **Sistema de Favoritos**: Guarda tus datos favoritos localmente

### 🎨 Experiencia de Usuario
- **Modo Oscuro/Claro**: Tema adaptable con persistencia
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Interfaz Intuitiva**: 5 pestañas principales con navegación fluida

### ⚡ Tecnología Moderna
- **Astro v5.13.4**: Static Site Generation optimizado
- **React 19**: Componentes interactivos
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Diseño utilitario y responsivo
- **Vercel Serverless**: API Functions escalables

## 🚀 Deployment y CI/CD

### 📊 Estado del Pipeline
- ✅ **Tests Automáticos**: Validación de código en cada push
- ✅ **Build Optimizado**: Compilación con Astro y Vite
- ✅ **Deployment Automático**: Staging en `develop`, Production en `main`
- ✅ **Health Checks**: Monitoreo post-deployment

### 🔧 Configuración Requerida
⚠️ **Para deployment automático**: Ver [SETUP-SECRETS.md](./SETUP-SECRETS.md)

## 🏗️ Arquitectura del Proyecto

```
astro-react_fact-hub/
├── 📁 frontend/src/          # Código fuente de la aplicación
│   ├── 📁 components/        # Componentes React reutilizables
│   │   ├── MainHub.tsx      # Hub principal con 5 pestañas
│   │   ├── SearchBar.tsx    # Barra de búsqueda
│   │   ├── FavoriteButton.tsx # Botón de favoritos
│   │   └── ThemeToggle.tsx  # Selector de tema
│   ├── 📁 contexts/         # Contextos React
│   │   ├── ThemeContext.tsx # Gestión de tema oscuro/claro
│   │   └── FavoritesContext.tsx # Sistema de favoritos
│   ├── 📁 pages/           # Páginas Astro
│   └── 📁 services/        # Servicios API
├── 📁 api/                 # Funciones serverless
│   ├── health.js          # Health check
│   ├── fact/[category].js # Facts por categoría
│   ├── facts/all.js       # Todas las categorías
│   ├── language.js        # Frase aleatoria
│   ├── language/[language].js # Frase por idioma
│   └── languages/all.js   # Lista de idiomas
├── 📁 .github/workflows/  # CI/CD Pipelines
├── 🔧 vercel.json         # Configuración de deployment
└── 📚 Documentación
```

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Git

### Instalación y Ejecución

```bash
# Clonar repositorio
git clone https://github.com/ztevenx100/astro-react_fact-hub.git
cd astro-react_fact-hub

# Instalar dependencias
npm install

# Desarrollo local
npm run dev
# 🌐 http://localhost:4321

# Desarrollo con funciones serverless
npm run dev:vercel
# 🌐 http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo Astro
npm run dev:vercel   # Servidor Vercel con API functions
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linting del código
npm run test         # Ejecutar tests
```

## 📦 API Endpoints

### Health Check
```
GET /api/health
```
Respuesta: Estado del sistema y timestamp

### Facts
```
GET /api/fact/[category]     # Fact aleatorio por categoría
GET /api/facts/all           # Todas las categorías disponibles
```

### Languages
```
GET /api/language            # Frase aleatoria en idioma aleatorio
GET /api/language/[language] # Frase en idioma específico
GET /api/languages/all       # Lista de idiomas disponibles
```

## 🔄 Flujo de Desarrollo

### Ramas Principales
- `main`: Producción - deployment automático
- `develop`: Staging - preview deployments
- `feature/*`: Características nuevas

### Workflow
1. **Feature Development**: `feature/nueva-caracteristica`
2. **Pull Request**: Hacia `develop`
3. **Testing**: CI/CD automático en staging
4. **Production**: Merge a `main`

## 📊 Estructura de Datos

### Categorías de Facts
- `ciencia` - Datos científicos fascinantes
- `historia` - Eventos históricos curiosos
- `tecnologia` - Avances tecnológicos
- `naturaleza` - Maravillas naturales
- `espacio` - Misterios del universo

### Idiomas Soportados
- `espanol`, `ingles`, `frances`, `aleman`, `italiano`
- `portugues`, `japones`, `chino`, `ruso`, `latin`

## 🎨 Temas y Diseño

### Colores Principales
- **Tema Claro**: Tonos azules y grises suaves
- **Tema Oscuro**: Paleta oscura con acentos azules
- **Animaciones**: Fade-in, slide-up, bounce-gentle

### Responsive Design
- **Mobile**: Layout optimizado para pantallas pequeñas
- **Tablet**: Navegación adaptativa
- **Desktop**: Experiencia completa con todas las características

## 🔒 Seguridad y Rendimiento

### Características de Seguridad
- CORS configurado correctamente
- Validación de inputs en API functions
- Sanitización de datos

### Optimizaciones
- **Build Size**: Chunks optimizados con Vite
- **Images**: Lazy loading automático
- **API**: Respuestas cacheables
- **CSS**: Purging automático con Tailwind

## 📈 Roadmap Futuro

### Próximas Características
- [ ] Base de datos externa (MongoDB/Supabase)
- [ ] Sistema de usuarios y autenticación
- [ ] API para contribuciones de usuarios
- [ ] Modo offline con Service Workers
- [ ] Internacionalización completa (i18n)
- [ ] Analytics de uso
- [ ] Tests E2E con Playwright

## 🤝 Contribuir

### Proceso de Contribución
1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-caracteristica`
3. Commit cambios: `git commit -m 'Agregar nueva característica'`
4. Push a la rama: `git push origin feature/nueva-caracteristica`
5. Abrir Pull Request

### Estándares de Código
- TypeScript estricto
- Componentes funcionales con hooks
- Naming conventions consistentes
- Documentación en código

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver [LICENSE](LICENSE) para más detalles.

## 🆘 Soporte

### Recursos
- [Documentación de Astro](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)

### Contacto
- **Repositorio**: [GitHub Issues](https://github.com/ztevenx100/astro-react_fact-hub/issues)
- **Email**: ztevenx100@gmail.com

---

**Hecho con ❤️ usando Astro, React y TypeScript**
