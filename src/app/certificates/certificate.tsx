import {Card, CardBody, CardHeader, Typography} from "@material-tailwind/react";

interface CertificateProps {
	image: string;
	title: string;
	description: string;
}
export function Certificate(props: CertificateProps) {
	return 	<Card className="mt-6">
		<CardHeader color="blue-gray" className="relative h-56">
			<img
				className="object-cover object-center"
				src={props.image}
				alt={props.title}
			/>
		</CardHeader>
		<CardBody>
			<Typography variant="h5" color="blue-gray" className="mb-2">
				{props.title}
			</Typography>
			<Typography>
				<span dangerouslySetInnerHTML={{__html: props.description}} />
			</Typography>
		</CardBody>
	</Card>
}
