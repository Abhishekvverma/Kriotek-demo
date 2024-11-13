/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import {
  Section,
  ImageWrapper,
  Content,
  SmallHeadingWrapper,
  HeadingLine,
  SmallHeading,
  Title,
} from "./AboutUs.styles";
import { Paragraph } from "../../../theme/TextComponent";
import Button2 from "../../../common/Button/Button2";

const AboutUs: FC = () => {
  return (
    <Section id="about">
      <ImageWrapper>
        <img src="/about.jpg" alt="About Us Presentation" />
      </ImageWrapper>

      <Content>
        <SmallHeadingWrapper>
          <SmallHeading>About Us</SmallHeading>
          <HeadingLine />
        </SmallHeadingWrapper>
        <Title>Creative & Modern Agency</Title>
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
};

export default AboutUs;
