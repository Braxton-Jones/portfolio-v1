import dine from "./assets/images/dine.png";
import arch from "./assets/images/arch-studio.png";
import devjobs from "./assets/images/devjobs.png";
import markdown from "./assets/images/markdown.png";
import artGallery from "./assets/images/art-gallery.png"
import dineDiner from "./assets/images/dine-diner.png"
const projects = [
	{
		name: 'Markdown Web App',
		image: markdown,
		tags: ['HTML', 'Sass', 'React', 'Node'],
		'code-link': 'https://github.com/Braxton-Jones/markdown-app',
		'website-link': 'https://braxton-markdown-app.netlify.app/',
	},
	{
		name: 'Devjobs Web app',
		image: devjobs,
		tags: ['HTML', 'Sass', 'React'],
		'code-link': 'https://github.com/Braxton-Jones/job-board-app',
		'website-link': 'https://braxton-job-board-app.netlify.app/',
	},
	{
		name: 'Arch Studio Landing Page',
		image: arch,
		tags: ['HTML', 'Sass', 'React'],
		'code-link': 'https://github.com/Braxton-Jones/arch-studio',
		'website-link': 'https://arch-studios-landing-page.netlify.app/',
	},
	{
		name: 'Art Gallery Showcase',
		image: artGallery,
		tags: ['HTML', 'CSS'],
		'code-link': 'https://github.com/Braxton-Jones/art-gallery-page',
		'website-link': 'https://braxton-jones.github.io/art-gallery-page/',
	},
	{
		name: 'Dine Reservation(Customer) Web App',
		image: dine,
		tags: ['HTML', 'Sass', 'React', 'Node'],
		'code-link': 'https://github.com/Braxton-Jones/reservation-customer-app',
		'website-link': 'https://braxton-dine-reservation.netlify.app/',
	},
	{
		name: 'Dine Reservation(Diner) Web App',
		image: dineDiner,
		tags: ['HTML', 'Sass', 'React', 'Node'],
		'code-link': 'https://github.com/Braxton-Jones/reservation-customer-app',
		'website-link': 'https://reservation-diner.netlify.app/',
	},
];

export default projects;