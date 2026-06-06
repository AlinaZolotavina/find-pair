import { Link, LinkProps } from "react-router-dom";

interface MenuOptionProps {
  text: string;
  page: LinkProps["to"];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function MenuOption({ text, page, onClick }: MenuOptionProps) {
  return (
    <Link className="find-pair__menu-option" to={page} onClick={onClick}>
      {text}
    </Link>
  );
}

export default MenuOption;
