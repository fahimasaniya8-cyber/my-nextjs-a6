'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../assest/logo.png';
import { usePlan } from '../context/PlanContext';

const Navbar = () => {
  const pathname = usePathname();
  const { planItems, savedItems } = usePlan();

  const navLink = (href, label) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
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
    <div className="flex items-center justify-between border-b border-[#292a32] bg-[#15161c] px-6 py-3 text-white">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={28} height={28} />
        <span className="text-lg font-extrabold tracking-wide">FITLOG</span>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        {navLink('/', 'Workouts')}
        {navLink('/my-plan', 'My Plan')}
      </div>

      <div className="flex items-center gap-6 text-sm">
        <span className="flex items-center gap-2 text-[#9a9ca5]">
          Plan
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#aaff00] text-xs font-bold text-black">
            {planItems.length}
          </span>
        </span>
        <span className="flex items-center gap-2 text-[#9a9ca5]">
          Saved <span className="text-white">{savedItems.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
