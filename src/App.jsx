import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { buyCake } from "./redux/index";
import  CakeContainer  from "./Component/CakeContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
}

export default App;