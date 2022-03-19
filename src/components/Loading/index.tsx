import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingWrapper = styled.div`
    border-left: 3px solid #dfdcdc;
    border-top: 3px solid #dfdcdc;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    animation: ${rotate} linear 1s infinite;
`

const Loading = () => {
    return (
        <LoadingWrapper />
    )
};

export default Loading;