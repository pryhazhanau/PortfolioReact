import { FC } from "react"
import "./TextPill.css"

interface TextPillProps {
    text: string
}

const TextPill: FC<TextPillProps> = ({text}) => {
    return (
        <div className="text-pill">
            <p className="text-pill-text caption">{text}</p>
        </div>
    )
}

export default TextPill