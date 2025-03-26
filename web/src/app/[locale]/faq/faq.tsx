'use client';
import { Heading } from '@/components/heading';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

export default function Faq() {
  const faq = [
    {
      question: 'Oh no its a error on this website',
      answer: 'Send e-mail at contact@understandme2.com'
    },
    {
      question: 'Who made this website, and can I use it as i want?',
      answer:
        'Yes, this project is licensed under the MIT license. And originally made by the nice people at Rubynor'
    },
    {
      question: 'Use the questions for commercial purposes?',
      answer: 'Yes, everyting is under MIT license.'
    },
    {
      question: 'How to print my test results?',
      answer:
        'You can prin the test, or print the PDF if you save the file. But please think about the enviroment.'
    },
    {
      question: 'Translate everything to my language',
      answer: 'Contact the original makers of the test.'
    },
    {
      question: 'Translate the result text to my language',
      answer: 'Try use google translate if your langauage is not availible.'
    },
    {
      question: 'More information about the methode, questions and evaluation?',
      answer: 'Google the IPIP Website, and read more.'
    }
  ];

  return (
    <div className='lg:px-16'>
      <Heading title='FAQ - Frequently Asked Questions' />
      <Accordion className='mt-6'>
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            textValue={item.question}
            title={
              <span className='text-foreground text-large font-medium'>
                {item.question}
              </span>
            }
          >
            <div className='py-2 pt-0 pb-6 text-base text-secondary'>
              {item.answer}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
