// sections
'use client'

import Typography from "@material-tailwind/react/components/Typography";
import React from "react";
import {Certificate} from "@/app/certificates/certificate";

const certificates = [
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/icpc-caribbean-finals-2020.png',
		title: 'The 2020 ICPC Caribbean Finals',
		description: `Certificate of Achievement awarded for securing 10th place in the 2020 <a href="https://icpc.global/">ICPC</a> Caribbean Finals, demonstrating exceptional problem-solving skills and teamwork in a prestigious programming competition.`,
		viewUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6822391297630986240/',
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/Qualifier%20Contest%20for%20Caribbean%20Regional%20Contest.jpeg',
		title: 'The 2020 ICPC Caribbean Finals( Qualifier )',
		description: `Certificate of Achievement awarded for successfully qualifying for the 2020 ICPC Caribbean Finals, demonstrating outstanding problem-solving abilities and teamwork in a challenging programming competition.`,
		viewUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6815038426308579328/',
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/ICPC%20Caribbean%20Trainning%20Camp.png',
		title: 'Xll ICPC Caribbean Training Camp',
		description: `Participated in the <a href="https://campcarib.wordpress.com/historia/">XII ICPC Caribbean Training Camp</a>, attending insightful talks by renowned Poland ICPC Coach Tomasz Iziwiszek. Enhanced my problem-solving abilities by learning new algorithms, practicing in English, and honing teamwork skills through collaborative problem-solving exercises.`,
		viewUrl: 'https://www.linkedin.com/in/erielmejias99/overlay/1635456749506/single-media-viewer/?profileId=ACoAAC8dg_4B3iR4SJMMMP9yv2gtS1_lLtoBh5A'
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/global-game-jam-2019.jpeg',
		title: 'Global Game Jam 2019',
		description: `Certificate of Participation awarded for successfully contributing to the <a href="https://globalgamejam.org/">Global Game Jam</a>, showcasing creativity, collaboration, and technical skills in developing an innovative game concept within a 48-hour challenge.`,
		viewUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6629030266461581312/'
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/devcaribbean.jpeg',
		title: 'Developing the Caribbean 2019',
		description: `Certificate of Participation awarded for successfully competing in Developing the Caribbean, a 24-hour team-based software development challenge focused on solving real-world problems. Collaborated in a team of six to address tourism-related issues in the Caribbean, enhancing skills in team collaboration, communication, and software development under pressure.`,
		viewUrl: 'https://www.linkedin.com/in/erielmejias99/details/featured/1635456747543/single-media-viewer/?profileId=ACoAAC8dg_4B3iR4SJMMMP9yv2gtS1_lLtoBh5A'
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/copa-pascal.jpeg',
		title: 'Pascal Cup of Competitive Programming ICPC',
		description: `Certificate of Achievement awarded for securing 3rd place in Copa Pascal at the Universidad de las Ciencias Informáticas, demonstrating strong programming skills, problem-solving abilities, and teamwork in a competitive environment.`,
		viewUrl: 'https://www.linkedin.com/in/erielmejias99/details/featured/1635456750260/single-media-viewer/?profileId=ACoAAC8dg_4B3iR4SJMMMP9yv2gtS1_lLtoBh5A'
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/copa-unah-icpc.jpeg',
		title: '3rd Place on UNAH Cup of Competitive Programming ICPC',
		description: `Certificate of Achievement awarded for securing 3rd place in UNAH Cup of Competitive Programming ICPC contest, demonstrating strong programming skills, problem-solving abilities, and teamwork in a competitive environment.`,
		viewUrl: 'https://www.linkedin.com/in/erielmejias99/details/featured/1635456747663/single-media-viewer/?profileId=ACoAAC8dg_4B3iR4SJMMMP9yv2gtS1_lLtoBh5A'
	},
	{
		image: 'https://erielmejias-portfolio.s3.us-east-1.amazonaws.com/certificates/copa-upr.jpeg',
		title: 'Copa UPR of Competitive Programing',
		description: `Certificate of Achievement awarded for securing 3rd place in Copa UPR of Competitive Programing Contest, demonstrating strong programming skills, problem-solving abilities, and teamwork in a competitive environment.`,
		viewUrl: 'https://www.linkedin.com/in/erielmejias99/details/featured/1635456743758/single-media-viewer/?profileId=ACoAAC8dg_4B3iR4SJMMMP9yv2gtS1_lLtoBh5A'
	}
]

export default function Portfolio() {
	return (
		<div className="container mx-auto max-w-screen-xlg p-4">
			<Typography style={{textAlign: "center"}} className="my-12" variant="h1">Certificates</Typography>
			<div className="px-5 grid gap-9 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
				{certificates.map(((it, index) => {
					return <Certificate key={index} image={it.image} title={it.title} description={it.description}/>;
				}))}
			</div>
		</div>
	);
}
