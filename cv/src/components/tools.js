import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJira,
  faConfluence,
  faTrello,
  faBitbucket,
  faGithub,
  faFigma,
  faSlack,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Tools() {
  let list = [
    { name: "Jira", icon: faJira },
    { name: "Confluence", icon: faConfluence },
    { name: "Bitbucket", icon: faBitbucket },
    { name: "Github", icon: faGithub },
    { name: "Trello", icon: faTrello },
    { name: "Slack", icon: faSlack },
    { name: "Figma", icon: faFigma },
    { name: "G Suite", icon: faGoogle },
  ];
  return (
    <div className="CV__stack px-4 mt-4">
      <h3>Other Tools</h3>
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
