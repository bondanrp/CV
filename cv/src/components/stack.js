import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNode,
  faReact,
  faGit,
  faDocker,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Stack() {
  let list = [
    { name: "JavaScript", icon: faJs },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "SASS", icon: faSass },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "NodeJS", icon: faNode },
    { name: "ReactJS", icon: faReact },
    { name: "React Native", icon: faReact },
    { name: "Git", icon: faGit },
    { name: "Docker", icon: faDocker },
    { name: "AppScript", icon: faGoogle },
  ];
  return (
    <div className="CV__stack px-4">
      <h3>Tech Stack</h3>
      <hr />
      <div className="d-flex flex-wrap">
        {list.map((v, i) => {
          return (
            <div className="CV__stack__item me-2 mb-2">
              <p className="text-sm sub">
                <FontAwesomeIcon icon={v.icon} className="me-1" />
                {v.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
