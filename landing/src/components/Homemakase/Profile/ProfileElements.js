import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  margin: 0px 5px 0px 5px;
  position: relative;
  flex-direction: row;

  justify-content: space-between;
`;

export const ProfileBio = styled.div`
  height: 100%;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  display: flex;
  background-color: blue;
`;

export const ProfileCard = styled.div`
  width: 500px;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.3);
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

export const HeaderText = styled.div`
  color: #dbd6a9;
  font-size: 72px;
  display: flex;
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
    background-color: pink;
  }
`;
