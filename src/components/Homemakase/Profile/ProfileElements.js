import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0px 5px 0px 5px;
  padding-bottom: 15px;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #dbd6a9;
  align-self: center;

  @media screen and (max-width: 475px) {
    width: 100%;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  display: flex;
`;

export const ProfileBio = styled.div`
  width: 100%;
  position: relative;
  padding-right: 20px;
`;
export const ProfileBioLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

export const ProfileBioRight = styled.div`
  height: 30%;

  :nth-child(1) {
    padding-top: 5px;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  height: 55%;
  text-align: center;
  padding-top: 10px;

  > h3 {
    line-height: 25px;
  }
`;

export const ProfileBioButton = styled.div`
  display: flex;
  margin: auto;
  position: relative;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  height: 100%;
  /* background-color: purple; */
`;

export const ProfileButton = styled.p`
  color: black;
  font-size: 0.6rem;
  display: flex;
  border: 1px black solid;
  width: 70px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  align-self: baseline;

  :hover {
    background-color: #dbd6a9;
  }
`;
