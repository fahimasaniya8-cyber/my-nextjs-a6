'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '../../assest/logo.png';
import { usePlan } from '../context/PlanContext';

const Navbar = () => {
  const pathname = usePathname();
  const { planItems, savedItems } = usePlan();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href, label) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
          isActive
            ? 'bg-[#aaff00] text-black'
            : 'text-[#c4c6ce] hover:text-white'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="relative border-b border-[#292a32] bg-[#15161c] text-white">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={28} height={28} />

          <span className="text-base font-extrabold tracking-wide sm:text-lg">
            FITLOG
          </span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navLink('/', 'Workouts')}
          {navLink('/my-plan', 'My Plan')}
        </div>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#9a9ca5] hover:text-white"
          >
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#aaff00] px-1 text-xs font-bold text-black">
              {planItems.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#9a9ca5] hover:text-white"
          >
            Saved
            <span className="text-white">{savedItems.length}</span>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292a32] text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#292a32] bg-[#15161c] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLink('/', 'Workouts')}
            {navLink('/my-plan', 'My Plan')}
          </div>

          <div className="mt-4 border-t border-[#292a32] pt-4">
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-[#c4c6ce] hover:bg-[#202127] hover:text-white"
            >
              <span>Plan</span>

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#aaff00] px-1 text-xs font-bold text-black">
                {planItems.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-between rounded-lg px-4 py-3 text-[#c4c6ce] hover:bg-[#202127] hover:text-white"
            >
              <span>Saved</span>

              <span className="text-white">{savedItems.length}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
