import { Link } from '../navigation';

interface FooterProps {
  footerLinks: {
    label: string;
    href: string;
  }[];
}

export default function Footer({ footerLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className='container mx-auto max-w-7xl pt-6 md:pt-12 pb-6 mt-6 md:mt-12 border-t border-divider'>
      <div className='w-full flex justify-center'>
        <ul className='flex mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          {footerLinks.map((item, index) => (
            <li key={index} className='me-4 md:me-6 last:me-0'>
              <Link href={item.href} className='hover:underline'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex text-sm text-gray-500 mt-6 md:mt-12 justify-center'>
        © {year} — understandme2.com - all rights reserved.
      </div>
    </footer>
  );
}
