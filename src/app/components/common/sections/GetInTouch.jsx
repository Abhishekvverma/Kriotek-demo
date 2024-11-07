"use client";
import styled from "styled-components";
import { Heading } from "../../theme/TextComponent";
import theme from "../../theme/theme";
import Button2 from "../../common/Button2";
import { FaUser, FaEnvelope } from "react-icons/fa";


// Section  with split layout
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch; 
  padding: 8rem;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  min-height: 500px; 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

// Left side (Form)
const LeftContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff; 
  border-radius: 15px 0 0 15px;

  @media (max-width: 768px) {
    border-radius: 15px 15px 0 0;
  }
`;

// Heading and description
const StyledHeading = styled(Heading)`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  color: ${theme.colors.primaryText}; 
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 2rem;
  text-align: left;
`;


const FormGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  color: #888;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px; 
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  resize: vertical;
  font-size: 1rem;
`;


const ButtonWrapper = styled.div`
  text-align: left;
`;

// Right side Image
const RightImage = styled.div`
  flex: 1;

  height: 100%;
  border-radius: 0 15px 15px 0;
  background-image: url('/contact (2).jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
overflow: hidden;

  
`;




export default function GetInTouch() {
  return (
  
    <Section id="contact">
       <div style={{display:'flex'}}>
      <LeftContent>
      
        <StyledHeading>Get in touch</StyledHeading>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever.
        </Description>
        <form>
          <FormGroup>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            <Input type="text" placeholder="John Deo" required />
          </FormGroup>
          <FormGroup>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <Input type="email" placeholder="johndeo.20@email.com" required />
          </FormGroup>
          <TextArea placeholder="Write here..." required />
          <ButtonWrapper>
            <Button2 type="submit">Submit</Button2>
          </ButtonWrapper>
        </form>
       
      </LeftContent>
     
      <RightImage/>
      </div>
    </Section>
    
  );
}
