import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#b6d1e3, #ebf8e1, #2b495c);
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: auto;
  display: flex;
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

export const DescText = styled.p`
  color: black;
  font-size: 24px;
  display: flex;
`;
