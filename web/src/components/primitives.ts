import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'tracking-tight inline font-semibold',
  variants: {
    color: {
      violet: 'from-[#9DC5B4] to-[#507966]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#9DC5B4] to-[#507966]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]'
    },
    size: {
      sm: 'text-3xl lg:text-4xl',
      md: 'text-[2.3rem] lg:text-5xl leading-9',
      lg: 'text-4xl lg:text-6xl'
    },
    fullWidth: {
      true: 'w-full block'
    }
  },
  defaultVariants: {
    size: 'md'
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'foreground'
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b'
    }
  ]
});

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-secondary font-normal block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full'
    }
  },
  defaultVariants: {
    fullWidth: true
  }
});

export const heading = tv({
  base: 'w-full md:w-1/2 my-2 text-xl lg:text-2xl font-normal block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full'
    }
  },
  defaultVariants: {
    fullWidth: true
  }
});
