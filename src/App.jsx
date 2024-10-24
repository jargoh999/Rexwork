import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupComponent from './components/signup-component';
import SignUp from './components/signup-page';
import { DashboardComponent } from './components/dashboard';
import { Calendar } from './components/ui/calendar';
import ActivityFeedPopup from './components/activity-feed-popup';
import Component from './components/ui/chartComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignupComponent />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/dashboard" element={<DashboardComponent/>} />
        <Route path="/calender" element={<Calendar/>} />
        <Route path='/feed' element={<ActivityFeedPopup/>}/>
        <Route path='/chart' element={<Component/>}/>
      </Routes>
    </Router>
  );
}

export default App;
