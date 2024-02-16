//components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Mynav from "./components/Mynav";
import { Route, Routes } from "react-router-dom";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
    <Mynav />
    <Routes>
      <Route
        path="/"
        element={
          <DataProvider>
            <Home />
          </DataProvider>
            
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </>

  );
}

export default App;
