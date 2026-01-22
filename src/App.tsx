import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HomePage } from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import Toast from "./components/common/Toast";

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
