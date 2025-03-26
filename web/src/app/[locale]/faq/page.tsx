import { generatePageMetadata } from '@/lib/metadata';
import Faq from './faq';

export const generateMetadata = ({
  params
}: {
  params: { locale: string };
}) => {
  return generatePageMetadata({
    locale: params.locale,
    pagePath: '/faq'
  });
};

export default function FaqPage() {
  return <Faq />;
}
