# Contributing to Penty Portfolio

## Branching Strategy

We use a Git Flow-inspired workflow to maintain code quality and enable collaboration.

### Branch Structure

- **`master`** - Production-ready code. Only receives merges from `develop` or hotfix branches.
- **`develop`** - Integration branch where features are merged before going to production.
- **`feature/*`** - Feature branches for new functionality (e.g., `feature/contact-form`, `feature/blog-system`)
- **`bugfix/*`** - Bug fix branches (e.g., `bugfix/navigation-mobile`)
- **`hotfix/*`** - Emergency fixes for production (e.g., `hotfix/security-patch`)

### Workflow

1. **Starting new work:**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Working on your feature:**

   ```bash
   # Make your changes
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

3. **Creating a Pull Request:**

   - Create PR from your feature branch to `develop`
   - Request code review
   - Ensure all checks pass
   - Merge after approval

4. **Releasing to production:**
   - Create PR from `develop` to `master`
   - Deploy from `master` branch

### Commit Message Convention

We follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Code Review Guidelines

- All code must be reviewed before merging
- PRs should be focused and small when possible
- Include tests for new functionality
- Update documentation as needed
- Ensure the build passes

### Setting Up Your Development Environment

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Create your feature branch from `develop`
4. Start development server: `pnpm dev`

### Branch Protection Rules (Recommended)

For repository administrators, set up these branch protection rules:

**For `master` branch:**

- Require pull request reviews before merging
- Require status checks to pass
- Require branches to be up to date before merging
- Include administrators in these restrictions

**For `develop` branch:**

- Require pull request reviews before merging
- Require status checks to pass
