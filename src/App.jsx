import FormField from "./components/FormField.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./success/SuccessPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
function FormPage() {
  const listItems = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];

  return (
    <div className="min-h-screen items-center xl:bg-primary-color flex justify-center">
      <div className="md:px-6 md:py-6 max-w-6xl h-full border-text-color rounded-3xl bg-text-color flex-col-reverse flex md:flex-row justify-center text-primary-color">
        <div className="p-8  w-full justify-center pc:mr-16 md:max-w-lg flex flex-col">
          <h1 className="font-bold text-5xl md:text-6xl mb-8">Stay updated!</h1>
          <span className="md:text-xl mb-8">
            Join 60,000+ product managers receiving monthly updates on:
          </span>
          <div className="space-y-4 text-lg md:text-xl flex-col items-center">
            {listItems.map((item, index) => (
              <div
                className="flex space-x-4 items-start md:items-center"
                key={index}
              >
                <img src="/images/icon-list.svg" alt="Icon List" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <FormField />
        </div>
        <div>
          <img
            className="hidden md:block w-full h-full"
            src="/images/illustration-sign-up-desktop.svg"
            alt="Desktop Illustration Sign Up"
          />
          <img
            className="md:hidden flex mb-12 w-full"
            src="/images/illustration-sign-up-mobile.svg"
            alt="Mobile Illustration Sign Up "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
