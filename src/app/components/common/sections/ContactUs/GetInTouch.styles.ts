import styled from "styled-components";


 export const MainSection = styled.main`
 padding: 100px 180px;
 

 @media (max-width: 768px) {
   padding: 50px 40px;
 }
`;

export const ShadowDiv = styled.div`
 box-shadow: -2px 5px 60px 0px #969090;
 border-radius: 60px;
 margin-top: 70px;
`;

export const Section = styled.div`
 display: flex;
 justify-content: center;
 border: 2px solid black;
 border-radius: 55px;
 box-shadow: 0px -13px #a68ea8;
 height: 600px;
`;

export const TextSection = styled.div`
 width: 60%;
 padding: 20px;

 @media (max-width: 768px) {
   width: 100%;
 }
`;

export const Heading = styled.h1`
 font-size: 55px;
 font-weight: 600;
`;

export const Paragraph = styled.p`
 font-size: 18px;
 line-height: 40px;
 color: #535152;
`;

export const Form = styled.div`
 display: flex;
 width: 100%;
 padding: 10px 0;
 gap: 30px;
`;

export const FormSection = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
`;

export const Label = styled.label`
 font-size: 15px;
 font-weight: 600;
 margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
 display: flex;
 align-items: center;
 border: 2px solid #535152;
 border-radius: 50px;
 padding: 10px 15px;

 svg {
   color: #535152;
   margin-right: 10px;
 }
`;

export const InputField = styled.input`
 border: none;
 outline: none;
 width: 100%;
 font-size: 15px;

 &::placeholder {
   color: black;
 }
`;

export const MessageSection = styled.div`
 display: flex;
 flex-direction: column;
`;

export const TextAreaLabel = styled.label`
 font-size: 15px;
 font-weight: 600;
 padding-bottom: 10px;
`;

export const TextArea = styled.textarea`
 border: 2px solid #535152;
 border-radius: 15px;
 padding: 20px;
 font-size: 15px;
 margin-bottom: 10px;

 &::placeholder {
   color: black;
 }
`;

export const Button = styled.button`
 background: #a68ea8;
 padding: 20px 80px;
 margin-top: 20px;
 border-radius: 50px;
 color: black;
 font-weight: 400;
 font-size: 18px;
 cursor: pointer;
 border: none;

 &:hover {
   background: #8e7298;
 }
`;

export const ImageSection = styled.div`
 .Image {
   height: fit-content;
   width: 500px;
 }

 @media (max-width: 768px) {
   display: none;
 }
`;