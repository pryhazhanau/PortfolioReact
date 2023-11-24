import "./Link.css"
import { FC } from "react";

interface LinkProps {
    text: string;
    url: string;
    target?: "blank";
}

const Link: FC<LinkProps> = ({text, url, target}) => {
    return (
        <p>
            <a className="link-text-img" href={url} target={`${target === `blank` ? `_blank` : ``}`}>{text}</a>
        </p>
    )
}

export default Link