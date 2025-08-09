'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Progress } from '@nextui-org/progress';
import confetti from 'canvas-confetti';
import { useRouter } from '@/navigation';
import Image from 'next/image';

import { CloseIcon, InfoIcon } from '@/components/icons';
import { type Question } from '@bigfive-org/questions';
import { sleep, formatTimer, isDev } from '@/lib/helpers';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useTimer from '@/hooks/useTimer';
import { type Answer } from '@/types';
import { Card, CardHeader } from '@nextui-org/card';

interface SurveyProps {
  questions: Question[];
  nextText: string;
  prevText: string;
  resultsText: string;
  saveTest: Function;
  language: string;
}

export const Survey = ({
  questions,
  nextText,
  prevText,
  resultsText,
  saveTest,
  language
}: SurveyProps) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);
  const [restored, setRestored] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const { width } = useWindowDimensions();
  const seconds = useTimer();

  // map score -> svg filename
  const ICONS: Record<number, string> = {
    1: 'angry.svg',
    2: 'sad.svg',
    3: 'neutral.svg',
    4: 'happy.svg',
    5: 'very-happy.svg'
  };

  useEffect(() => {
    const handleResize = () => {
      // Desktop: 3 questions per page (1x3 grid). Mobile: 1 per page.
      setQuestionsPerPage(window.innerWidth > 768 ? 3 : 1);
    };
    handleResize();
  }, [width]);

  useEffect(() => {
    const restoreData = () => {
      if (dataInLocalStorage()) {
        restoreDataFromLocalStorage();
      }
    };
    restoreData();
  }, []);

  const currentQuestions = useMemo(
    () =>
      questions.slice(
        currentQuestionIndex,
        currentQuestionIndex + questionsPerPage
      ),
    [currentQuestionIndex, questions, questionsPerPage]
  );

  const isTestDone = questions.length === answers.length;
  const progress = Math.round((answers.length / questions.length) * 100);

  const nextButtonDisabled =
    inProgress ||
    currentQuestionIndex + questionsPerPage > answers.length ||
    (isTestDone &&
      currentQuestionIndex === questions.length - questionsPerPage) ||
    loading;

  const backButtonDisabled = currentQuestionIndex === 0 || loading;

  async function handleAnswer(id: string, value: string) {
    const question = questions.find((q) => q.id === id);
    if (!question) return;

    const newAnswer: Answer = {
      id,
      score: Number(value),
      domain: question.domain,
      facet: question.facet
    };

    setAnswers((prev) => [...prev.filter((a) => a.id !== id), newAnswer]);

    const latestAnswerId = answers.slice(-1)[0]?.id;

    if (
      questionsPerPage === 1 &&
      questions.length !== answers.length + 1 &&
      id !== latestAnswerId
    ) {
      setInProgress(true);
      await sleep(700);
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
      setInProgress(false);
    }
    populateDataInLocalStorage();
  }

  function handlePreviousQuestions() {
    setCurrentQuestionIndex((prev) => prev - questionsPerPage);
    window.scrollTo(0, 0);
  }

  function handleNextQuestions() {
    if (inProgress) return;
    setCurrentQuestionIndex((prev) => prev + questionsPerPage);
    window.scrollTo(0, 0);
    if (restored) setRestored(false);
  }

  function skipToEnd() {
    const randomAnswers = questions
      .map((q) => ({
        id: q.id,
        score: Math.floor(Math.random() * 5) + 1,
        domain: q.domain,
        facet: q.facet
      }))
      .slice(0, questions.length - 1);

    setAnswers([...randomAnswers]);
    setCurrentQuestionIndex(questions.length - 1);
  }

  async function submitTest() {
    setLoading(true);
    confetti({});
    const result = await saveTest({
      testId: 'b5-120',
      lang: language,
      invalid: false,
      timeElapsed: seconds,
      dateStamp: new Date(),
      answers
    });
    localStorage.removeItem('inProgress');
    localStorage.removeItem('b5data');
    localStorage.setItem('resultId', result.id);
    router.push(`/result/${result.id}`);
  }

  function dataInLocalStorage() {
    return !!localStorage.getItem('inProgress');
  }

  function populateDataInLocalStorage() {
    localStorage.setItem('inProgress', 'true');
    localStorage.setItem(
      'b5data',
      JSON.stringify({ answers, currentQuestionIndex })
    );
  }

  function restoreDataFromLocalStorage() {
    const data = localStorage.getItem('b5data');
    if (data) {
      const { answers, currentQuestionIndex } = JSON.parse(data);
      setAnswers(answers);
      setCurrentQuestionIndex(currentQuestionIndex);
      setRestored(true);
    }
  }

  function clearDataInLocalStorage() {
    localStorage.removeItem('inProgress');
    localStorage.removeItem('b5data');
    location.reload();
  }

  // inline “smiley card” button using SVG icons from /public/icons/{angry|sad|neutral|happy|very-happy}.svg
  function SmileyOption({
    score,
    label,
    selected,
    onSelect,
    disabled
  }: {
    score: number;
    label: string;
    selected: boolean;
    onSelect: (score: number) => void;
    disabled: boolean;
  }) {
    return (
      <button
        type='button'
        role='radio'
        aria-checked={selected}
        disabled={disabled}
        onClick={() => onSelect(score)}
        className={[
          'relative isolate rounded-lg border w-[60px] md:w-[68px] shrink-0 p-1.5',
          'bg-white/90 dark:bg-content1 transition-colors',
          'hover:bg-content2 focus:outline-none focus:ring-2 focus:ring-primary/40',
          selected ? 'border-primary ring-1 ring-primary/30' : 'border-default-200',
          disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
        ].join(' ')}
      >
        {/* translucent overlay when selected */}
        <div
          className={[
            'absolute inset-0 rounded-lg -z-10',
            selected ? 'bg-primary/10' : 'bg-transparent'
          ].join(' ')}
        />
        <div className='flex items-start flex-col gap-1'>
          <Image
            src={`/icons/${ICONS[score]}`}
            alt={label}
            width={28}
            height={28}
            className='select-none'
          />
          <span className='text-[10px] md:text-[11px] leading-tight text-foreground/80 text-center'>
            {label}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className='mt-4'>
      {restored && (
        <Card className='mb-3 bg-warning/20 text-warning-600 dark:text-warning'>
          <CardHeader className='justify-between'>
            <div className='flex items-center gap-3'>
              <InfoIcon />
              <p>
                Restore complete, your answers has been restored.
                <Button
                  color='secondary'
                  variant='bordered'
                  className='ml-3 md:ml-5'
                  onClick={clearDataInLocalStorage}
                >
                  Start a new test
                </Button>
              </p>
            </div>
            <Button
              isIconOnly
              variant='light'
              color='warning'
              onClick={() => setRestored(false)}
            >
              <CloseIcon />
            </Button>
          </CardHeader>
        </Card>
      )}

      <Progress
        aria-label='Progress bar'
        value={progress}
        className='max-w'
        showValueLabel={true}
        label={formatTimer(seconds)}
        minValue={0}
        maxValue={100}
        size='lg'
        color='primary'
      />

      {/* Grid: 1 column on mobile, 3 columns on md+ with compact spacing */}
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-3'>
        {currentQuestions.map((question) => {
          const selected = answers.find((a) => a.id === question.id)?.score;

          return (
            <div
              key={'q' + question.num}
              className='rounded-xl border border-default-200 bg-content1/40 p-3'
            >
              <h2 className='text-base md:text-lg font-medium mb-2 leading-snug'>
                {question.text}
              </h2>

              {/* Pictorial Likert with SVG icons */}
              <div
                role='radiogroup'
                aria-label={`Scale for question ${question.num}`}
                className='flex items-start flex-wrap gap-3'
              >
                {question.choices.slice(0, 5).map((choice) => (
                  <SmileyOption
                    key={choice.score}
                    score={choice.score}
                    label={choice.text}
                    selected={selected === choice.score}
                    disabled={inProgress}
                    onSelect={(score) =>
                      handleAnswer(question.id, String(score))
                    }
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className='my-8 space-x-3 inline-flex'>
        <Button
          color='primary'
          isDisabled={backButtonDisabled}
          onClick={handlePreviousQuestions}
        >
          {prevText.toUpperCase()}
        </Button>

      <Button
          color='primary'
          isDisabled={nextButtonDisabled}
          onClick={handleNextQuestions}
        >
          {nextText.toUpperCase()}
        </Button>

        {isTestDone && (
          <Button
            color='secondary'
            onClick={submitTest}
            disabled={loading}
            isLoading={loading}
          >
            {resultsText.toUpperCase()}
          </Button>
        )}

        {isDev && !isTestDone && (
          <Button color='primary' onClick={skipToEnd}>
            Skip to end (dev)
          </Button>
        )}
      </div>
    </div>
  );
};
