import styled from 'styled-components';

export const InfoContainer  = styled.div`
    color: #141645;
    // background: green;
    position:relative;

    @media screen and (max-width: 768px){
        // padding:100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index:1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right:auto;
    margin-left: auto;
    // padding: 0 24px ;
    justify-content: center;
    @media screen and (max-width: 870px){
        height: 100%;
    }
`;

export const  InfoRow = styled.div`
    display: flex;
    // grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    
    // grid-template-areas: ${({imgStart})=>(imgStart? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width: 870px){
        flex-direction: column;
    }
`;

export const Column1=styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 50%;
    @media screen and (max-width: 768px){
        padding: 8px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 50%;
    @media screen and (max-width: 768px){
        padding: 8px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    // padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    line-height: 16px;
    font-weight: 700;
    latter-spacing: 1.4px;
    text-transform: 1.4px;
    margin-bottom: 16px;
    
`;

export const Heading= styled.h1`
    margin-bottom: 24px;
    margin-top: 40px;
    font-size: 48px;
//    height: 100%;
    font-weight: 600;
    font-family: 'georgia', serif;
    text-align: center;
    // color: ${({lightText}) => (lightText ? '#f7f8fa': '010606')};

    @media screen and (max-width: 870px){
        font-size:32px;
        margin-top: 24px;
    }
    @media screen and (max-width: 768px){
        font-size:32px;
        margin-top: 24px;
    }
    @media screen and (max-width: 480px){
        font-size:32px;
        margin-top: 20px;
    }
`;
export const Subtitle = styled.p`
    max-width:550px;
    // margin-bottom: 15px;
    font-size: 18px;
    // line-height: 24px;
    font-family: 'georgia', serif;
    word-spacing: 6px;
    font-weight: 500;
    text-align: center;
    padding: 0 15px;
    // color: ${({darkText})=> (darkText ? '#010606':'#fff')};

    @media screen and (max-width: 870px){
        font-size: 18px;
        padding: 0 20px;
        text-align: center;
    }

`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;

export const ImgWrap= styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    // margin: 0 10px;
    padding-right: 0;
`;