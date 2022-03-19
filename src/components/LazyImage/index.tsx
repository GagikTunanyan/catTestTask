import React, { HTMLAttributes, memo } from "react";

interface PropTypes {
    src: string;
    className?: string;
}

const Image: React.FC<PropTypes> = memo((props) => {
    return (
        <img {...props} loading="eager" />
    )
});

export default Image;