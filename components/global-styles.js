import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import * as fonts from '../constants/fonts';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0; padding: 0;
    cursor: 
      url("http://downloads.totallyfreecursors.com/thumbnails/tinkerbell.gif"), 
      auto;
  }

  body {
    font-family: ${fonts.serifFont};
  }
`;

export default GlobalStyles;
