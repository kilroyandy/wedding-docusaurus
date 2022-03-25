import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<p className="hero__subtitle">From 4:30 pm, 17th September 2022</p>
				<p className="hero__subtitle">Whitworth Art Gallery, Manchester</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						💍 Information for the Day 💍
					</Link>
				</div>
				<br></br>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="https://www.google.com/maps/place/The+Whitworth/@53.4602732,-2.2315335,17z/data=!3m2!4b1!5s0x487bb1896874b94b:0xa15951d5cde646b5!4m5!3m4!1s0x487bb189682cbb53:0x53931302caa2348f!8m2!3d53.46027!4d-2.2293448"
					>
						📌 Quick Map Link 📌
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
