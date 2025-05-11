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
    <footer
      className='container mx-auto max-w-7xl border-t border-divider'
      style={{
        minHeight: '120px',
        paddingTop: '24px',
        paddingBottom: '24px',
        marginTop: '24px'
      }}
    >
      <div className='w-full flex justify-center' style={{ minHeight: '24px' }}>
        <ul className='flex text-sm font-medium text-gray-500 dark:text-gray-400'>
          {footerLinks.map((item, index) => (
            <li
              key={index}
              className='me-4 md:me-6 last:me-0'
              style={{ height: '24px' }}
            >
              <Link href={item.href} className='hover:underline'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className='flex text-sm text-gray-500 justify-center'
        style={{
          marginTop: '24px',
          height: '20px'
        }}
      >
        © {year} — understandme2.com - all rights reserved. Please <a href="https://www.instagram.com/phdlark/" target="_blank">_visit our Instagram</a>
      </div>
    </footer>
  );
}
