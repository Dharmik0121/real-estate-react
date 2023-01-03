import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Hero from './pages/Hero'
import PrivateRoute from './Components/PrivateRoute'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
