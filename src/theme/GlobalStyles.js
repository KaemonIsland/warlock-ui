import { createGlobalStyle } from 'styled-components'

const loadFonts = stylesheet => {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', stylesheet)

  document.getElementsByTagName('head')[0].appendChild(link)
}
// Roboto font
loadFonts(
  'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'
)

// Source Sans Pro
loadFonts(
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap'
)

// Open Sans
loadFonts(
  'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
)

// Merriweather
loadFonts(
  'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap'
)

// Inter
loadFonts(
  'https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'
)

// Lato
loadFonts(
  'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap'
)
export const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: Rubik, sans-serif;
  scroll-behavior: smooth;
}

/* Remove default padding */
ul,
ol {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul,
ol {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  /* Typography 8-point grid
  https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/ */
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3.75rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2.125rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
`
