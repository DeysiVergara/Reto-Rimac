import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='bg-[#0D0C22] text-white py-6'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center gap-2'>
          <img
            src='/LogoBlanco.png'
            alt='RIMAC'
            className='h-[32px] w-auto'
            loading='eager'
          />
        </NavLink>

        {/* Texto */}
        <p className='text-sm text-gray-300 text-center md:text-right'>
          © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
}
