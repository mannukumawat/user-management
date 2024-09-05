import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserPage from "./pages/UserPage"; // For user details
import "./App.css"; // Make sure the correct CSS file is imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<UserList />} />
        <Route path="/create" element={<UserForm />} /> 
        <Route path="/edit/:id" element={<UserPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
