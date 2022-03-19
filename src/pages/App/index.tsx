import React, { useEffect, useCallback } from "react";
import Routes from "../Routes";
import { actionDetectedWindowSize } from "../../redux/action/window";
import { useDispatch, useSelector } from "react-redux";
import LeftSidebarForDesk from "../../components/LeftSidebarForDesk";
import TopSidebarForTablet from "../../components/TopSidebarForTablet";
import styled, { css } from "styled-components";
import './App.css';
import { RootState } from "../../types/global_state_types";

interface MainPageProps {
  windowSize: string;
}

const MainPage = styled.div<{ screenSize: string }>`
  width: 80%;
  ${(props) => {
    if(props.screenSize !== "desktop") {
      return css`
        width: 100%;
      `
    }
  }}
`

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { windowSize } = useSelector((state: RootState) => state.stateWindow);


  const detectedWindowSize = useCallback(() => {
    dispatch(actionDetectedWindowSize(window.innerWidth));
  }, []);

  useEffect(() => {
    dispatch(actionDetectedWindowSize(window.innerWidth));
    window.addEventListener('resize', detectedWindowSize);

    return () => {
      window.removeEventListener('resize', detectedWindowSize);
    }
  }, [])
  return (
    <div className="App">
      {windowSize === 'desktop' && <LeftSidebarForDesk />}
      {windowSize !== 'desktop' && <TopSidebarForTablet />}
      <MainPage screenSize={windowSize}>
        <Routes />
      </MainPage>
    </div>
  );
}

export default App;
