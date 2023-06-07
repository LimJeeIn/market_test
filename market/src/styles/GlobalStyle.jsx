import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2") format('woff2'),
            url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff") format('woff');
    }

    :root {
        --main-color : #55BDB3;
        --main-disabled-color: #D9D9D9;
        --main-text-color : #000;
        --sub-text-color : #767676;
        --sub2-text-color : #dbdbdb;
      }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
      }

    ul,
    ol,
    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    img {
        display:block;
        width: 100%;
        height: 100%;
    }
    
    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    } 
`
export default GlobalStyle
