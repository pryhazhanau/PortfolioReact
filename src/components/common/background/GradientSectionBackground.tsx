import { FC } from "react";

interface GradientSectionBackgroundProps {
    height?: 100 | 200 | 300 | 400 | undefined;
}

const GradientSectionBackground: FC<GradientSectionBackgroundProps> = ({height}) => {
    return (
        <div className="gradient-section-background" style={{height: height == undefined ? 300 : height }}/>
    )
}

export default GradientSectionBackground