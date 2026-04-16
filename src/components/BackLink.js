import { Link } from "react-router-dom";

function BackLink({ linkText, href }) {
  return (
    <Link className="find-pair__back-link" to={href}>
      {linkText}
    </Link>
  );
}

export default BackLink;
