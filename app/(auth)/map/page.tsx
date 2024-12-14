import Navbar from "@/components/navbar/navbar";

import BoardingHouseMapView, {
  BoardingHouseMapViewProps,
  LatLng,
} from "@/components/boardinghousemapview/boardinghousemapview";
import MapComponent from "@/components/map/mapcomponent";
import ShowMapFooter from "@/components/showmapfooter/showmapfooter";
import RoomRadarMap from "@/components/map/roomradarmap";

const Map = () => {
  //Payload example
  const boardingHouseProps1: BoardingHouseMapViewProps = {
    mapLocation: {
      lat: 10.293647,
      lng: 123.867631,
    }, //placeholder sa try myuy location sa
    location: "Cebu City, Philippines",
    distance: "5 kilometers away", //to be calculated pa
    price: "2,225",
    rating: 4.9,
    images: ["/images/testing-1.avif", "/images/testing-2.avif"],
    isFavorite: false,
    landlord: "John Doe",
    landlordContactDetails: "09271935386",
  };

  const boardingHouseProps2: BoardingHouseMapViewProps = {
    mapLocation: {
      lat: 10.243647,
      lng: 123.767631,
    }, //placeholder sa try myuy location sa
    location: "Cebu City, Philippines",
    distance: "5 kilometers away", //to be calculated pa
    price: "2,225",
    rating: 4.9,
    images: ["/images/testing-1.avif", "/images/testing-2.avif"],
    isFavorite: false,
    landlord: "John Doe",
    landlordContactDetails: "09271935386",
  };

  const arrayListings = [boardingHouseProps1, boardingHouseProps2];

  return (
    <>
      <Navbar navbarType={1}></Navbar>
      <RoomRadarMap arrayListings={arrayListings}></RoomRadarMap>
      <ShowMapFooter footerType={2}></ShowMapFooter>
    </>
  );
};

export default Map;
