import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Front from "./components/layouts/Front";
import News from "./pages/news/News";
import ContactPage from "./pages/contact/ContactPage";
import Program from "./pages/programs/Program";
import About from "./pages/about/About";
import PermanentRegistrationForm from "./pages/registration/PermanentRegistrationForm";
import ThirdEyeRegistrationForm from "./pages/thirdeye/ThirdEyeRegistrationForm";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Front />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/news-and-events" element={<News />} />
          <Route path="/our-programs" element={<Program />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route
            path="/permanent-register"
            element={<PermanentRegistrationForm />}
          />
          <Route
            path="/inner-healing"
            element={<ThirdEyeRegistrationForm />}
          />

          <Route
            path="*"
            element={
              <div className="min-h-screen flex justify-center items-center text-center text-2xl mt-4">
                <img
                  src="/404.png"
                  alt="404 Not Found"
                  className="object-cover transition-transform duration-300 transform scale-90"
                />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
