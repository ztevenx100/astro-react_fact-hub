# 👨‍💻 GUÍA DE DESARROLLO

## 🎯 Sobre este Documento

Esta guía está dirigida a desarrolladores que quieran contribuir o trabajar en el proyecto Fact Hub.

## 🛠️ Setup de Desarrollo

### Prerrequisitos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.40.0
VS Code (recomendado)
```

### Clonar y Configurar
```bash
# Clonar el repositorio
git clone https://github.com/ztevenx100/astro-react_fact-hub.git
cd astro-react_fact-hub

# Instalar dependencias
npm install

# Configurar Git hooks (opcional)
npx husky install
```

### Comandos de Desarrollo
```bash
# Servidor de desarrollo (solo frontend)
npm run dev
# 🌐 http://localhost:4321

# Servidor con API functions (recomendado)
npm run dev:vercel
# 🌐 http://localhost:3000

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Tests
npm run test
```

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
astro-react_fact-hub/
├── 📁 .github/
│   └── workflows/          # GitHub Actions workflows
├── 📁 .vercel/            # Configuración de Vercel (auto-generado)
├── 📁 api/                # Serverless Functions
│   ├── health.js          # Health check endpoint
│   ├── fact/[category].js # Dynamic fact routes
│   └── ...                # Otros endpoints
├── 📁 frontend/src/       # Código fuente principal
│   ├── 📁 components/     # Componentes React
│   ├── 📁 contexts/       # React Context providers
│   ├── 📁 pages/         # Páginas Astro
│   ├── 📁 services/      # Servicios API
│   └── 📁 styles/        # Estilos globales
├── 📁 dist/              # Build output (generado)
├── 🔧 astro.config.mjs   # Configuración Astro
├── 🔧 package.json       # Dependencias y scripts
├── 🔧 tailwind.config.mjs # Configuración Tailwind
└── 🔧 vercel.json        # Configuración deployment
```

### Stack Tecnológico

#### Frontend
- **Astro 5.13.4**: Meta-framework para SSG/SSR
- **React 19**: Biblioteca de UI
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitario

#### Backend
- **Vercel Functions**: Serverless functions en Node.js
- **CommonJS**: Módulos para compatibilidad con Vercel

#### Tooling
- **Vite**: Build tool y dev server
- **GitHub Actions**: CI/CD pipeline
- **Vercel**: Hosting y deployment platform

## 🧩 Componentes y Patrones

### Estructura de Componentes
```tsx
// Ejemplo: MainHub.tsx
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useFavorites } from '../contexts/FavoritesContext';

interface MainHubProps {
  // Definir props aquí
}

export function MainHub({ }: MainHubProps) {
  const { theme } = useTheme();
  const { favorites } = useFavorites();
  
  return (
    <div className={`hub-container ${theme === 'dark' ? 'dark' : ''}`}>
      {/* JSX aquí */}
    </div>
  );
}
```

### Context Providers
```tsx
// Ejemplo: ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Servicios API
```typescript
// Ejemplo: api.ts
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-vercel-domain.vercel.app/api'
  : '/api';

export async function getFact(category: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/fact/${category}`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

### Serverless Functions
```javascript
// Ejemplo: api/health.js
module.exports = (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
};
```

## 🎨 Guías de Estilo

### TypeScript
- Usar `interface` para definir types
- Tipado explícito en funciones
- Evitar `any`, usar `unknown` si es necesario
- Props opcionales con `?`

### React
- Componentes funcionales únicamente
- Hooks para manejo de estado
- Custom hooks para lógica reutilizable
- Props destructuring en parámetros

### CSS/Tailwind
- Utility classes sobre CSS custom
- Responsive design mobile-first
- Consistencia en spacing (4, 8, 12, 16px)
- Variables CSS para temas

### Naming Conventions
```typescript
// Componentes: PascalCase
export function MainHub() {}

// Funciones: camelCase
function handleClick() {}

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = '';

// Files: kebab-case
// main-hub.tsx, api-service.ts
```

## 🔄 Flujo de Git

### Branch Naming
```
feature/nueva-caracteristica
bugfix/corregir-error
hotfix/fix-critico
refactor/mejorar-codigo
```

### Commit Messages
```
🎉 feat: agregar nueva característica
🐛 fix: corregir bug específico
🔧 config: actualizar configuración
📚 docs: mejorar documentación
🎨 style: cambios de formato
♻️ refactor: refactorizar código
✅ test: agregar tests
🚀 deploy: cambios de deployment
```

### Proceso de Desarrollo
1. **Crear branch**: `git checkout -b feature/nueva-feature`
2. **Desarrollar**: Hacer cambios y commits
3. **Test local**: `npm run build` y `npm run dev:vercel`
4. **Push**: `git push origin feature/nueva-feature`
5. **PR**: Crear Pull Request a `develop`
6. **Review**: Code review y approval
7. **Merge**: Merge a `develop` → auto-deploy staging
8. **Production**: PR de `develop` a `main` → auto-deploy production

## 🧪 Testing

### Estructura de Tests (Futuro)
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
└── e2e/           # End-to-end tests
```

### Herramientas Recomendadas
- **Jest**: Unit testing
- **React Testing Library**: Component testing
- **Playwright**: E2E testing
- **MSW**: API mocking

## 🚀 Deployment

### Environments
- **Development**: `npm run dev` - Local development
- **Staging**: Auto-deploy en push a `develop`
- **Production**: Auto-deploy en push a `main`

### Configuración Requerida
Ver [SETUP-SECRETS.md](./SETUP-SECRETS.md) para configurar deployment automático.

## 🐛 Debugging

### Common Issues
1. **Build fails**: Verificar TypeScript errors
2. **API not working**: Verificar CORS headers
3. **Styles broken**: Revisar Tailwind classes
4. **Deployment fails**: Verificar secrets de GitHub

### Debug Tools
- **React DevTools**: Browser extension
- **Network tab**: Para debugging API calls
- **Vercel CLI**: `vercel logs` para logs de functions
- **VS Code**: Breakpoints en dev mode

## 📊 Performance

### Best Practices
- Usar `React.memo` para componentes pesados
- Lazy loading para rutas no críticas
- Optimizar imágenes con Astro Image
- Minimizar bundle size con code splitting

### Métricas a Monitorear
- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Size**: < 200kb gzipped
- **API Response Time**: < 500ms
- **Build Time**: < 10 segundos

## 🤝 Contribuir

### Antes de Contribuir
1. Leer esta documentación
2. Revisar issues abiertos
3. Configurar ambiente de desarrollo
4. Familiarizarse con el código base

### Pull Request Checklist
- [ ] Branch actualizado con `develop`
- [ ] Tests pasan localmente
- [ ] Build successful
- [ ] Documentación actualizada
- [ ] Commit messages claros
- [ ] Sin console.logs innecesarios

---

**Happy coding! 🚀**
