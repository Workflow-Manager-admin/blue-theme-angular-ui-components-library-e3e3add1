# material-blue-lib

Reusable Angular Material wrapper components (Accordion, Button, Card) built with a custom blue theme for use in Angular projects.

## Components

- `<material-blue-accordion [items]="..."></material-blue-accordion>`  
  Supply an array of panels; or use `<ng-content>` for advanced layout.

- `<material-blue-button color="primary">Button</material-blue-button>`  
  Blue-styled Material button; color options: primary, accent, warn.

- `<material-blue-card title="..." subtitle="...">Content</material-blue-card>`  
  Encapsulated card, composable with content and actions.

## Theming

Components use a custom blue color palette (primary: #1976d2, accent: #1565c0, secondary: #90caf9) in a light Material theme.

## Usage

1. Import the `MaterialBlueLibModule` from `material-blue-lib`
2. Add to your `imports` array in the Angular module
3. Use the components in your templates

```
npm install material-blue-lib
```

See the source files for further documentation.
