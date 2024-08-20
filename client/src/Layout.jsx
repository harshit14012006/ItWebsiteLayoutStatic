import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SstHome from "./pages/SstHome";
import SstContactus from "./pages/SstContactus";
import SstCareer from "./pages/SstCareer";
import SstAboutUs from "./pages/SstAboutUs.jsx";
import LogoDesigning from "./components/LogoDesigning.jsx";
import WebDesigning from "./components/WebDesigning.jsx";
import SoftwareDevelopment from "./components/SoftwareDevelopment.jsx";
import Maintenance from "./components/Maintenance.jsx";
import FlashWebsite from "./components/FlashWebsite.jsx";
import StaticWebsite from "./components/StaticWebsite.jsx";
import DynamicWebsite from "./components/DynamicWebsite.jsx";
import DigitalMarketing from "./components/DigitalMarketing.jsx";
import Ecommerce from "./components/Ecommerce.jsx";
import WpVoiceCalls from "./components/WpVoiceCalls.jsx";
import WpMessage from "./components/WpMessage.jsx";
import WpApis from "./components/WpApis.jsx";
import MobileApp from "./components/MobileApp.jsx";
import ResponsiveWebsite from "./components/ResponsiveWebsite.jsx";
import SingleWebsite from "./components/SingleWebsite.jsx";
function Layout() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SstHome />} />
          <Route path="/aboutus" element={<SstAboutUs />} />
          <Route path="/web-development-designing" element={<WebDesigning />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/responsive-web" element={<ResponsiveWebsite />} />
          <Route path="/single-page-web" element={<SingleWebsite />} />
          <Route path="/dynamic-web" element={<DynamicWebsite />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />sat
          <Route path="/voice-calls" element={<WpVoiceCalls />} />
          <Route path="/whatsapp-messages" element={<WpMessage />} />
          <Route path="/whatsapp-apis" element={<WpApis />} />
          <Route path="/logo-designing" element={<LogoDesigning />} />
          <Route path="/career" element={<SstCareer />} />
          <Route path="/contact-us" element={<SstContactus />} />
          <Route path="/flash-web" element={<FlashWebsite />} />
          <Route path="/static-web" element={<StaticWebsite />} />
          <Route path="/dynamic-web" element={<DynamicWebsite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
