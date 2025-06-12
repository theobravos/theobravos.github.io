import React from 'react';
import ScrollFloat from './ScrollFloat';
import TiltedCard from './TiltedCard';

const PROJECTS = [
	{
		id: 1,
		image: '/assets/img/music-analytics.png',
		title: 'Music Entertainment Analytics',
		desc: 'Performed end-to-end SQL analysis & time-series feature engineering.',
		repo: 'https://github.com/theobravos/music-entertainment-analytics',
	},
	{
		id: 2,
		image: '/assets/img/insurance-loss.png',
		title: 'Predicting Loss Causes',
		desc: 'Engineered predictive models to identify insurance claim likelihood and severity.',
		repo: 'https://github.com/theobravos/insurance-loss',
	},
	{
		id: 3,
		image: '/assets/img/movie-analytics.png',
		title: 'Movie Ratings Analysis',
		desc: 'Explored and cleaned movie-rating data with Python, built regression models predict revenue.',
		repo: 'https://github.com/theobravos/movie-ratings-analysis',
	},
	{
		id: 4,
		image: '/assets/img/portfolio-website.png',
		title: 'Portfolio Website',
		desc: 'Built a personal portfolio website using React and modern web technologies.',
		repo: 'https://github.com/theobravos/theobravos.github.io',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="section-container">
			<ScrollFloat className="section-title"
      animationDuration={1.5}
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd='bottom bottom-=40%'
      stagger={0.05}
      >
				Projects
      </ScrollFloat>
			<div
				className="tilted-cards-container"
				style={{
					display: 'flex',
					flexDirection: 'column', // Arrange items in a single column
					gap: '2rem', // Add spacing between cards
					alignItems: 'center', // Center cards horizontally
				}}
			>
				{PROJECTS.map((p) => (
					<a
						key={p.id}
						href={p.repo}
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }} // Remove underline for the link
					>
						<TiltedCard
							imageSrc={p.image}
							altText={p.title}
							captionText={p.title}
							containerHeight="300px"
							containerWidth="600px"
							imageHeight="300px"
							imageWidth="600px"
							rotateAmplitude={18}
							scaleOnHover={1.3}
							showMobileWarning={false}
							showTooltip={true}
							displayOverlayContent={true}
							overlayContent={
								<div className="tilted-overlay-content">
									<h4 className="overlay-title">{p.title}</h4>
									<p className="overlay-desc">{p.desc}</p>
								</div>
							}
						/>
					</a>
				))}
			</div>
		</section>
	);
}
