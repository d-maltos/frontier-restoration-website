# Branching Strategy for Frontier Restoration Website

## Overview
This branching strategy aligns with the phased implementation approach and supports clean development, testing, and deployment workflows.

## Branch Structure

### Main Branches

#### `main` (Production)
- **Purpose**: Production-ready code only
- **Protection**: Protected branch (requires PR reviews)
- **Deployment**: Auto-deploys to production (Vercel)
- **Rule**: Only merge from `develop` or `release/*` branches

#### `develop` (Development)
- **Purpose**: Integration branch for all completed features
- **Deployment**: Optional staging environment
- **Rule**: Merge feature branches here for integration testing

### Supporting Branches

#### Feature Branches
**Naming Convention**: `feature/[phase]-[description]` or `feature/[description]`

**Examples**:
- `feature/phase1-home-hero`
- `feature/phase1-services-overview`
- `feature/phase1-contact-form`
- `feature/phase2-before-after-gallery`
- `feature/phase3-cms-integration`

**Workflow**:
1. Create from `develop`
2. Develop feature
3. Create PR to `develop`
4. After review, merge to `develop`
5. Delete branch after merge

#### Phase Branches (Optional - for organizing large phases)
**Naming Convention**: `phase/[number]-[name]`

**Examples**:
- `phase/1-mvp`
- `phase/2-trust-content`
- `phase/3-polish-automation`

**Use Case**: If you want to group multiple related features before merging to develop

#### Release Branches
**Naming Convention**: `release/v[version]` or `release/[date]`

**Examples**:
- `release/v1.0.0`
- `release/2024-01-15`

**Workflow**:
1. Create from `develop` when phase is complete
2. Final testing and bug fixes
3. Merge to `main` and tag
4. Merge back to `develop`

#### Hotfix Branches
**Naming Convention**: `hotfix/[description]`

**Examples**:
- `hotfix/contact-form-email`
- `hotfix/mobile-cta-button`

**Workflow**:
1. Create from `main`
2. Fix issue
3. Merge to `main` and `develop`
4. Tag new patch version

## Implementation Phases & Branching

### Phase 1: MVP (2-3 weeks)
**Target Branch**: `develop` (or `phase/1-mvp` if using phase branches)

**Feature Branches**:
```
feature/phase1-project-setup          # Next.js + Tailwind + TS setup
feature/phase1-home-hero              # Hero section with CTAs
feature/phase1-services-overview      # Services grid/cards
feature/phase1-emergency-page         # Emergency response page
feature/phase1-about-page             # About us page
feature/phase1-contact-form           # Contact form + email integration
feature/phase1-blog-structure         # Blog routing + static posts
feature/phase1-seo-basics             # LocalBusiness schema, meta tags
```

**Merge Strategy**: 
- Merge each feature to `develop` as completed
- When all Phase 1 features are done, create `release/v1.0.0-mvp` from `develop`
- Test release branch, then merge to `main`

### Phase 2: Trust & Content
**Target Branch**: `develop`

**Feature Branches**:
```
feature/phase2-before-after-gallery   # Gallery with lightbox
feature/phase2-testimonials           # Testimonials section
feature/phase2-companycam-integration # CompanyCam embed
feature/phase2-google-reviews         # Google Reviews widget
feature/phase2-blog-content           # Additional blog posts
```

### Phase 3: Polish & Automation
**Target Branch**: `develop`

**Feature Branches**:
```
feature/phase3-cms-integration        # Headless CMS (Sanity/Contentful)
feature/phase3-insurance-faq          # Insurance FAQ with schema
feature/phase3-performance-optimization # Performance improvements
feature/phase3-ab-testing             # A/B testing setup (optional)
```

## Daily Workflow

### Starting a New Feature
```bash
# 1. Ensure you're on develop and it's up to date
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/phase1-home-hero

# 3. Work on feature, commit regularly
git add .
git commit -m "feat: add hero section with CTAs"

# 4. Push branch
git push -u origin feature/phase1-home-hero
```

### Completing a Feature
```bash
# 1. Ensure all changes are committed
git add .
git commit -m "feat: complete hero section"

# 2. Push final changes
git push

# 3. Create Pull Request on GitHub:
#    - Base: develop
#    - Compare: feature/phase1-home-hero
#    - Add description, link to requirements

# 4. After PR is approved and merged, delete local branch
git checkout develop
git pull origin develop
git branch -d feature/phase1-home-hero
```

### Release Workflow
```bash
# 1. Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# 2. Final testing, update version numbers, CHANGELOG
# 3. Merge to main
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "MVP Release: Phase 1 complete"
git push origin main --tags

# 4. Merge back to develop
git checkout develop
git merge release/v1.0.0
git push origin develop

# 5. Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

### Hotfix Workflow
```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/contact-form-email

# 2. Fix issue, commit
git add .
git commit -m "fix: contact form email delivery"

# 3. Merge to main
git checkout main
git merge hotfix/contact-form-email
git tag -a v1.0.1 -m "Hotfix: Contact form email"
git push origin main --tags

# 4. Merge to develop
git checkout develop
git merge hotfix/contact-form-email
git push origin develop

# 5. Delete hotfix branch
git branch -d hotfix/contact-form-email
```

## Commit Message Convention

Use conventional commits for clarity:

**Format**: `type(scope): description`

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat(home): add hero section with CTAs
fix(contact): resolve form validation issue
docs(readme): update setup instructions
style(services): improve mobile responsiveness
refactor(api): simplify contact form handler
```

## Vercel Integration

### Branch Deployments
- `main` → Production (production domain)
- `develop` → Staging (optional staging domain)
- Feature branches → Preview deployments (automatic)

### Environment Variables
- Set production vars for `main` branch
- Set staging vars for `develop` branch
- Preview deployments inherit from production (can override)

## Recommended GitHub Settings

### Branch Protection Rules

**For `main` branch**:
- ✅ Require pull request reviews (1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Do not allow force pushes
- ✅ Do not allow deletions

**For `develop` branch** (optional):
- ✅ Require pull request reviews (1 approval)
- ✅ Allow force pushes (for rebasing, if needed)

## Quick Reference

### Common Commands
```bash
# View all branches
git branch -a

# Switch branches
git checkout branch-name

# Create and switch to new branch
git checkout -b feature/new-feature

# See branch status
git status

# See commit history
git log --oneline --graph --all

# Stash changes (if you need to switch branches)
git stash
git stash pop
```

## Getting Started

1. **Initial Setup** (if not done):
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```

2. **Start Phase 1**:
   ```bash
   git checkout develop
   git checkout -b feature/phase1-project-setup
   # Begin Next.js setup...
   ```

3. **Continue with feature branches** as outlined in Phase 1 section above.

