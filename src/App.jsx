import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupComponent from './components/signup-component';
import SignUp from './components/signup-page';
import { DashboardComponent } from './components/dashboard';
import { Calendar } from './components/ui/calendar';
import ActivityFeedPopup from './components/activity-feed-popup';
import ProfilePage from './components/profile-page';
import SettingsDialog from './components/settings-dialog';
import LandingPage from './components/landing-page';

function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/signIn" element={<SignupComponent />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/dashboard" element={<DashboardComponent/>} />
        <Route path="/calender" element={<Calendar/>} />
        <Route path='/feed' element={<ActivityFeedPopup/>}/>
        <Route path='/profilePage' element={<ProfilePage/>}/>
        <Route path="/contact" element={<SettingsDialog/>}/>
        <Route path='/landingPage' element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
