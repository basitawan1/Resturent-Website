import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from './Pages/About';
import Service from './Pages/Service';
import Menu from "./Pages/Menu";
import Team from "./Pages/Team";
import Booking from "./Pages/Booking";
import Contact from './Pages/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="menu" element={<Menu />} />
          <Route path="team" element={<Team />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);