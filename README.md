## CSS Stylesheet selector
------
Easily add additional stylesheets to switch between your stories.

### Install
----
```
npm i css-stylesheet-switcher
```

### Usage
---

```
import { addParameters } from '@storybook/react';

addParameters({
    themeStylesheetSelector: {
        stylesheets: [
            {
                id: 'Theme 1',
                title: 'Theme 1',
                url: 'css/someCss1.css'
            },
            {
                id: 'Theme 2',
                title: 'Theme 2',
                url: 'css/someCss2.css'
            }
        ]
    }
});
```