import arch from "./assets/images/arch-studio.png";
import markdown from "./assets/images/markdown.png";
import invoice from "./assets/images/invoice.webp"
const projects = [
	{
		name: 'Invoice App',
		image: invoice,
		tags: ['Sass', 'React', 'Node.js', 'MongoDB'],
		'code-link': 'https://github.com/Braxton-Jones/invoice',
		'website-link': 'https://invoice-app-brx.netlify.app/',
	},
	{
		name: 'Markdown Web App',
		image: markdown,
		tags: ['Sass', 'React', 'Node.js', 'MongoDB'],
		'code-link': 'https://github.com/Braxton-Jones/markdown-app',
		'website-link': 'https://braxton-markdown-app.netlify.app/',
	},
	{
		name: 'Arch Studio Landing Page',
		image: arch,
		tags: ['Sass', 'React',],
		'code-link': 'https://github.com/Braxton-Jones/arch-studio',
		'website-link': 'https://arch-studios-landing-page.netlify.app/',
	},
];

export default projects;