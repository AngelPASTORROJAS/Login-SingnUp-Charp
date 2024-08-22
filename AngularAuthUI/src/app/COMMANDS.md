Voici les commandes Angular CLI pour créer chaque fichier de la structure donnée, en utilisant l'option `--skip-tests` pour omettre la création des fichiers de test. Notez que certains fichiers, comme les fichiers de configuration et les interfaces, devront être créés manuellement.

```bash
# Guards //CanActivate
ng g guard core/guards/auth --skip-tests

# Interceptors
ng g interceptor core/interceptors/auth --skip-tests

# Services
ng g service core/services/api --skip-tests
ng g service core/services/auth --skip-tests

# Feature components
ng g c features/auth/components/login --skip-tests
ng g c features/auth/components/signup --skip-tests

ng g c features/dashboard/components/dashboard-home --skip-tests
ng g c features/profile/components/profile-edit --skip-tests

# Shared components
ng g c shared/components/header --skip-tests
ng g c shared/components/footer --skip-tests
ng g c shared/components/sidebar --skip-tests

# Layout components
ng g c layout/main-layout --skip-tests
ng g c layout/auth-layout --skip-tests

# Models and interfaces
ng g interface models/user --type=model
ng g interface interfaces/auth-credentials --type=interface
ng g interface interfaces/auth-response --type=interface

# Environment files
ng g environments

# App component (if not already created)
ng g c app --skip-tests
```

Pour les fichiers qui ne peuvent pas être générés directement par Angular CLI, vous devrez les créer manuellement :

```bash

# Configuration files (if not already created)
touch src/app/app.config.ts
touch src/app/app.routes.ts

```