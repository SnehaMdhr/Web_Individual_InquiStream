import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import("./public/Login"));
const Dashboard = lazy(() => import("./public/Dashboards"));
const ForgetPass = lazy(() => import("./public/ForgetPassword"));
const Add = lazy(() => import("./public/Add"));
const List = lazy(() => import("./public/List"));
const AddStaff = lazy(() => import("./public/AddStaff"));
const Enroll = lazy(() => import("./public/Enroll"));
const Staff = lazy(() => import("./public/Staff"));




function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
