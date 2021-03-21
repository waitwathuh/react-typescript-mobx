import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import TodoList from "./components/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";

const StyledApp = styled.div`
  background-color: #f4f6f8;
  height: 100vh;
  padding: 1rem;
`;

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <TodoList />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
