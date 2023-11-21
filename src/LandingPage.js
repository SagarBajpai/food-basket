import * as React from "react";
import styled from "styled-components";

function App(props) {
  return (
    <Div>
      <Img loading="lazy" srcSet="./landing-image-min.png" />
      <AboutUs id="about-us">
        <AboutUsContainer>
          <Column>
            <Div4>
              <Title>About Us</Title>
              <Div6>
                Welcome to Food Basket, a proud sub-brand of ‘ALM Industries
                Ltd.,’ an esteemed food processing enterprise with 38 years of
                excellence. Founded in Saharanpur, UP, ALM Industries
                specializes in Frozen Halal Buffalo & Veal Meat, Sheep, Goat,
                and Chicken products. Our ISO & HACCP  accredited plant has been
                operational since 1999, and is APEDA approved for export,
                reaching several countries across the globe.
                <br />
                <br />
                At Food Basket, passion meets perfection in every bite as you
                embark on a culinary journey with our premium chicken and mutton
                delights. Redefining quality is our mantra – from sourcing to
                delivery, we uphold non-negotiable standards of freshness,
                flavor, and ethical practices.
                <br />
                <br />
                Be it succulent chicken breasts, juicy drumsticks, tender mutton
                chops, or flavorful roasts, each piece is meticulously prepared
                for an exceptional dining experience.
                <br />
                <br />
                At Food Basket, we take pride in our selection of quality cuts,
                offering a variety to cater to your specific culinary desires.
                Join us in savoring the extraordinary – where food isn't just a
                meal; it's an experience crafted with passion and served with
                pride.
                <br />
              </Div6>
              <ReadMore href="/about-us">Read more</ReadMore>
            </Div4>
          </Column>
          <Column2>
            <Video
              loading="lazy"
              src="/video.mp4"
              controls={true}
              poster="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6c794f-fa93-4360-8589-f19f7bbdae8b?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
            />
          </Column2>
        </AboutUsContainer>
      </AboutUs>

      <Title id="our-products">OUR PRODUCTS</Title>

      <OurProducts>
        <OurProductsContainer>
          <Product>
            <ProductContainer>
              <Img3
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e8cdd57-d224-4dcc-8cc3-49f3ea0ae9c3?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <Div12>Chicken</Div12>
              <Div13>
                We source chicken from trusted suppliers dedicated to high
                animal welfare standards. Our commitment to freshness includes
                meticulous care in sourcing and delivery, with strict
                temperature control. Our chicken is natural and antibiotic-free,
                wholesome, and additive-free.
              </Div13>
            </ProductContainer>
          </Product>
          <Product>
            <ProductContainer>
              <Img3
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20c81078-51be-4f16-a4f5-1dfbfb3b52ba?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <Div12>RED MEAT</Div12>
              <Div13>
                Careful sourcing from quality, sustainable suppliers, our red
                meat selection offers superior cuts for tenderness and flavor,
                meeting high standards. Ethical practices prioritize animal
                welfare, contributing to a healthy and humane environment.
              </Div13>
            </ProductContainer>
          </Product>
          <Product>
            <ProductContainer>
              <Img3
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16206258-72f8-4764-a5bb-a02b199ef20f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <Div12>mUTTON</Div12>
              <Div13>
                We source top-quality, tender mutton from trusted farms
                prioritizing animal well-being. Meticulous processes ensure only
                the finest cuts reach your plate, reflecting our commitment to
                ethical and sustainable farming.
              </Div13>
            </ProductContainer>
          </Product>
        </OurProductsContainer>
      </OurProducts>

      <Title id="our-certifications">OUR CERTIFICATIONS</Title>
      <Div21>
        <Img6
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52516277-3d9e-4b1d-acff-1f71786051f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
        />
        <Img6
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ff5c59f-ef37-44d3-883e-efbae372be6a?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
        />
        <Img6
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93444a68-0770-4250-8284-9470663392bc?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
        />
        <Img6
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0236aa76-e022-40b6-a12b-09ab1c95f429?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
        />
        <Img6
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35ccb803-5f92-4c2f-a9ad-160910534322?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
        />
      </Div21>

      <Title id="our-outlets">OUT OUTLETS</Title>
      <OurOutlets>
        <OurOutletsContainer>
          <Outlet>
            <div>
              <OutletImage
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a03976e-d9a4-43ee-b553-8ec91657d42f?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
            </div>
            <Div27>
              GF, Shop No. 1, Near Arbi <br />
              Madarsa, Saharanpur
            </Div27>
          </Outlet>
          <Outlet>
            <OutletImage
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/45b30139-6266-447c-ab9b-176ba4a045f6?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
            />
            <Div29>
              <ul>
                <li>
                  Rasoolpur- Near Star Palace, Behat rd <br />
                  (9027377999)
                </li>
                <li>
                  Dehradun- Van Vihar, mehunwala, uK <br />
                  (7668855468)
                </li>
                <li>
                  Gangoh- metador stand, near sabri palace, shop no. a515, main
                  rd
                  <br />
                  (9058202942)
                </li>
                <li>
                  Roorkee- Doon school rd, near doon school, green park colony,
                  mahigran <br />
                  (7505071663)
                </li>
              </ul>

              <br />
            </Div29>
          </Outlet>
        </OurOutletsContainer>
      </OurOutlets>
      <Title id="connect-with-us">CONNECT WITH US</Title>
      <Footer>
        <FooterContainer>
          <Contact>
            <ContactContainer href="tel:+918279660266" __target="blank">
              <ContactIcon
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db3052eb-c0d9-42d2-9d8b-c3955e64480e?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <ContactDetail>+91 8279660266</ContactDetail>
            </ContactContainer>
          </Contact>
          <Contact>
            <ContactContainer
              href="https://www.instagram.com/foodbasket0"
              __target="blank"
            >
              <ContactIcon
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/833a577c-961f-4b1e-9bfd-7e0c720ab454?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <ContactDetail>foodbasket0</ContactDetail>
            </ContactContainer>
          </Contact>
          <Contact>
            <ContactContainer
              __target="blank"
              href="https://www.google.com/maps/place/FOOD+BASKET/@29.9788734,77.5468931,15z/data=!4m14!1m7!3m6!1s0x390e95c6a0b74527:0xdde58a3dd34e9a6c!2sFOOD+BASKET!8m2!3d29.9788734!4d77.5468931!16s%2Fg%2F11kj7604ct!3m5!1s0x390e95c6a0b74527:0xdde58a3dd34e9a6c!8m2!3d29.9788734!4d77.5468931!16s%2Fg%2F11kj7604ct?entry=ttu"
            >
              <ContactIcon
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a8d2b0-bc4d-4aaf-9caf-89bc2956a8c7?apiKey=29505a2a782d4e1b9d3e02ed60e35fde&"
              />
              <ContactDetail>
                gF, Shop No. 1, Near Arbi Madarsa, Saharanpur
              </ContactDetail>
            </ContactContainer>
          </Contact>
        </FooterContainer>
      </Footer>
    </Div>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img``;

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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
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

const Div4 = styled.div`
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

const Div6 = styled.div`
  color: #fff;
  text-align: justify;
  align-self: stretch;
  margin: 33px -20px 0 0;
  font: 400 20px/24px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ReadMore = styled.a`
  color: #fffcfc;
  border-radius: 52px;
  border: 3px solid #f8c443;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(219, 184, 97, 0.12);
  margin-top: 33px;
  width: 183px;
  max-width: 100%;
  align-items: center;
  padding: 29px 20px;
  font: 700 19px/23px Lato, sans-serif;
  text-align: center;
  cursor: default;
  @media (max-width: 768px) {
    font: 700 12px/12px Lato, sans-serif;
    padding: 15px 27px;
    width: 65px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 45px;
  @media (max-width: 991px) {
    width: 100%;
    width: 80%;
    margin-left: 0px;
  }
`;

const Video = styled.video`
  width: 100%;
  overflow: hidden;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const OurProducts = styled.div`
  align-self: center;
  margin-top: 99px;
  width: 100%;
  max-width: 1121px;
  margin-bottom: 200px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    margin-bottom: 100px;
  }
`;

const OurProductsContainer = styled.div`
  gap: 20px;
  display: flex;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    padding: 0 20px;
  }
