import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  c = "first";
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News size={12} country="in" category="general" />}
            />
            <Route
              path="/general"
              element={<News size={12} country="in" category="general" />}
            />
            <Route
              path="/business"
              element={<News size={12} country="in" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News size={12} country="in" category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News size={12} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News size={12} country="in" category="science" />}
            />
            <Route
              path="/sports"
              element={<News size={12} country="in" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News size={12} country="in" category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

// newsapi key      3d271f60c35646a69586f58d4157034c
