// sections
'use client'

import Typography from "@material-tailwind/react/components/Typography";
import React from "react";
import {Certificate} from "@/app/certificates/certificate";

const certificates = [
	{
		image: 'https://picsum.photos/200/300',
		title: 'Eriel mejias',
		description: `Lorem Ipsum is simply dummy text of the printing and <a href="typescript.com">typesetting</a> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
	},
	{
		image: 'https://picsum.photos/200/300',
		title: 'Eriel mejias',
		description: `Lorem Ipsum is simply dummy text of the printing and <a href="typescript.com">typesetting</a> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
	},
	{
		image: 'https://picsum.photos/200/300',
		title: 'Eriel mejias',
		description: `Lorem Ipsum is simply dummy text of the printing and <a href="typescript.com">typesetting</a> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
	}
]

export default function Portfolio() {
	return (
		<div>
			<Typography style={{textAlign: "center"}} className="my-12" variant="h1">Certificates</Typography>
			<div className="px-5 grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
				{certificates.map(((it, index) => {
					return <Certificate key={index} image={it.image} title={it.title} description={it.description} />;
				}))}
			</div>
		</div>
	);
}
