import Image from 'next/image';
import logo from '../../assest/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-[#292a32] bg-[#0d0d0f] px-4 py-5 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={20} height={20} />
          <span className="text-sm font-bold tracking-wide">FITLOG</span>
        </div>

        <p className="text-center text-xs text-[#6b6e78]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
