import './App.css';
import Layout from './components/layout/Layout';
import JobContainer from './components/job/JobContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginComponent from './components/auth/LoginComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <JobContainer />,
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
