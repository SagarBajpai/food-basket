import React from "react";
import { styled } from "styled-components";

const Index = () => {
  return (
    <Div>
      <AboutUs id="about-us">
        <AboutUsContainer>
          <Column>
            <Div1>
              <Title>About Us</Title>
              <Img loading="lazy" src="/about-us-image-1-min.png" />
              <Content>
                Welcome to Food Basket, a proud sub-brand of ‘ALM Industries
                Ltd.,’ an esteemed enterprise founded 38 years ago in
                Saharanpur, UP. ALM Industries is a premier export-oriented,
                integrated food processing entity, specializing in Frozen Halal
                Buffalo & Veal Meat (Boneless), Sheep & Goat, and Chicken
                products.
                <br />
                <br />
                Our plant boasts the latest ISO & HACCP accreditations and has
                been operational since 1999. Approved by APEDA for export of
                chilled and frozen meat, we reach countries across the Gulf,
                Egypt, Malaysia, China, West Africa, Iraq, Armenia, Algeria, and
                more. The Government of India recognizes us as a ‘Star Export
                House,’ and we hold membership in Chambers of Commerce.
                <br />
                <br />
                At Food Basket, passion meets perfection in every bite as you
                embark on a culinary journey with our premium chicken and mutton
                delights. Redefining quality is our mantra – from sourcing to
                delivery, we uphold non-negotiable standards of freshness,
                flavor, and ethical practices.
                <br />
              </Content>
            </Div1>
          </Column>
          <Column1>
            <Img1 loading="lazy" src="/about-us-image-1-min.png" />
          </Column1>
        </AboutUsContainer>
        <AboutUsContainer style={{ marginTop: "70px" }}>
          <Column2>
            <Img2 loading="lazy" src="/about-us-image-2-min.png" />
          </Column2>
          <Column>
            <Div1>
              <Content style={{ paddingTop: "100px" }}>
                At Food Basket, passion meets perfection in every bite as you
                embark on a culinary journey with our premium chicken and mutton
                delights. Redefining quality is our mantra – from sourcing to
                delivery, we uphold non-negotiable standards of freshness,
                flavor, and ethical practices.
                <br />
                <br />
                Our commitment extends to fostering strong partnerships with
                farmers who share our dedication to quality. Only the finest
                chicken and mutton make the cut, reflecting our commitment to
                ethical and sustainable farming practices.
                <br />
                <br />
              </Content>
            </Div1>
          </Column>
        </AboutUsContainer>
      </AboutUs>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutUs = styled.div`
  align-self: center;
  margin-top: 286px;
  width: 100%;
  max-width: 1033px;
  margin-bottom: 150px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const AboutUsContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

const Title = styled.div`
  color: #fffcfc;
  text-transform: uppercase;
  max-width: 634px;
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 991px) {
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div1 = styled.div`
  display: flex;
  margin-top: 11px;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Content = styled.div`
  color: #fff;
  text-align: justify;
  align-self: stretch;
  margin: 33px -20px 0 0;
  font-size: 19px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  margin-left: 45px;
  padding-top: 40px;
  @media (max-width: 991px) {
    width: 100%;
    width: 80%;
    margin-left: 0px;
  }
`;

const Img = styled.img`
  width: 100%;
  overflow: hidden;
  display: none;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    display: unset;
  }
`;

const Img1 = styled.img`
  width: 100%;
  overflow: hidden;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;
  padding-top: 40px;
  @media (max-width: 991px) {
    width: 100%;
    width: 80%;
    margin-left: 0px;
  }
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const Img2 = styled.img`
  width: 100%;
  overflow: hidden;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Index;
