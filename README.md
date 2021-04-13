# Storybook Stylesheet Toggle

A simple addon for Storybook that allows you to define a set of stylesheets that can be toggled between. This may be useful if your project has multiple themes, or if you want to stress test your components in different styling environments.

### Getting started

`yarn add -D storybook-stylesheet-toggle`

Install the addon in `.storybook/main.js`:

```
module.exports = {
  addons: ["storybook-stylesheet-toggle"],
};
```

Add the following configuration to `.storybook/preview.js`:

```
import { addParameters } from '@storybook/react';

addParameters({
  stylesheetToggle: {
    stylesheets: [
      {
        id: 'first',
        title: 'First stylesheet',
        url: 'path/to/first-sheet.css',
      },
      {
        id: 'second',
        title: 'Second stylesheet',
        url: 'path/to/second-sheet.css',
      },
    ],
  },
});
```

Ensure the path to your stylesheets is being served by Storybook (with the `-s ./path` parameter.)

Boot Storybook, and you should now see a paintbrush menu, allowing you to toggle between the stylesheets you've configured. The first stylesheet will be applied by default.
