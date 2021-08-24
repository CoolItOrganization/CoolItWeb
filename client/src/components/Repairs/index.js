import React from 'react';
import image from '../../images/repair.png';
import {
    RepairContainer,
    RepairWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    ImgWrap,
  } from "./RepairElements";

const Repair = () => {
    return (
        <RepairContainer>
      <RepairWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Air Conditioning Repair</TopLine>
              <Subtitle>
              Specializing in residential and commercial air conditioner repair, Master works is committed to keeping our clients in SriLanka, TX cool. We are The SriLanka HVAC Contractor to call when you need service.

Just like anywhere, in Sri Lanka, Air conditioner repair is sometimes necessary. When it is, you want to deal with a company who will treat you right! The professionals at Master Works encourage you to shop prices with other air conditioning companies! We are willing to bid against any other air conditioning contractor in the industry. If given the opportunity, we will beat them, and help you with warranties and tax credits.
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={image} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </RepairWrapper>
    </RepairContainer>
    )
}

export default Repair;
