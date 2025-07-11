import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
