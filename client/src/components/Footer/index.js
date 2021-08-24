import React from "react";
import { FaFacebook, FaInstagram, FaYahoo, FaYoutube } from "react-icons/fa";
import {FooterContainer,SocialIcon,SocialIconLink,SocialLogo,ImgWrapper,SocialMediaWrap,WebsiteRight,Img,Img2,DreamDesign} from "./FooterElement";
import image from '../../images/endlogo.png';
import dream from '../../images/1234.png';
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaWrap>
       
          <ImgWrapper>
            <Img src={image} />
          </ImgWrapper>
        
        <WebsiteRight>
          COOLIT © {new Date().getFullYear()} All right reserved.
        </WebsiteRight>
        <SocialIcon>

          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Youtube">
            <FaYoutube />
          </SocialIconLink>
        </SocialIcon>
      </SocialMediaWrap>
      <DreamDesign>
    
Proudly Designed And Created By
      <ImgWrapper>
            <Img2 src={dream} />
          </ImgWrapper>
      </DreamDesign>
    </FooterContainer>
  );
};

export default Footer;
