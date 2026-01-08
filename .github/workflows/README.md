# GitHub Workflows

## CI/CD Workflow

Para agregar un workflow de CI/CD, necesitarás un Personal Access Token con el scope `workflow`.

### Opción 1: Agregar scope `workflow` al token

1. Ir a GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Editar tu token o crear uno nuevo
3. Seleccionar el scope `workflow`
4. Usar el token actualizado para hacer push

### Opción 2: Usar SSH en lugar de HTTPS

```bash
# Cambiar remote a SSH
git remote set-url origin git@github.com:USERNAME/REPO_NAME.git
```

### Opción 3: Agregar workflow después del primer push

Una vez que el repositorio esté creado, puedes agregar el workflow directamente desde GitHub o hacer otro push con el token con el scope correcto.

