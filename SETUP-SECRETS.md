# 🔧 CONFIGURACIÓN DE DEPLOYMENT AUTOMÁTICO

## ⚠️ PROBLEMA ACTUAL: Pipeline de CI/CD Requiere Configuración

El deployment automático está **temporalmente deshabilitado** hasta que configures los secrets de GitHub.

### � Error Actual
```
Error: Input required and not supplied: vercel-token
```

### 📋 Solución: Configurar GitHub Secrets

#### Paso 1: Obtener VERCEL_TOKEN
1. Ve a: https://vercel.com/account/tokens
2. Clickea "Create Token"
3. Nombre: `GitHub Actions`
4. Scope: Tu cuenta personal
5. **Copia el token generado** (solo se muestra una vez)

#### Paso 2: Configurar Secrets en GitHub
1. Ve a: https://github.com/ztevenx100/astro-react_fact-hub/settings/secrets/actions
2. Clickea "New repository secret" para cada uno:

| Secret Name | Value | Descripción |
|-------------|-------|-------------|
| `VERCEL_TOKEN` | [El token del Paso 1] | Token de autenticación |
| `VERCEL_ORG_ID` | `team_6vx3gci0oNIsfPUosG7L4aqr` | ID de tu organización |
| `VERCEL_PROJECT_ID` | `prj_y0sxZwBx9DVBA83GVRHGfkNyC1Xq` | ID del proyecto |

#### Paso 3: Activar Deployment Automático
Después de configurar los secrets, edita estos archivos:

**`.github/workflows/ci-cd.yml`**
- Línea 47: Cambia `if: github.ref == 'refs/heads/develop' && false` por `&& true`
- Línea 74: Cambia `if: github.ref == 'refs/heads/main' && false` por `&& true`

### 🚦 Alternativa: Deployment Manual

Mientras configuras los secrets automáticos, puedes deployar manualmente:

1. Ve a: https://github.com/ztevenx100/astro-react_fact-hub/actions
2. Selecciona "🔧 Manual Deployment"
3. Clickea "Run workflow"
4. Selecciona environment: `staging` o `production`

### 📊 Estado Post-Configuración

Una vez configurados los secrets:

#### Staging (rama develop)
```bash
git push origin develop
```
- ✅ Tests automáticos
- ✅ Build optimizado
- ✅ Deploy a staging environment
- ✅ URL preview disponible

#### Production (rama main)
```bash
git push origin main
```
- ✅ Tests automáticos
- ✅ Build optimizado
- ✅ Deploy a producción
- ✅ Health check automático
- ✅ URL live: https://fact-hub.vercel.app

## 🎯 Checklist de Configuración

- [ ] VERCEL_TOKEN configurado en GitHub
- [ ] VERCEL_ORG_ID configurado en GitHub
- [ ] VERCEL_PROJECT_ID configurado en GitHub
- [ ] Activado deployment automático en workflows
- [ ] Probado push a develop (staging)
- [ ] Probado push a main (production)

## � Troubleshooting

### "Input required and not supplied: vercel-token"
✅ **Solución**: Configura `VERCEL_TOKEN` en GitHub secrets

### "Project not found"
✅ **Solución**: Verifica `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID`

### "Deployment failed"
✅ **Solución**: Revisa logs en Actions tab del repositorio

## 🚀 Resultado Final

Pipeline completamente automatizado:
- **Develop**: Preview deployments para testing
- **Main**: Production deployments con health checks
- **Manual**: Fallback para deployments inmediatos

**🎉 Una vez configurado, tendrás deployment automático en cada push!**
