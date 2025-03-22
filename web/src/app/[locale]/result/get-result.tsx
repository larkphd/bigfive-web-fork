'use client';

import { button as buttonStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';
import { formatAndValidateId, formatId } from '@/lib/helpers';
import { useEffect, useMemo, useState } from 'react';
import { Input } from '@nextui-org/input';
import { ResultIcon } from '@/components/icons';
import Link from 'next/link';

interface GetResultPageProps {
  viewPreviousText: string;
  getResultsText: string;
}

export const GetResultPage = ({
  viewPreviousText,
  getResultsText
}: GetResultPageProps) => {
  const router = useRouter();

  const [previousResultId, setPreviousResultId] = useState<string | null>(null);
  const [id, setId] = useState('');

  const isInvalidId = useMemo(() => {
    if (id === '') return false;

    return !formatAndValidateId(id);
  }, [id]);

  useEffect(() => {
    const resultId = localStorage.getItem('resultId');
    if (resultId) {
      setPreviousResultId(resultId);
    }
  }, []);

  const handleGetResults = () => {
    if (!formatAndValidateId(id)) return;
    router.push(`/result/${formatId(id)}`);
  };

  const renderButtons = (size: 'sm' | 'md' | 'lg') => {
    return (
      <>
        {previousResultId && (
          <Link
            className={clsx(
              buttonStyles({ color: 'secondary', size, variant: 'bordered' }),
              'w-full md:w-auto'
            )}
            href={`/result/${previousResultId}`}
          >
            {viewPreviousText}
          </Link>
        )}
        <Button
          color='primary'
          size={size}
          className='w-full md:w-auto'
          onClick={handleGetResults}
          isDisabled={id === '' || isInvalidId}
        >
          {getResultsText}
        </Button>
      </>
    );
  };

  return (
    <>
      <div className='w-full'>
        <Input
          type='text'
          label='ID'
          labelPlacement='outside'
          placeholder='58a70606a835c400c8b38e84'
          startContent={
            <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          isInvalid={isInvalidId}
          color={isInvalidId ? 'danger' : 'default'}
          onValueChange={setId}
          errorMessage={isInvalidId && 'Please enter a valid ID'}
          value={id}
        />
      </div>
      <div className='hidden md:flex justify-end gap-3 mt-6'>
        {renderButtons('lg')}
      </div>
      <div className='md:hidden flex justify-end gap-3 mt-6'>
        {renderButtons('md')}
      </div>
    </>
  );
};
