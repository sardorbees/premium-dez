import './App.css';
import { BrowserRouter as Router, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useState, useEffect, } from 'react';
import axios from 'axios';

import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import OurFaqs from './components/our-faqs/OurFaqs';
import OurFeatures from './components/our-features/OurFeatures';
import OurPricing from './components/our-pricing/OurPricing';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Blog from './components/blog/Blog';
import Projects from './components/projects/Projects';
import ImageGallery from './components/image-gallery/ImageGallery';
import VideoGallery from './components/video-gallery/VideoGallery';
import Testimonials from './components/testimonials/Testimonials';
import BlogSingle from './components/blog-single/BlogSingle';
import PostDetail from './components/postdetail/PostDetail';
import PostList from './components/postlist/PostList';
import TariffCardList from './components/tariffcardlist/TariffCardList';
import Comments from './components/comments/Comments';
import { ThemeProvider } from './components/themetoggle/ThemeContext';
import './components/assents/css/styles.css';
// import ClickTracker from './components/clicktracker/ClickTracker';
import ServiceList from './components/servicelist/ServiceList';
import Language from './components/language/Language';
import ServiceCard from './components/servicecard/ServiceCard';
import './components/i18n';

import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import EditProfile from './components/pages/EditProfile'
import Dashboard from './components/pages/Dashboard'
import Logout from './components/pages/Logout'
import Navbar from './components/navbar/Navbar';
import PrivateRoute from "./components/privateroute/PrivateRoute";
import ChangePassword from './components/changepassword/ChangePassword';
import PhoneVerify from "./components/phoneverify/PhoneVerify"; // ← добавлено

function App() {
  // const [blocked, setBlocked] = useState(false);
  // const [message, setMessage] = useState("");

  // const sendClick = async () => {
  //   try {
  //     const res = await axios.post("http://127.0.0.1:8000/api/clickapp/api/track-click/");
  //     if (res.data.blocked) {
  //       setBlocked(true);
  //       setMessage("Вы заблокированы.");
  //     }
  //   } catch (err) {
  //     if (err.response && err.response.status === 403) {
  //       setBlocked(true);
  //       setMessage(err.response.data.message);
  //     } else {
  //       console.error("Ошибка:", err);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const clickHandler = () => {
  //     sendClick();
  //   };

  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // }, []);

  // if (blocked) {
  //   return (
  //     <div style={{ textAlign: "center", marginTop: "100px", color: "red", fontSize: "20px" }}>
  //       <h2>{message}</h2>
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      {/* <ClickTracker /> */}
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<Logout />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-phone" element={<PhoneVerify />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path='/about' element={<About />} />
            <Route path='/servicecard' element={<ServiceCard />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/tariffcardlist' element={<TariffCardList />} />
            <Route path='/our-faqs' element={<OurFaqs />} />
            <Route path='/servicelist' element={<ServiceList />} />
            <Route path='/language' element={<Language />} />
            <Route path='/our-features' element={<OurFeatures />} />
            <Route path='/our-pricing' element={<OurPricing />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:slug" element={<PostDetail />} />
            <Route path='/blog-single' element={<BlogSingle />} />
            <Route path='/video-gallery' element={<VideoGallery />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/image-gallery' element={<ImageGallery />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={
              <h2 style={{
                textAlign: 'center',
                paddingTop: '85px',
                fontSize: '80px',
                marginBottom: '495px'
              }}>
                <br /><br /><br /> 404 - Страница не найдена <br />
              </h2>
            } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;