import twitter from "./assets/images/icon-twitter.svg"
import github from './assets/images/icon-github.svg';
import linkedin from './assets/images/icon-linkedin.svg';
import javascript from "./assets/images/javascript.png"
import figma from './assets/images/figma.svg';
import node from './assets/images/node.png';
import react from './assets/images/react.png';
import sass from './assets/images/sass.png';
import resume from "./assets/images/resume.png"
import projects from "./data"
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast"

function App() {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({});

	function handleInputChange(event) {
		const { name, value } = event.target;
		if (name === 'name') {
			setName(value);
		} else if (name === 'email') {
			setEmail(value);
		} else if (name === 'message') {
			setMessage(value);
		}
		setErrors({});
	}

	function handleSubmit(event) {
		event.preventDefault();

		let formErrors = {};

		if (name.trim() === '') {
			formErrors.name = 'Name is required';
		}

		if (email.trim() === '') {
			formErrors.email = 'Email is required';
		}

		if (message.trim() === '') {
			formErrors.message = 'Message is required';
		}

		if (Object.keys(formErrors).length > 0) {
			// There are errors, display them to the user and prevent form submission
			setErrors(formErrors);
			return;
		}

		// Call your API or do whatever else you need to do to submit the form
		console.log('Submitting form...');
		setEmail('');
		setMessage('');
		setName('');
		toast.success("Thanks!,  I'll be in touch soon!");
	}

const projectsList = projects.map(project => {
return (
	<div className='project'>
		<img src={project.image} />
		<div className='project-content'>
			<h4 className='project-title'>{project.name}</h4>
			<p className='project-tags'>
				{project.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</p>
			<div className='project-link-wrapper'>
				<a href={project['website-link']} className='underline'>
					View Project
				</a>
				<a href={project['code-link']} className='underline'>
					View Code
				</a>
			</div>
		</div>
	</div>
);
})

return (
	<>
		<main>
			<Toaster />
			<section className='logo-section'>
				<h1 className='logo'>braxtonjones</h1>
				<div className='icons'>
					<a href='https://twitter.com/bx_jones'>
						<img src={twitter} alt='twitter logo' />
					</a>
					<a href='https://github.com/Braxton-Jones'>
						<img src={github} alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/braxton-jones-963633270/'>
						<img src={linkedin} alt='linkedin logo' />
					</a>
					<a href='.\src\Resume.pdf'>
						<img src={resume} alt='linkedin logo' />
					</a>
				</div>
			</section>
			<section className='hero-container'>
				<h1 className='hero-title'>
					Nice to meet you! I'm <span>Braxton Jones.</span>
				</h1>
				<p className='hero-content'>
					Based in the US, I'm a front-end developer with a love for building
					web apps that add value to thier users.{' '}
				</p>
				<a href='mailto:braxtonjonesttsl@gmail.com' className='underline'>
					Get in touch
				</a>
			</section>
			<section className='about-me-container'>
				<div>
					<h2 className='about-me-title'>About Me</h2>
					<p>
						Hello! I'm Braxton Jones, a self-taught front-end developer with a
						deep passion for technology and web design. I've spent countless
						hours perfecting my skills and creating web applications that marry
						functionality with aesthetics. In my free time, I love exploring the
						latest UX/UI trends, which helps me approach web development from a
						well-rounded perspective.
					</p>
				</div>
				<div>
					<h3>My Toolkit</h3>
					<ul>
						<li>
							<img src={javascript} className='toolkit-icon' />
							Javacript (ES6+)
						</li>
						<li>
							<img src={react} className='toolkit-icon' />
							React
						</li>
						<li>
							<img src={node} className='toolkit-icon' />
							Node.js
						</li>
						<li>
							<img src={figma} className='toolkit-icon' />
							Figma
						</li>
						<li>
							<img src={sass} className='toolkit-icon' />
							Sass
						</li>
					</ul>
				</div>
			</section>
			<section className='projects-container'>
				<h3>What I've been working on.</h3>
				<div className='project-wrapper'>{projectsList}</div>
			</section>
		</main>
		<section className='contact-container'>
			<div className='contact-content'>
				<h3>Contact</h3>
				<p>
					I would love to hear about how I can help. My inbox is always open and
					I'll in touch with you soon.
				</p>
				<a href='mailto:braxtonjonesttsl@gmail.com' className='underline'>
					Contact Me
				</a>
			</div>

			<div className='logo-section'>
				<h1 className='logo'>braxtonjones</h1>
				<div className='icons'>
					<a href='https://twitter.com/bx_jones'>
						<img src={twitter} alt='twitter logo' />
					</a>
					<a href='https://github.com/Braxton-Jones'>
						<img src={github} alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/braxton-jones-963633270/'>
						<img src={linkedin} alt='linkedin logo' />
					</a>
				</div>
			</div>
		</section>
	</>
);
}

export default App