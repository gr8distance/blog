import Link from 'next/link';
import { Logo } from './Logo';
import { Navigations } from './Navigation';

export const Header = () => {
  return (
    <nav class="relative bg-white shadow dark:bg-gray-800">
      <div class="container px-6 py-3 mx-auto md:flex">
        <div class="flex items-center justify-between">
          <Logo />
        </div>
        <Navigations/>
      </div>
    </nav>
  )
}
