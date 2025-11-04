import styled from "styled-components";


export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const SHeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const SHeaderLogo = styled.div`
  width: 85px;
`;

export const SHeaderLogoLight = styled.img`
  width: 85px;
`;

export const SHeaderLogoDark = styled.img`
  width: 85px;
`;

export const SHeaderNavigation = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SButtonWrapper = styled.div`
  margin-right: 20px;
`;

export const SHeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }
`;

export const SHeaderButtonLink = styled.a`
  color: #FFFFFF;
`;

export const SHeaderLink = styled.div`
  cursor: pointer;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  &:hover {
    color: #33399b;
    &::after {
      border-left: 1.9px solid #33399b;
      border-bottom: 1.9px solid #33399b;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;
