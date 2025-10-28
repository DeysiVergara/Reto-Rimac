import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteProvider } from "./features/quote/QuoteContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";
import Resumen from "./pages/Resumen/Resumen";

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/planes' element={<Plans />} />
            <Route path='/resumen' element={<Resumen />} />
          </Route>
        </Routes>
      </QuoteProvider>
    </BrowserRouter>
  );
}
