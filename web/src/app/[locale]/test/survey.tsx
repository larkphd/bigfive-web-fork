'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button } from '../components/Button'

const ICONS = ['angry.svg', 'sad.svg', 'neutral.svg', 'happy.svg', 'very-happy.svg']

export default function Survey({ questions, onSubmit }) {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(0)
  const [answers, setAnswers] = useState({})
  const QUESTIONS_PER_PAGE = 3
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE)

  const handleAnswer = (questionId, score) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      onSubmit(answers)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const currentQuestions = questions.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  )

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentQuestions.map(q => (
          <div
            key={q.id}
            className="rounded-xl border border-default-200 bg-white/50 p-4 flex flex-col gap-3"
          >
            <h2 className="text-lg font-semibold">{q.text}</h2>
            <div className="flex flex-wrap gap-2">
              {ICONS.map((icon, index) => (
                <button
                  key={icon}
                  type="button"
                  role="radio"
                  aria-checked={answers[q.id] === index}
                  onClick={() => handleAnswer(q.id, index)}
                  className={[
                    'relative isolate rounded-lg border',
                    // tighter inner spacing
                    'pt-1 pb-1 px-1.5 md:pt-1.5 md:pb-1.5 md:px-2',
                    'bg-white/90 dark:bg-content1 transition-colors',
                    'hover:bg-content2 focus:outline-none focus:ring-2 focus:ring-primary/40',
                    answers[q.id] === index
                      ? 'border-primary ring-1 ring-primary/30'
                      : 'border-default-200',
                    'cursor-pointer',
                    // keep centered horizontally, top-aligned vertically
                    'flex flex-col items-center justify-start',
                    // slightly smaller min height
                    'min-h-[88px] w-[72px]'
                  ].join(' ')}
                >
                  {answers[q.id] === index && (
                    <div className="absolute inset-0 rounded-lg -z-10 bg-primary/10" />
                  )}
                  <Image
                    src={`/icons/${icon}`}
                    alt={t(`options.${index}`)}
                    width={30}
                    height={30}
                    className="select-none mb-0.5"
                  />
                  <span
                    className="text-[12px] leading-tight text-foreground/80 text-center break-words"
                    style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                  >
                    {t(`options.${index}`)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          {t('back')}
        </Button>
        <Button onClick={handleNext}>
          {currentPage < totalPages - 1 ? t('next') : t('submit')}
        </Button>
      </div>
    </div>
  )
}
