import { Progress } from '@nextui-org/progress';

export const LoadingProgress = () => (
  <div className='flex items-center justify-center grow'>
    <Progress
      isIndeterminate
      aria-label='Loading...'
      className='max-w-md'
      size='sm'
    />
  </div>
);
