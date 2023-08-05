import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import "./PopularPlacesCard.css";

export function PopularPlacesCard(props) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[16rem] w-full max-w-[22rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://preview.colorlib.com/theme/travelo/img/destination/1.png.webp')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative gap-x-10 flex py-14 px-3 p-6 md:px-12">
        <Typography
          variant="h5"
          color="white"
          className=" font-medium leading-[1.5]"
        >
          {props.PopularPlaceCardDetails.title}
        </Typography>{" "}
        <Typography
          variant="h4"
          color="white"
          className=" font-medium leading-[1.5] how-many-places-in-the-given-state"
        >
          {props.PopularPlaceCardDetails.placecount}
        </Typography>
      </CardBody>
    </Card>
  );
}
