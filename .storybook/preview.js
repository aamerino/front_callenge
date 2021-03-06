import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];