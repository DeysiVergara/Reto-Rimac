import { useState } from "react";
import { NavLink } from "react-router-dom";

export type NavItem = { label: string; to: string; external?: boolean };

type HeaderProps = {
  logoSrc: string;
  phoneNumber?: string;
  ctaText?: string;
  className?: string;
};

export default function Header({
  logoSrc,
  phoneNumber,
  ctaText,
  className = "",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 ${className}`}
      role='banner'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <NavLink to='/' className='flex items-center gap-2'>
            <img
              src={logoSrc}
              alt='RIMAC'
              className='h-6 w-auto'
              loading='eager'
              fetchPriority='high'
            />
          </NavLink>

          <nav
            className='hidden md:flex items-center gap-6'
            aria-label='Primary'
          >
            {ctaText && (
              <NavLink
                to={ctaText}
                className='inline-flex items-center px-4 py-2 text-sm font-semibold text-[#03050F] text-[12px] tracking-[0.2px]'
              >
                {ctaText}
              </NavLink>
            )}

            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/\s|\(|\)/g, "")}`}
                className='text-[#03050F] px-6 py-3 font-bold text-[16px] tracking-[0.4px] leading-5'
              >
                {phoneNumber}
              </a>
            )}
          </nav>

          <div className='md:hidden flex items-center gap-3'>
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/\s|\(|\)/g, "")}`}
                aria-label='Llamar'
                className='text-sm font-medium text-gray-900'
              >
                {phoneNumber}
              </a>
            )}
            <button
              aria-label='Abrir menú'
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className='inline-flex items-center justify-center rounded-lg border px-3 py-2'
            >
              <span className='sr-only'>Abrir menú</span>☰
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className='md:hidden border-t border-gray-200 bg-white'
          role='dialog'
          aria-modal='true'
        >
          <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3'>
            {ctaText && (
              <NavLink
                to={ctaText}
                className='mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-red-600 text-white'
                onClick={() => setOpen(false)}
              >
                {ctaText}
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
