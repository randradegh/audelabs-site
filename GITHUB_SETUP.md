# Guía para Subir el Proyecto a GitHub

## 📋 Pasos para subir a GitHub

### 1. Inicializar Git (si no está inicializado)

```bash
# Ir al directorio del proyecto
cd /run/media/randrade/baul/respaldos/proyectos/audelabs/dev/audelabas_site

# Inicializar repositorio Git
git init

# Configurar usuario (si es necesario)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### 2. Agregar todos los archivos

```bash
# Verificar qué archivos se van a agregar
git status

# Agregar todos los archivos
git add .

# Verificar qué se agregó
git status
```

### 3. Hacer el primer commit

```bash
git commit -m "feat: proyecto inicial de Audelabs - sitio web multi-página"
```

### 4. Crear repositorio en GitHub

1. Ir a [GitHub](https://github.com)
2. Click en "New repository"
3. Nombre sugerido: `audelabs-site` o `audelabas_site`
4. Descripción: "Sitio web de Audelabs - Consultoría Digital Integral"
5. **NO** inicializar con README (ya tenemos uno)
6. Click en "Create repository"

### 5. Conectar repositorio local con GitHub

```bash
# Reemplaza USERNAME y REPO_NAME con tus datos
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Verificar que se agregó correctamente
git remote -v
```

### 6. Subir el código

```bash
# Primera vez (crear rama main)
git branch -M main
git push -u origin main

# O si tu rama por defecto es master
git branch -M master
git push -u origin master
```

## 🔐 Autenticación en GitHub

### Opción 1: Personal Access Token (Recomendado)

1. Ir a GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generar nuevo token con permisos `repo`
3. Usar el token como contraseña al hacer push

### Opción 2: SSH Keys

```bash
# Generar clave SSH (si no tienes una)
ssh-keygen -t ed25519 -C "tu@email.com"

# Agregar clave SSH a GitHub
# Copiar el contenido de ~/.ssh/id_ed25519.pub
# Ir a GitHub Settings > SSH and GPG keys > New SSH key

# Cambiar remote a SSH
git remote set-url origin git@github.com:USERNAME/REPO_NAME.git
```

## 📝 Comandos Git útiles

```bash
# Ver estado
git status

# Ver historial
git log --oneline

# Agregar cambios específicos
git add archivo.tsx

# Hacer commit con mensaje
git commit -m "tipo: descripción del cambio"

# Ver cambios
git diff

# Crear nueva rama
git checkout -b feature/nombre-feature

# Cambiar de rama
git checkout main

# Merge de rama
git merge feature/nombre-feature
```

## 🚀 Próximos pasos después de subir

1. Configurar GitHub Pages (si se desea)
2. Configurar GitHub Actions para CI/CD (ver sección "Agregar Workflow de CI/CD" abajo)
3. Agregar badges al README
4. Configurar branch protection rules
5. Agregar colaboradores si es necesario

## 🔧 Agregar Workflow de CI/CD

**Nota:** Cualquier archivo en `.github/workflows/` requiere un token con scope `workflow` o usar SSH.

### Opción 1: Agregar scope `workflow` al token

1. Ir a GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Editar tu token o crear uno nuevo
3. Seleccionar el scope `workflow`
4. Usar el token actualizado

### Opción 2: Usar SSH

```bash
# Cambiar remote a SSH
git remote set-url origin git@github.com:USERNAME/REPO_NAME.git

# Luego crear la carpeta y el workflow
mkdir -p .github/workflows
# Crear el archivo ci.yml con el contenido del workflow
```

### Opción 3: Agregar desde GitHub UI

Después del primer push, puedes crear el workflow directamente desde la interfaz de GitHub.

### Ejemplo de workflow `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, master, develop ]
  pull_request:
    branches: [ main, master, develop ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - name: Install dependencies
      run: npm ci
    - name: Run linter
      run: npm run lint || true
    - name: Build project
      run: npm run build
```

## ⚠️ Notas importantes

- **NO** subir archivos sensibles (.env, keys, etc.)
- El `.gitignore` ya está configurado para excluir archivos innecesarios
- Las imágenes grandes se suben, considera usar Git LFS si son muy pesadas
- El PDF "Audelabs Terra Folleto.pdf" se subirá también (considerar si es necesario)

## 🔍 Verificar antes de subir

```bash
# Ver qué archivos se van a subir
git ls-files

# Ver tamaño del repositorio
du -sh .

# Ver archivos grandes (> 1MB)
find . -type f -size +1M -not -path "./node_modules/*" -not -path "./.next/*"
```

