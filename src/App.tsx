import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/navbar";

import Providers from "@/components/providers";
import Sidebar from "./components/sidebar";
import JsonFormatter from "./pages/JsonFormatter";
import { Toaster } from "./components/ui/toaster";
import Base64Encoder from "./pages/Base64Encoder";
import JsMinifier from "./pages/JsMinifier";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <div className="relative flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-1 bg-background">
            <div className="border-b">
              <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<JsonFormatter />} />
                  <Route path="/json-formatter" element={<JsonFormatter />} />
                  <Route path="/base64-encoder" element={<Base64Encoder />} />
                  <Route path="/js-minifier" element={<JsMinifier />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
        <Toaster />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
