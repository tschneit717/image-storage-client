import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout' 
import HomeView from "./views/Home.tsx";
import NotFound from "./views/404.tsx";

export default function App() {
  return (
    <div>
      <h1>Basic Image Service App</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
