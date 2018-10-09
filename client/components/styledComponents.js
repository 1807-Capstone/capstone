import styled from 'styled-components';

export const StyledHeader = styled.h1`
  width: 100vw;
  height: 5vh;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

export const Box = styled.div`
  height: 35vh;
  width: 100vw;
  margin: 20px;
`;

export const StyledName = styled.h1`
  width: 95vw;
  height: 4vh;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  background: white;
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
  height: 80vh;
  background: rgb(255, 255, 255, 0.9);
  position: fixed;
  top: 6vh;
  width: 45vw;
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

export const StyledBox = styled.div`
  background: #35b3bf;
  height: 90vh;
`;

export const StyledBox2 = styled(StyledBox)`
  background: #16a1ae;
`;

export const StyledHeader1 = styled(StyledHeader)`
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  font-weight: 600;
  font-size: 15px;
  width: 100vw;
`;

export const UserBox = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 90vh;
`;

export const Input = styled.input`
  height: 6vh;
  border-radius: 10px;
  width: 50vw !important;
  position: relative;
  margin: 5px !important;
  outline: none;
`;

export const Button = styled.button`
  position: relative;
  margin: 10px;
`;

export const CompDiv1 = styled(MobileDiv3)`
  height: 45vh;
  position: relative;
  top: 20px;
`;

export const CompDiv2 = styled(MobileDiv4)`
  height: 45vh;
  position: relative;
  top: 20px;
  padding: 20px;
`;

export const LoginDiv = styled.div`
  width: 100vw;
  text-align: center;
`;

export const StyledButton = styled.button`
  height: 4vh;
  width: 45vw;
  background: #35b3bf;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  color: white;
  outline: none;
  position: fixed;
  top: 86vh;
`;

export const StyledSearchButton = styled(StyledButton)`
  left: 45vw;
  width: 55vw;
`;

export const FilterBox = styled.div`
  background: transparent;
  height: 20vh;
  width: 100vw;
`;
