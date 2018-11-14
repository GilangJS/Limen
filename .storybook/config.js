import { configure } from '@storybook/react';

const req = require.context('../src', true, /stories.tsx$/);

function loadStories() {
  req.keys().map(file => req(file))
}

configure(loadStories, module);
