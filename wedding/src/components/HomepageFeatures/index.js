import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "The Reception",
		Svg: require("@site/static/img/undraw_wedding.svg").default,
		description: (
			<>All the information about our reception on the 17th September 2022.</>
		),
		link: "docs/welcome",
	},
	{
		title: "Where to Stay",
		Svg: require("@site/static/img/undraw_departing.svg").default,
		description: <>Some thoughts on places to stay in Manchester.</>,
		link: "docs/wheretostay",
	},
	{
		title: "What to See",
		Svg: require("@site/static/img/undraw_eating_together.svg").default,
		description: (
			<>Some information of things to do and places to eat in Manchester.</>
		),
		link: "docs/thingstodo",
	},
];

function Feature({ Svg, title, description, link }) {
	return (
		<div className={clsx("col col--4")}>
			<a class="indexlink" href={link}>
				<div className="text--center">
					<Svg className={styles.featureSvg} role="img" />
				</div>
			</a>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
