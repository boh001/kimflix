import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        -moz-box-sizing: border-box; /* Firefox  */
        -webkit-box-sizing: border-box; /* Safari */
        box-sizing: border-box; /* CSS3 Standard */
        color:#FFFFFF;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;
