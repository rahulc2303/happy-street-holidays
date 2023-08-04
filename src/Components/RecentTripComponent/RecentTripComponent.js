import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import "./RecentTripComponent.css";

export function RecentTripComponent(props) {
  return (
    <Card className="w-full max-w-[23rem] shadow-lg ">
      <CardHeader floated={false} color="blue-gray rounded-none">
        <img
          src={props.RecentTripsDetails.imgSrc}
          alt="ui/ux review check"
          className="rounded-none"
        />

        <div className="to-bg-black-10 absolute inset-0 h-full w-full max-w-[23rem] bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 block items-center justify-between">
          <Typography color="gray">{props.RecentTripsDetails.date}</Typography>
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="font-medium mb-3 block items-center justify-between"
        >
          {props.RecentTripsDetails.descriptions}
        </Typography>
      </CardBody>
    </Card>
  );
}
