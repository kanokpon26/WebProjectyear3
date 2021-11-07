import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Loginpage from "./Loginpagefile/Loginpage";
import Registerpage from "./Registerfile/Registerpage";
import DataContext from "./Data/DataContext";
function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Loginpage} exact />
      <Route path="/Registerpage" component={Registerpage} />
      <Route></Route>
    </Switch>
  );
  return (
    <DataContext.Provider value={"Hi"}>
      <div className="test">{routes}</div>
    </DataContext.Provider>
  );
}

export default App;
