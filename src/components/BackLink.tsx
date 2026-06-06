import { Link, LinkProps } from "react-router-dom";

interface BackLinkProps {
  linkText: string;
  href: LinkProps["to"];
}

function BackLink({ linkText, href }: BackLinkProps) {
  return (
    <Link className="find-pair__back-link" to={href}>
      {linkText}
    </Link>
  );
}

export default BackLink;
