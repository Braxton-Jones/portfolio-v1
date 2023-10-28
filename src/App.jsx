import twitter from "./assets/images/icon-twitter.svg"
import github from './assets/images/icon-github.svg';
import linkedin from './assets/images/icon-linkedin.svg';
import javascript from "./assets/images/javascript.png"
import figma from './assets/images/figma.svg';
import node from './assets/images/node.png';
import react from './assets/images/react.png';
import sass from './assets/images/sass.png';
import ts from "./assets/images/typescript.png"
import resume from "./assets/images/resume.png"
import projects from "./data"
import resumePDF from "./assets/Resume.pdf"

function App() {


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
					<a href={resumePDF}>
						<img src={resume} alt='linkedin logo' />
					</a>
				</div>
			</section>
			<section className='hero-container'>
				<h1 className='hero-title'>
					Nice to meet you!<br/> I'm <span>Braxton Jones.</span>
				</h1>
				<p className='hero-content'>
				I build accessible, inclusive and unique experiences for the web.
				</p>
				<a href='mailto:braxtonjonesttsl@gmail.com' className='underline'>
				Get in touch
				</a>
			</section>
			<section className='about-me-container'>
				<div>
					<h2 className='about-me-title'>About Me</h2>
					<p>
					In 2018, I made the decision to take a 
					leap into learning web development and 
					transition away from my apprenticeship in 
					system administration. Since then, I've 
					been actively exploring new technologies and 
					acquiring skills to effectively transform 
					abstract concepts into tangible realities. 
					I am a self-starter and self-sufficient, 
					but I also excel in collaboration. 
					I maintain a strong sense of self-motivation
					 and possess excellent communication and interpersonal skills.
					</p>
					<p className="accent">At the heart of all my pursuits lies the spark of creation.</p>
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