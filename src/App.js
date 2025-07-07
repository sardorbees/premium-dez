import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState , useEffect,  } from 'react';
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
import './components/assents/js/clickDetector';

function App() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const blocked = localStorage.getItem('blocked') === 'true';
    setIsBlocked(blocked);
  }, []);

  if (isBlocked) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>
        <h1>⛔ Доступ заблокирован</h1>
        <p>Обнаружено подозрение на автоклик. Пожалуйста, обратитесь к администратору.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/tariffcardlist' element={<TariffCardList />} />
            <Route path='/our-faqs' element={<OurFaqs />} />
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