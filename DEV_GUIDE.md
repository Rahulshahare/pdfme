# 🚀 PDFMe Development Quick Start Guide

## What is PDFMe?

PDFMe is a comprehensive TypeScript-based PDF generation and manipulation library with a React UI. It features:
- 📄 PDF generation from templates
- 🎨 PDF designer/editor
- 🔄 PDF manipulation (merge, split, etc.)
- 🔌 Plugin system for extending functionality
- 🌍 Multi-language support (EN, JA, ES, FR, DE, ZH, AR, IT, TH, PL, KO)

## Environment Setup Status

### ✅ Completed
- PowerShell execution policy configured
- Node.js & npm verified (v11.6.2)
- Dependencies installation initialized
- Build process started

### 📦 Monorepo Structure

```
pdfme (workspace root)
│
├─ packages/
│  ├─ common/         [Core types & utilities]
│  ├─ pdf-lib/        [PDF document handling]
│  ├─ converter/      [PDF format conversion]
│  ├─ schemas/        [Plugin definitions]
│  ├─ generator/      [PDF generation engine]
│  ├─ manipulator/    [PDF editing tools]
│  └─ ui/             [React components]
│
├─ playground/        [Demo application]
├─ website/          [Documentation site]
└─ scripts/          [Build utilities]
```

## 🔄 Build & Development Flow

### Phase 1: Clean
```
Remove old dist/ folders from all packages
```

### Phase 2: Sequential Build (Dependencies must complete in order)
```
build:pdf-lib    → base PDF handling
    ↓
build:common     → core types + utils
    ↓
build:converter  → conversion tools
    ↓
build:schemas    → plugin definitions
```

### Phase 3: Parallel Build (Can build simultaneously)
```
build:generator ─┐
build:ui        ├─→ Ready to use
build:manipulator┘
```

## 💻 Running the Project

### Quick Start
```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm run test

# Check code quality
npm run lint
```

### Development Mode (Hot Reload)
```bash
# Terminal 1: Watch common package
cd packages/common && npm run dev

# Terminal 2: Watch schemas
cd packages/schemas && npm run dev

# Terminal 3: Watch generator
cd packages/generator && npm run dev

# Terminal 4: Watch UI
cd packages/ui && npm run dev

# Terminal 5: Run playground
cd playground && npm install && npm run dev
```

Then visit: `http://localhost:5173` (or shown port)

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests for specific package
npm run -w packages/ui test

# Update snapshots (UI component tests)
npm run test:ui:update-snapshots
```

## 📝 Code Standards

- **Language**: TypeScript (strict mode)
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Testing**: Jest with image snapshot support

### Before Submitting PR:
```bash
# Format code
npm run prettier

# Check linting
npm run lint

# Run tests
npm run test

# Build everything
npm run build
```

## 🔌 Plugin Development Example

To create a custom PDF schema plugin:

1. Create plugin in `packages/schemas/src/yourplugin/`
2. Export `{ ui, pdf, propPanel }` functions
3. Register in plugin registry
4. Test in playground

See `packages/schemas/src/text/index.ts` for reference.

## 🐛 Troubleshooting

### Build Fails
```bash
# Clean and reinstall
rm -r node_modules packages/*/node_modules
npm install
npm run build
```

### PowerShell Script Issues
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

### Module Not Found
```bash
# Rebuild in correct order
npm run build:common
npm run build:schemas
npm run build:generator
npm run build:ui
```

### Port Already in Use
The dev server will use the next available port automatically.

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `packages/common/src/types.ts` | Core type definitions |
| `packages/generator/src/generate.ts` | PDF generation logic |
| `packages/ui/src/Designer.tsx` | Main designer component |
| `packages/schemas/src/*/index.ts` | Schema plugin implementations |
| `playground/src/App.tsx` | Demo application |

## 🌐 Documentation Links

- **GitHub**: https://github.com/pdfme/pdfme
- **Website**: https://pdfme.com
- **Docs**: Check `website/docs/` folder

## 💡 Tips for Development

1. **Use the playground** to test changes in real-time
2. **Watch multiple packages** simultaneously for faster feedback
3. **UI changes take 5-10 seconds** to reflect (rebuild time)
4. **Check CLAUDE.md** for AI-assisted development guidelines
5. **Update snapshots** when intentional UI changes are made

## 🎯 Common Tasks

```bash
# Add new feature to generator
cd packages/generator
npm run dev
# Make changes in src/
# Changes automatically build to dist/

# Create new schema plugin
cd packages/schemas
npm run dev
# Add new folder under src/
# Test in playground

# Work on UI components
cd packages/ui
npm run dev
# Edit components in src/components/
# View changes in playground

# Update documentation
cd website
npm install
npm run dev
# Edit markdown files in docs/
```

## 📞 Getting Help

- Check existing issues on GitHub
- Review DEVELOPMENT.md for detailed steps
- See CLAUDE.md for AI-assisted development
- Check test files for usage examples

---

**Happy Coding! 🎉**

For more information, refer to:
- [DEVELOPMENT.md](./DEVELOPMENT.md)
- [CLAUDE.md](./CLAUDE.md)
- [packages/*/README.md](./packages/)
