# 🚀 GUÍA COMPLETA DE DEPLOYMENT

## 📋 Resumen Ejecutivo

Este proyecto utiliza **Vercel** para hosting y **GitHub Actions** para CI/CD automatizado. El deployment está configurado para dos ambientes:

- **Staging**: Auto-deploy en push a `develop`
- **Production**: Auto-deploy en push a `main`

## ⚠️ Estado Actual del Deployment

**Pipeline Status**: ❌ Temporalmente deshabilitado  
**Razón**: Faltan secrets de GitHub para autenticación con Vercel  
**Solución**: Seguir los pasos de configuración a continuación

## � Configuración Paso a Paso

### Paso 1: Obtener Credenciales de Vercel

#### 1.1 Vercel Token
1. Ve a: https://vercel.com/account/tokens
2. Clickea "Create Token"
3. Nombre: `GitHub Actions CI/CD`
4. Scope: Full Account
5. **Guarda el token** (solo se muestra una vez)

#### 1.2 Project IDs (Ya disponibles)
Los IDs del proyecto ya están configurados en `.vercel/project.json`:
```json
{
  "orgId": "team_6vx3gci0oNIsfPUosG7L4aqr",
  "projectId": "prj_y0sxZwBx9DVBA83GVRHGfkNyC1Xq"
}
```

### Paso 2: Configurar GitHub Secrets

1. **Ir al repositorio**: https://github.com/ztevenx100/astro-react_fact-hub
2. **Navegar a Settings** → **Secrets and variables** → **Actions**
3. **Crear estos 3 secrets**:

| Secret Name | Value | Fuente |
|-------------|-------|--------|
| `VERCEL_TOKEN` | [Token del Paso 1.1] | Vercel Account |
| `VERCEL_ORG_ID` | `team_6vx3gci0oNIsfPUosG7L4aqr` | .vercel/project.json |
| `VERCEL_PROJECT_ID` | `prj_y0sxZwBx9DVBA83GVRHGfkNyC1Xq` | .vercel/project.json |

### Paso 3: Activar Deployment Automático

Editar `.github/workflows/ci-cd.yml`:

```yaml
# Línea 47: Cambiar de
if: github.ref == 'refs/heads/develop' && false
# A:
if: github.ref == 'refs/heads/develop' && true

# Línea 74: Cambiar de  
if: github.ref == 'refs/heads/main' && false
# A:
if: github.ref == 'refs/heads/main' && true
```
```bash
vercel login
```

### 3. Project Setup
```bash
# From the root directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your personal account or team
# - Link to existing project? No
# - What's your project's name? fact-hub
# - In which directory is your code located? ./
# - Want to override the settings? Yes
# - Build Command: cd frontend && npm run build
# - Output Directory: frontend/dist
# - Development Command: cd frontend && npm run dev
```

### 4. Environment Variables Setup

Add these environment variables in your Vercel dashboard:

#### Production Environment:
- `NODE_ENV` = `production`
- `VERCEL_ENV` = `production`
- `API_BASE_URL` = `https://your-domain.vercel.app/api`
- `FRONTEND_URL` = `https://your-domain.vercel.app`
- `CORS_ORIGIN` = `https://your-domain.vercel.app`

#### Preview/Staging Environment:
- `NODE_ENV` = `staging`
- `VERCEL_ENV` = `preview`
- `API_BASE_URL` = `https://your-domain-staging.vercel.app/api`
- `FRONTEND_URL` = `https://your-domain-staging.vercel.app`
- `CORS_ORIGIN` = `https://your-domain-staging.vercel.app`

### 5. GitHub Integration

1. Go to your Vercel dashboard
2. Connect your GitHub repository
3. Configure auto-deployments:
   - Production: `main` branch
   - Preview: `develop` and `staging` branches

### 6. GitHub Secrets

Add these secrets to your GitHub repository:
- `VERCEL_TOKEN`: Your Vercel token (from Vercel dashboard > Settings > Tokens)
- `VERCEL_ORG_ID`: Your organization ID (from .vercel/project.json after first deploy)
- `VERCEL_PROJECT_ID`: Your project ID (from .vercel/project.json after first deploy)

## 📋 Deployment Workflow

### Automatic Deployments:
- **Production**: Push to `main` branch
- **Staging**: Push to `develop` or `staging` branch
- **Preview**: Open Pull Request

### Manual Deployments:
```bash
# Production
npm run deploy:vercel

# Staging
npm run deploy:staging
```

## 🔄 Branch Strategy

```
main (production)
├── develop (staging)
│   ├── feature/new-feature
│   └── hotfix/urgent-fix
└── staging (staging mirror)
```

## 🛠️ Local Development

```bash
# Start frontend
cd frontend && npm run dev

# Start backend
cd backend && npm run dev
```

## 📊 Monitoring

- **Vercel Dashboard**: Monitor deployments, performance, and logs
- **GitHub Actions**: Check CI/CD pipeline status
- **Health Check**: https://your-domain.vercel.app/api/health

## 🚨 Troubleshooting

### Common Issues:
1. **Build fails**: Check package.json scripts and dependencies
2. **API not working**: Verify vercel.json routing configuration
3. **Environment variables**: Ensure they're set in Vercel dashboard
4. **CORS errors**: Check CORS_ORIGIN environment variable

### Debug Commands:
```bash
# Check build locally
cd frontend && npm run build

# Test backend locally
cd backend && npm start

# Verify Vercel config
vercel --debug
```
