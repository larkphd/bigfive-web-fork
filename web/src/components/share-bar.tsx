'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { CopyIcon, FacebookIcon, PDFIcon, TwitterIcon } from './icons';
import { Link as NextUiLink } from '@nextui-org/link';
import { Report } from '@/actions/index';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

interface ShareBarProps {
  report: Report;
}

export default function ShareBar({ report }: ShareBarProps) {
  const [_, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => async () => await copy(text);

  return (
    <>
      <Tooltip color='secondary' content='Facebook Sharing'>
        <Button
          isIconOnly
          aria-label='Facebook Sharing'
          radius='full'
          size='md'
          variant='light'
          as={NextUiLink}
          isExternal
          href={`https://www.facebook.com/sharer/sharer.php?u=https://understandme2.com/result/${report.id}`}
        >
          <FacebookIcon size={48} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='X Sharing'>
        <Button
          isIconOnly
          aria-label='X Sharing'
          radius='full'
          size='md'
          variant='light'
          target='_blank'
          as={NextUiLink}
          href={`https://twitter.com/intent/tweet?text=See my personality!&url=https://understandme2.com/result/${report.id}`}
        >
          <TwitterIcon size={42} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='PDF Download'>
        <Button
          isIconOnly
          aria-label='PDF Download'
          radius='full'
          size='md'
          variant='light'
          onPress={() => window.print()}
        >
          <PDFIcon size={32} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Copy Link'>
        <Button
          isIconOnly
          aria-label='Copy Link'
          radius='full'
          size='md'
          variant='light'
          onPress={handleCopy(`https://understandme2.com/result/${report.id}`)}
        >
          <CopyIcon size={42} />
        </Button>
      </Tooltip>
    </>
  );
}
