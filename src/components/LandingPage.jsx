import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";
import GoogleButton from 'react-google-button';

export default function LandingPage() {
  const quotes = [
    "Empower your learning journey.",
    "Build the future with technology.",
    "Innovation starts here.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div>
      <div className="navbar"></div>
      <div className="landing-page-logo-container">
        <img className="landing-page-logo" src={logo} alt="Logo" />
      </div>
      <h1 className="title">Hackville</h1>
      <h2
        key={currentQuoteIndex}
        className="typewriter"
        style={{ "--characters": quotes[currentQuoteIndex].length }}
      >
        {quotes[currentQuoteIndex]}
      </h2>
      <div className="button-container">
        <button
          className="get-started-btn"
          onClick={() => navigate("/login")} // Navigate to the login page
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
