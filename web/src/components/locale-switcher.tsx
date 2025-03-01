'use client';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { languages } from '../config/site';
import { Select, SelectItem } from '@nextui-org/select';
import { useRouter, usePathname } from '../navigation';

function formatLocalCode(locale: string) {
  return locale[0].toUpperCase() + locale.slice(1);
}

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className='w-20'>
      <Select
        selectedKeys={[locale]}
        onChange={onSelectChange}
        aria-label='Select language'
        name='localeSelectSmall'
      >
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            textValue={formatLocalCode(lang.code)}
          >
            {formatLocalCode(lang.code)}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
