'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar';
import LocaleSwitcher from '@/components/locale-switcher';
import LocaleSwitcherFull from '@/components/locale-switcher-full';

import { link as linkStyles } from '@nextui-org/theme';

import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { Link as NextLink } from '../navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Image } from '@nextui-org/image';

interface NavbarProps {
  navItems: { label: string; href: string }[];
  navMenuItems: { label: string; href: string }[];
}

export const Navbar = ({ navItems, navMenuItems }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const isCurrentPath = (link: string): boolean => {
    if (link === '/') {
      return pathname === '/' || pathname === `/${locale}`;
    } else {
      return pathname.includes(link);
    }
  };

  return (
    <NextUINavbar
      maxWidth='xl'
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink
            className='flex justify-start items-center gap-1'
            href='/'
            aria-label='Home'
          >
            <Image src='/icon-144x144.png' width={36} height={36} alt='Logo' />
          </NextLink>
        </NavbarBrand>
        <div className='hidden md:flex gap-4 justify-start ml-2'>
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-danger data-[active=true]:font-medium'
                )}
                data-active={isCurrentPath(item.href)}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcherFull />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='md:hidden basis-1 pl-4' justify='end'>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='w-10 h-full'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
                data-active={isCurrentPath(item.href)}
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-danger data-[active=true]:font-medium !text-3xl py-2'
                )}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
