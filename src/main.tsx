import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./pages/Main/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Findreport from "./pages/Find/Findreport.tsx";
import ShareReport from "./pages/Share/ShareReport.tsx";
import OtherDetail from "./pages/Others/OtherDetail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/elantap" element={<Findreport />} />
          <Route path="/elanpaylash" element={<ShareReport />} />
          <Route path="/detallar/:slug" element={<OtherDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

