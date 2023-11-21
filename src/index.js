import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import { styled } from "styled-components";

const App = () => {
  const handleClick = (hashUrl) => {
    window.open(`/#${hashUrl}`, "_self");
  };
  return (
    <Div>
      <Header>
        <HeaderContainer>
          <HeadItem onClick={() => handleClick("home")}>
            &#8205; &#8205; &#8205; &#8205; HOME
          </HeadItem>
          <HeadItem href="/about-us">
            ABOUT &#8205; &#8205; &#8205; &#8205;
          </HeadItem>
          <Logo loading="lazy" srcSet="./logo-min.png" width="367px" />
          <HeadItem onClick={() => handleClick("our-products")}>
            PRODUCTS
          </HeadItem>
          <HeadItem onClick={() => handleClick("connect-with-us")}>
            CONTACT US
          </HeadItem>
        </HeaderContainer>
      </Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Div>
  );
};

const Div = styled.div`
  background-color: #231f20;
`;

const Header = styled.div`
  padding: 0 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: -74px;
  padding-top: 30px;
  @media (max-width: 1196px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: -30px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    margin-bottom: -20px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    margin-bottom: -20px;
  }
`;

const HeadItem = styled.a`
  font-size: 30px;
  color: #dbb861;
  font-weight: 400;
  margin: 0 5px;
  cursor: pointer;
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 10px;
  }
  @media (max-width: 410px) {
    font-size: 8px;
  }
  @media (max-width: 360px) {
    font-size: 8px;
  }
  &:hover {
    color: #fff;
  }
`;

const Logo = styled.img`
  width: 367px;
  height: 275px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 200px;
    height: auto;
  }
  @media (max-width: 576px) {
    width: 120px;
  }
`;

// write react-router-dom Routes code here and create two routes with name Home and AboutUs

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
