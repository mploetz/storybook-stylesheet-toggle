import { addParameters } from '@storybook/react';

addParameters({
    themes: {
      stylesheets: [
          {
              id: 'red',
              title: 'Red',
              url: 'stylesheets/red.css',
          },
          {
              id: 'green',
              title: 'Green',
              url: 'stylesheets/green.css',
          },
          {
              id: 'blue',
              title: 'Blue',
              url: 'stylesheets/blue.css',
          },
      ],
    },
  });
