// Importing necessary styles and components
import './App.css';
import Home from './Components/Home/Home';

// Importing routing-related dependencies
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Importing layout and page components
import Layout from './Components/Layout/Layout';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Project1 from './Components/DetailsOfProject/Project1';
import Project2 from './Components/DetailsOfProject/Project2';
import Project3 from './Components/DetailsOfProject/Project3';

// Creating the router configuration
let routers = createBrowserRouter([
  {
    // Root route
    path: '/',
    element: <Layout />, // Render the Layout component for the root route
    children: [
      // Child routes within the Layout component
      { index: true, element: <Home /> }, // Render the Home component for the root route
      { path: 'aboutme', element: <AboutMe /> }, // Render the AboutMe component for the '/aboutme' route
      { path: 'myprojects', element: <Projects /> }, // Render the Projects component for the '/myprojects' route
      { path: 'contactme', element: <ContactMe /> }, // Render the ContactMe component for the '/contactme' route
      { path: 'project1', element: <Project1 /> }, // Render the Project1 component for the '/project1' route
      { path: 'project2', element: <Project2 /> }, // Render the Project2 component for the '/project2' route
      { path: 'project3', element: <Project3 /> }, // Render the Project3 component for the '/project3' route
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={routers} /> // Provide the router configuration to the app
  );
}

export default App;
