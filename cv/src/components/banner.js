import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import about from "../data/about.json";

export default function Banner() {
  return (
    <div className="CV__banner">
      <p className="mb-0 text-sm">
        <FontAwesomeIcon size="sm" icon={faEnvelope} className="me-2" />{" "}
        {about.email}
      </p>
      <p className="mb-0 text-sm">
        <FontAwesomeIcon size="sm" icon={faLocationDot} className="me-2" />{" "}
        {about.location}
      </p>
      <p className="mb-0 text-sm">
        <FontAwesomeIcon size="sm" icon={faPhone} className="me-2" />{" "}
        {about.phonenumber}
      </p>
    </div>
  );
}
