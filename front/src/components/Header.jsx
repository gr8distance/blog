import Link from 'next/link';
import { Logo } from './Logo';
import { Navigations } from './Navigation';

export const Header = () => {
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <Logo />
        </div>
        <Navigations/>
      </div>
    </nav>
  )
}
