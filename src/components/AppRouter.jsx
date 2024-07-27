import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from 'pages/About';
import Error from 'pages/Error';
import Posts from 'pages/Posts';
import Home from 'pages/Home';
import { PostDetails } from 'pages/PostDetails';

const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get('p');
    if (path) {
      navigate(path, { replace: true });
    }
  }, [location, navigate]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
