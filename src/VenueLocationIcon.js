import L from "leaflet";

export default L.icon({
  iconUrl: require("./assets/venue_location_icon.svg").default,
  iconRetinaUrl: require("./assets/venue_location_icon.svg").default,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
