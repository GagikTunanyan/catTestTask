import React, { memo } from "react";
import LazyImage from "../LazyImage";
import styled, { css } from "styled-components";

interface PropTypes {
    url: string
};

const WrappCatCard = styled.div`
    .cat--image {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`

const CatCard:React.FC<PropTypes> = memo((props) => {
    const { url } = props;
    return (
        <WrappCatCard className="cat--card--item">
            <LazyImage src={url} className={"cat--image"} />
        </WrappCatCard>
    )
});

export default CatCard