import React from 'react';
import clsx from 'clsx';
import { title as titleClassName } from '@/components/primitives';

type PropsType = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const Heading: React.FC<PropsType> = ({
  title,
  subtitle,
  className
}) => {
  return (
    <div className={clsx('text-center mb-6', className)}>
      <h1 className={titleClassName()}>{title}</h1>
      {subtitle && (
        <h5 className='text-default-500 text-lg mt-4'>{subtitle}</h5>
      )}
    </div>
  );
};