`;

const Product = styled.div`
  display: flex;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductContainer = styled.div`
  border-radius: 50px;
  border: 1px solid #dbb861;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 34px 32px 23px 31px;
  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 20px;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1.09;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
`;

const Div12 = styled.div`
  color: #fff;
  text-transform: uppercase;
  align-self: center;
  margin-top: 37px;
  white-space: nowrap;
  font: 700 24px/29px Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div13 = styled.div`
  color: #e3e1d7;
  text-align: justify;
  align-self: center;
  margin-top: 17px;
  max-width: 247px;
  font: 400 14px/21px Lato, sans-serif;
`;

const Title = styled.div`
  color: #fffcfc;
  text-align: center;
  text-transform: uppercase;
  align-self: center;
  max-width: 634px;
  font: 700 50px/61px Montserrat, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 54px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Div21 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 44px;
  width: 100%;
  max-width: 1035px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 150px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 100px;
  }
`;

const Img6 = styled.img`
  width: 158px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
  @media (max-width: 360px) {
    width: 54px;
  }
`;

const OurOutlets = styled.div`
  align-self: center;
  margin-top: 83px;
  width: 971px;
  max-width: 100%;
  margin-bottom: 150px;
  @media (max-width: 991px) {
    margin-bottom: 100px;
    margin-top: 10px;
  }
`;

const OurOutletsContainer = styled.div`
  gap: 20px;
  display: flex;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    margin-top: 0px;
  }
`;

const Outlet = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OutletImage = styled.img`
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div27 = styled.div`
  color: #656561;
  text-align: center;
  text-transform: capitalize;
  font: 700 23px/28px Montserrat, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div29 = styled.div`
  color: #656561;
  text-align: center;
  text-transform: capitalize;
  font: 700 14px/17px Montserrat, sans-serif;
`;

const Footer = styled.div`
  align-self: center;
  width: 941px;
  max-width: 100%;
  margin: 122px 0 100px;
  @media (max-width: 991px) {
    margin: 0 0 50px;
  }
`;

const FooterContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContactContainer = styled.a`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContactIcon = styled.img`
  width: 45px;
  overflow: hidden;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 30px;
  }
  @media (max-width: 400px) {
    width: 20px;
  }
`;

const ContactDetail = styled.div`
  color: #9f9c87;
  text-align: center;
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 35px;
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
