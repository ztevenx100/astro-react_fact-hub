# 🔧 CONFIGURACIÓN REQUERIDA PARA CI/CD

## ⚠️ ACCIÓN REQUERIDA: Configurar GitHub Secrets

Para que el deployment automático funcione, necesitas configurar estos secrets en GitHub:

### 📋 Secrets a configurar:

1. **VERCEL_TOKEN**: Obtén desde https://vercel.com/account/tokens
2. **VERCEL_ORG_ID**: `team_6vx3gci0oNIsfPUosG7L4aqr`
3. **VERCEL_PROJECT_ID**: `prj_y0sxZwBx9DVBA83GVRHGfkNyC1Xq`

### 🚀 Pasos para configurar:

1. Ve a tu repositorio GitHub: https://github.com/ztevenx100/astro-react_fact-hub
2. Navega a **Settings** → **Secrets and variables** → **Actions**
3. Clickea "New repository secret" para cada uno:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | [Token que generes en Vercel] |
| `VERCEL_ORG_ID` | `team_6vx3gci0oNIsfPUosG7L4aqr` |
| `VERCEL_PROJECT_ID` | `prj_y0sxZwBx9DVBA83GVRHGfkNyC1Xq` |

### 🏗️ Después de configurar los secrets:

- ✅ Push a `develop` → Deploy automático a staging
- ✅ Push a `main` → Deploy automático a producción
- ✅ El pipeline incluye tests, build, y deployment
- ✅ Health checks automáticos post-deployment

## 🎯 Estado Actual:

- ✅ Proyecto reestructurado para Vercel serverless
- ✅ API functions creadas en `/api`
- ✅ Frontend optimizado con Astro + React
- ✅ CI/CD pipeline configurado
- ⏳ **PENDIENTE**: Configurar secrets en GitHub

## 📧 Una vez configurado:

El proyecto estará completamente automatizado y listo para production! 🚀
