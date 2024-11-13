"use client";
import React from 'react';
import Image from 'next/image';
import contactImage from '../../../../../../public/contact (2).jpg';
import { FaUser, FaEnvelope } from "react-icons/fa";
import Button2 from "../../Button/Button2";
import { MainSection,ShadowDiv,Section,TextSection,Heading,Paragraph,Form,FormSection,Label,InputWrapper,InputField,MessageSection,TextArea,TextAreaLabel,ImageSection } from './GetInTouch.styles';

const GetInTouch: React.FC = () => {
  return (
    <MainSection id="contact">
      <ShadowDiv>
        <Section>
          <TextSection>
            <Heading>Get in touch</Heading>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus accusamus quis mollitia ullam, doloribus dignissimos totam iusto pariatur placeat?</Paragraph>
            
            <Form>
              <FormSection>
                <Label htmlFor="name">Name</Label>
                <InputWrapper>
                  <FaUser />
                  <InputField type="text" id="name" placeholder="Abhishek Verma"/>
                </InputWrapper>
              </FormSection>

              <FormSection>
                <Label htmlFor="email">Email</Label>
                <InputWrapper>
                  <FaEnvelope />
                  <InputField type="email" id="email" placeholder="example@gmail.com" />
                </InputWrapper>
              </FormSection>
            </Form>

            <MessageSection>
              <TextAreaLabel htmlFor="message">Message</TextAreaLabel>
              <TextArea id="message" placeholder="Write here..." rows={6} ></TextArea>
            </MessageSection>

            <Button2 type="submit">Submit</Button2>
          </TextSection>

          <ImageSection>
            <Image
              className="Image"
              src={contactImage}
              alt="Contact Us Image"
              style={{
                borderTopRightRadius: '55px',
                borderBottomRightRadius: '55px',
                height: "100%"
              }}
            
            />
          </ImageSection>
        </Section>
      </ShadowDiv>
    </MainSection>
  );
};

export default GetInTouch;
