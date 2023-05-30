import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Inconsolata', monospace;
    }

    body {
        color: #efefef;
        background-color: #0e0e0e;
    }
`