import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import DataViewer from "./components/DataViewer";
import "./App.css";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/data-viewer" element={<DataViewer />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
