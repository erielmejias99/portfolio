import {Card, CardBody, Typography, Avatar} from "@material-tailwind/react";


interface TestimonialCardProps {
  avatar: string;
  name: string;
  content: string;
  subtitle: string;
}

export function TestimonialCard(props: TestimonialCardProps) {

  return <Card className="mt-2" variant={"filled"}>
    <CardBody>
      <div className="flex items-center gap-3">
        <Avatar src={props.avatar} alt="avatar"/>
        <div>
          <Typography variant="h6" className={"text-left"}>{props.name}</Typography>
          <Typography variant="small" color="gray" className="font-normal text-left">
            {props.subtitle}
          </Typography>
        </div>
      </div>
      <Typography className="mt-3 text-left">
        {props.content}
      </Typography>
    </CardBody>
  </Card>
}