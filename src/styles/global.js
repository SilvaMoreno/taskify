import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        color: #333;
        background: #ecf1f8;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`
