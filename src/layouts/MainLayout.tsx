import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header
        logoSrc='/Logo.png'
        phoneNumber='(01) 411 6001'
        ctaText='¡Compra por este medio!'
      />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
