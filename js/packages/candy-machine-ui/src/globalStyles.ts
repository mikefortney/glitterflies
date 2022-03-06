import { createGlobalStyle } from 'styled-components';
import AugieWoff2 from './assets/fonts/augie-webfont.woff2';
import AugieWoff from './assets/fonts/augie-webfont.woff';
import AugieWoffTTF from './assets/fonts/augie-webfont.ttf';

const GlobalStyle = createGlobalStyle`
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	ul[role='list'],
	ol[role='list'] {
		list-style: none;
	}

	/* Set core root defaults */
	html:focus-within {
		scroll-behavior: smooth;
	}

	/* Set core body defaults */
	body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
		color: #48b3ff;
		&:hover,
		&:focus {
			color: #3d98d9;
		}
	}

	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		html:focus-within {
		scroll-behavior: auto;
		}

		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	:root {
		/* Scale Typography */
		--scale: 1.333;
		/* Don't change the lines below, you only need to change the --scale above. */
		--size-l-1: calc(1rem * var(--scale));
		--size-l-2: calc(var(--size-l-1) * var(--scale));
		--size-l-3: calc(var(--size-l-2) * var(--scale));
		--size-l-4: calc(var(--size-l-3) * var(--scale));
		--size-l-5: calc(var(--size-l-4) * var(--scale));
		--size-l-6: calc(var(--size-l-5) * var(--scale));
		--size-l-7: calc(var(--size-l-6) * var(--scale));
		--size-l-8: calc(var(--size-l-7) * var(--scale));
		--size-l-9: calc(var(--size-l-8) * var(--scale));
		--size-s-1: calc(1rem / var(--scale));
		--size-s-2: calc(var(--size-s-1) / var(--scale));
		--size-s-3: calc(var(--size-s-2) / var(--scale));

		--default-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		font-size: var(--size-l-5);
	}
	h2 {
		font-size: var(--size-l-4);
	}
	h3 {
		font-size: var(--size-l-3);
	}
	h4 {
		font-size: var(--size-l-2);
	}
	h5 {
		font-size: var(--size-l-1);
	}
	h6 {
		font-size: 1rem;
	}
	.large {
		font-size: var(--size-l-1)
	}
	.larger {
		font-size: var(--size-l-2)
	}
	.largest {
		font-size: var(--size-l-3)
	}
	small, .small {
		font-size: var(--size-s-1)
	}
	.smaller {
		font-size: var(--size-s-2)
	}
	.smallest {
		font-size: var(--size-s-3)
	}

	@font-face {
    font-family: 'augieregular';
    src: url(${AugieWoff2}) format('woff2'),
         url(${AugieWoff}) format('woff'),
         url(${AugieWoffTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
	}

	.sr-only:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;

export default GlobalStyle;
