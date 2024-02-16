//components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Mynav from "./components/Mynav";
import Options from "./components/Options";
import UserServer from "./components/UserServer";
import Profile from "./components/Profile";
import Apirecords from "./components/Apirecords";
import { Route, Routes } from "react-router-dom";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
    <Mynav />
    <Profile />
    {/* <Options /> */}
    {/* <UserServer /> */}

    {/* <Routes>
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
      <Route path="/Apirecords" element={<Apirecords />} />
    </Routes> */}
    </>

  );
}

export default App;
