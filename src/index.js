import reactDom from "react-dom";
import App from  "./App.js";

const app = <App />;
const root = document.querySelector(".root");
reactDom.render(app, root);