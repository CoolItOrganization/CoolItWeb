import React from 'react';
import image from '../../images/service.png';
import Install from "../Install";
import Repair from "../Repairs";
import {
    ServiceContainer,
    ServiceWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
    ImgWrap,
  } from "./ServiceElements";

const Service = () => {
    return (
      <div id="Service">
        <ServiceContainer id="Service">
      <ServiceWrapper>
        <Heading>Our Services</Heading>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Air Conditioning Service</TopLine>
              <Subtitle>
              Master works is a leading SriLanka Air Conditioning company for new residential systems. We are the company for heating and Air Conditioning repairs in SriLanka. We provide quality AC unit repairs for our customers at reasonable prices and believe our success comes from our commitment to our customers and our employees. Whether you need AC Service, a new heating and cooling system or just a second opinion, master works is the contractor you want to call!
                
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={image} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </ServiceWrapper>
    </ServiceContainer>
    <Install/>
    <Repair/>
    </div>
    )
}

export default Service;
