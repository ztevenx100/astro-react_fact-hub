# 🚀 GitHub Actions Workflows

## 📊 Estado Actual de los Workflows

### ✅ Workflows Activos
- **`build-validation.yml`**: Validación de build en todos los pushes
- **`ci-cd.yml`**: Pipeline de CI que valida tests y build (sin deployment)

### ❌ Workflows Deshabilitados (Requieren Secrets)
- **`preview.yml`**: Preview deployments en PRs
- **`manual-deploy.yml`**: Deployment manual

## ⚠️ Por Qué Están Deshabilitados

Los workflows de deployment están deshabilitados porque requieren secrets de GitHub que no están configurados:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` 
- `VERCEL_PROJECT_ID`

**Error que causaban**:
```
Error: Input required and not supplied: vercel-token
```

## 🔧 Cómo Habilitar Deployment

### Paso 1: Configurar Secrets
Ver instrucciones detalladas en: [SETUP-SECRETS.md](../SETUP-SECRETS.md)

### Paso 2: Activar Workflows
Una vez configurados los secrets:

1. **Manual Deployment**: Ya estará disponible automáticamente
2. **Preview Deployment**: Cambiar `&& false` por `&& true` en línea 12
3. **Auto Deployment**: Crear nuevo workflow o modificar existente

## 🚦 Estado de Cada Workflow

### 📁 build-validation.yml
- **Estado**: ✅ Activo
- **Propósito**: Valida que el código compile correctamente
- **Triggers**: Push a cualquier rama, PRs
- **Secrets**: No requiere

### 📁 ci-cd.yml  
- **Estado**: ✅ Activo (Solo CI, no CD)
- **Propósito**: Tests, build, validación
- **Triggers**: Push a main/develop, PRs
- **Secrets**: No requiere

### 📁 preview.yml
- **Estado**: ❌ Deshabilitado
- **Propósito**: Preview deployments en PRs
- **Triggers**: PRs (cuando esté habilitado)
- **Secrets**: Requiere Vercel secrets

### 📁 manual-deploy.yml
- **Estado**: ❌ Deshabilitado
- **Propósito**: Deployment manual por demanda
- **Triggers**: workflow_dispatch
- **Secrets**: Requiere Vercel secrets

## 🔮 Próximos Pasos

1. **Configurar secrets** siguiendo SETUP-SECRETS.md
2. **Probar manual deployment** primero
3. **Habilitar preview deployments** para PRs
4. **Configurar auto-deployment** para ramas principales

## 📋 Checklist de Habilitación

- [ ] VERCEL_TOKEN configurado
- [ ] VERCEL_ORG_ID configurado  
- [ ] VERCEL_PROJECT_ID configurado
- [ ] Manual deployment probado
- [ ] Preview deployment habilitado
- [ ] Auto deployment configurado

---

**Una vez completado el setup, tendrás deployment automático completo! 🚀**
