import styled from 'styled-components';

export const StyledHeader = styled.h1`
  width: 100vw;
  height: 5vh;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

export const StyledTitle = styled.h1`
  width: 95vw;
  height: 4vh;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 14px;
`;

export const StyledBtn = styled.button`
  height: 5vh;
  width: 90vw;
  text-align: center;
  position: relative;
`;

export const MapOverlay = styled.div`
  height: 86vh;
  background: rgb(255, 255, 255, 0.9);
  position: fixed;
  top: 9vh;
  width: 55vw;
  padding-left: 10px;
  padding-top: 10px;
`;
