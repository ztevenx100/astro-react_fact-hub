# 🚀 Configuración de Deployment en Vercel

## 📋 Pre-requisitos

Para que el CI/CD funcione correctamente, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

### 🔐 GitHub Secrets Requeridos

1. **VERCEL_TOKEN**
2. **VERCEL_ORG_ID** 
3. **VERCEL_PROJECT_ID**

## 🛠️ Cómo obtener los valores

### 1. Obtener VERCEL_TOKEN

1. Ve a [Vercel Account Settings](https://vercel.com/account/tokens)
2. Crea un nuevo token con el nombre "GitHub Actions"
3. Copia el token generado

### 2. Obtener VERCEL_ORG_ID y VERCEL_PROJECT_ID

Ejecuta este comando en tu terminal local (después de hacer `vercel login`):

```bash
cd d:\myWebappgit\astro-react_fact-hub
vercel link
```

Esto creará un archivo `.vercel/project.json` con los IDs necesarios:

```json
{
  "orgId": "tu-org-id-aqui",
  "projectId": "tu-project-id-aqui"
}
```

### 3. Configurar secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** → **Secrets and variables** → **Actions**
3. Crea los siguientes secrets:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | El token que generaste en Vercel |
| `VERCEL_ORG_ID` | El `orgId` del archivo `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | El `projectId` del archivo `.vercel/project.json` |
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
