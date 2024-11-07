/* eslint-disable @next/next/no-img-element */
"use client";
import styled from "styled-components";
import { Paragraph } from "../../theme/TextComponent";
import theme from "../../theme/theme";
import Button2 from '../../common/Button2';


const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 10rem 2rem;
  background-color: ${theme.colors.secondary};
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: left;
`;

const SmallHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1rem;
`;

const HeadingLine = styled.div`
  width: 50px;
  height: 2px;
  background-color: ${theme.colors.accent};
`;

const SmallHeading = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

 
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${theme.colors.text};
`;




export default function Career() {
  return (
    <Section id="career">
      <ImageWrapper>
        <img src="/carr.jpg" alt="About Us Presentation" />
      </ImageWrapper>

      <Content>
      <SmallHeadingWrapper>
        <SmallHeading>Career</SmallHeading>
        <HeadingLine />
        </SmallHeadingWrapper>
        <Title>Several Things Define Us As a Company</Title>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero atque optio explicabo ducimus? Sint optio repellat, repellendus amet quas temporibus architecto ipsum aspernatur obcaecati soluta officiis laborum labore eum eaque deserunt suscipit necessitatibus quaerat laudantium voluptatem qui cum? Vitae vero a expedita quos eligendi ut, repellendus cum fugit corrupti.
        </Paragraph>
        <Button2>Explore More</Button2>
      </Content>
    </Section>
  );
}
