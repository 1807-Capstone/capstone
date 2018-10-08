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

export const MobileDiv1 = styled.div`
  width: 100vw;
  height: 30.5vh;
  background-image: url('img/map.jpg');
  background-size: cover;
`;

export const MobileDiv2 = styled(MobileDiv1)`
  background: white;
  padding: 5px;
`;

export const MobileDiv3 = styled(MobileDiv1)`
  background: #35b3bf;
  height: 20vh;
`;

export const MobileDiv4 = styled(MobileDiv1)`
  background: #16a1ae;
  height: 20vh;
`;
