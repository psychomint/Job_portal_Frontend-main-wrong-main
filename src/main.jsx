import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from './components/ui/sonner.jsx';
import Layout from './Layout';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './components/Profile/Profile';
import JobDescription from './components/JobDescription';


// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignUp />
//   },


// ])
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} /> {/* Home as the default route */}
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="browse" element={<Browse />} />
      
      {/* Auth Routes */}
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      
      {/* Protected Routes */}
      <Route path="profile" element={<Profile />} />
      <Route path="jobDescription/:id" element={<JobDescription />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uixsca74motk1jhb.us.auth0.com"
      clientId="BAG11DUPsmYX8AtHoT4Ld93jbkF3CZ0v"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <RouterProvider router={appRouter} />
        <Toaster />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);