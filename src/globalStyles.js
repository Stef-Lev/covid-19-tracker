import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Roboto', 'Segoe UI', sans-serif;
    transition: all 0.50s linear;
  }
  `
