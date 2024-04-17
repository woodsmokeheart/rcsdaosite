import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import HomePage from "./pages/HomePage/HomePage";
import TokensPage from "./pages/TokensPage/TokensPage";

const manifestUrl =
  "https://raw.githubusercontent.com/woodsmokeheart/rcsdaosite/main/public/tonconnect-manifest.json";

const App = () => {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tokens" element={<TokensPage />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  );
};

export default App;
