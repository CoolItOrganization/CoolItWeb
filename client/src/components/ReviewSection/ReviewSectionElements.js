import styled from 'styled-components';
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReviewContainer  = styled.div`
    color: #141645;
    background: #5FA5F9;
    padding-bottom: 20px;

    @media screen and (max-width: 768px){
        // padding:100px 0;
    }
`

export const ReviewWrapper = styled.div`
    display: flex;
    z-index:1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right:auto;
    margin-left: auto;
    // padding: 0 24px ;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 870px){
        flex-direction: column;
    }
`

export const Heading= styled.h1`
    margin-bottom: 24px;
     padding-top: 40px;
    font-size: 48px;
//    height: 100%;
    font-weight: 600;
    font-family: 'georgia', serif;
    text-align: center;
    // color: ${({lightText}) => (lightText ? '#f7f8fa': '010606')};

    @media screen and (max-width: 870px){
        font-size:32px;
        padding-top: 24px;
    }
    @media screen and (max-width: 768px){
        font-size:32px;
        padding-top: 24px;
    }
    @media screen and (max-width: 480px){
        font-size:32px;
        padding-top: 20px;
    }
`
// export const StyledCarouselProvider = styled(CarouselProvider)`
//     width: 100%;
//     margin 0 50px;
//     border: 7px solid black;
//     height:350px;
// `;

export const Column1=styled.div`
    // margin-bottom: 15px;
    // padding: 0 15px;
    flex: 50%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 870px){
       width:100%
    }
`

export const SliderWrapper = styled.div`


    width:80%;
    @media screen and (max-width: 870px){
        width:50%
     }
     @media screen and (max-width: 870px){
        width:80%
     }
    
`




export const ImgWrapper= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width:80%;
    // // // margin: 0 0 10px 0;
    // // padding-right: 0;
    @media screen and (max-width: 870px){
        width:25%
     }
     @media screen and (max-width: 400px){
        display: none;
     }
`
// export const StyledSlide = styled(Slide)`
//     // margin: 5px;
//     // float: none;
//     // padding: 0;
//     // background: black;
//     // width:320px;
// `;
export const StyledSlider= styled(Slider)`
    
  
`;