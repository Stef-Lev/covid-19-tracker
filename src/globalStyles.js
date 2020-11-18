import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Roboto', 'Segoe UI', sans-serif;
    transition: all 0.50s linear;
  }
  .MuiPaper-root  {
    background: ${({ theme }) => theme.infoboxColor};
    color: ${({ theme }) => theme.text};
  }
  .MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input  {
    background: ${({ theme }) => theme.infoboxColor};
    color: ${({ theme }) => theme.text};
  }
  .total-label, .infoBox-total {
    color: ${({ theme }) => theme.infoboxText};
  }
  .map {
    background: ${({ theme }) => theme.infoboxColor};
  }
  .table tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.tableOddColor};
}

  `
