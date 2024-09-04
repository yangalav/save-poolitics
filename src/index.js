import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FixedBottomNavigation from './Components/FixedBottomNavigation/FixedBottomNavigation.js';
// import '@fontsource/figtree/700.css';
import './index.css';
import App from './App';
import Footer from './Components/Footer';
import Intro from './Pages/Intro/Intro.jsx';
import Election from './Pages/Election/Election.jsx';
import Results from './Pages/Results/Results.jsx';
import Transition from './Pages/Transition.jsx';
import Home from './Pages/Home/Home.jsx';
import { transition1Data } from './Pages/Data/transitionData.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    // children: [
    //   { index: true, element: <Home />},
    // ],
  },
  {
    path: "Intro",
    element: <Intro />,
  },
  {
    path: "Election",
    element: <Election />,
  },
  {
    path: "Results",
    element: <Results />,
  },
  {
    path: "Transition1",
    element: <Transition data={transition1Data} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   <Footer />
   <FixedBottomNavigation />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
