import styled from 'styled-components';


export const FooterContainer = styled.div`
color:#141645 ;
background: #c2ccc5;
display:flex;
flex-direction: column;
border-bottom: 8px solid #141645;
border-top: 2px solid #141645;
`;
export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
     @media screen and (max-width:870px){
         flex-direction: column;
         height: auto;
     }
`;
 export const ImgWrapper= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 555px;
    height: 100%;
    margin: 0 20px;
    @media screen and (max-width:870px){
       margin: 15px 0;
       padding: 0 20px;
    }
`;

export const Img = styled.img`
    width: 120px;
    
`;
export const Img2 = styled.img`
    width: 80px;
    
`;
 export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    width: 140px;
    margin: 0 20px;
    @media screen and (max-width:870px){
        margin: 15px 0;
        padding: 0 20px;
     }
 `;


 export const WebsiteRight = styled.small`
    font-size:24px;
    margin: 0 20px;

    @media screen and (max-width:870px){
        margin: 15px 0;
        padding: 0 20px;
        font-size:14px;
     }
 `;

 export const SocialIconLink = styled.a`
 font-size:24px;
 color:#141645 ;
 `;
 export const DreamDesign = styled.div`
     display:flex;
     justify-content: center;
     align-items: center;
     padding: 10px 0;
    //  border-top: 1px solid black;
    //  background: gray;
     @media screen and (max-width:600px){
        flex-direction: column;
        height: auto;
    }

 `;


