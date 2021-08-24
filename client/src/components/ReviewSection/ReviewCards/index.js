import React from "react";
import styled from "styled-components";
import image from "../../../images/Ok.png"

const CardContainer = styled.div`
display:flex;
  width: 100%;
height: 350px;
overflow: auto;
  background-color: #fff;
  display:flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    text-align: center;
  border-radius: 10px;
  border: 3px solid #141645;
  color: #141645;
  
//   background:#5FA5F9; 

padding 0 10px;
  
`;
const StyledSpan = styled.span`
    font-weight: 850;
    color: black;
    font-family: 'georgia', serif;

`;
const StyledPar = styled.p`
font-family: 'georgia', serif;


`;
const Details = styled.p`
    font-style: italic;
    font-family: 'georgia', serif;
    margin: 20px 0;

`;

const Line = styled.hr`
color: rgba(0, 0, 0, 0.65);
// margin-left: -100px;

`;
const Img = styled.img`
color: rgba(0, 0, 0, 0.65);
width: 60px;

`;

const ReviewCard = ({index}) => {
  return (
    <CardContainer>
        <Img src={image}/>
      <StyledPar>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        sieap into electronic typesetting, remaining esFf
        Lorem Ipsum is simply dummy text of the printing and typesetting
        has been the industry's standard dummy text ever
        
      </StyledPar>
      
      <Details><Line/><StyledSpan>nuvin samadhi</StyledSpan> from mattegoda</Details>
    </CardContainer>
  );
};

export default ReviewCard;
