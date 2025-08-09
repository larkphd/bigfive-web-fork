import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'

interface Question {
  id: string
  text: string
}

interface SurveyProps {
  questions: Question[]
  onAnswer: (answers: Record<string, number>) => void
}

const emojis = [
  { id: 1, src: '/emojis/angry.svg', labelKey: 'veryNegative' },
  { id: 2, src: '/emojis/sad.svg', labelKey: 'negative' },
  { id: 3, src: '/emojis/neutral.svg', labelKey: 'neutral' },
  { id: 4, src: '/emojis/happy.svg', labelKey: 'positive' },
  { id: 5, src: '/emojis/very-happy.svg', labelKey: 'veryPositive' }
]

export const Survey: React.FC<SurveyProps> = ({ questions, onAnswer }) => {
  const { t } = useTranslation()
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    onAnswer(answers)
  }

  return (
    <div className="survey-container" style={{ padding: '20px' }}>
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}
      >
        {questions.map(question => (
          <div
            key={question.id}
            className="question-card"
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <div
              style={{
                marginBottom: '12px',
                fontSize: '16px',
                fontWeight: 500
              }}
            >
              {question.text}
            </div>
            <div
              className="emoji-options"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '6px'
              }}
            >
              {emojis.map(emoji => {
                const isSelected = answers[question.id] === emoji.id
                return (
                  <div
                    key={emoji.id}
                    onClick={() => handleAnswer(question.id, emoji.id)}
                    style={{
                      cursor: 'pointer',
                      border: isSelected
                        ? '2px solid #4caf50'
                        : '1px solid #ccc',
                      borderRadius: '8px',
                      padding: '4px',
                      flex: 1,
                      textAlign: 'center',
                      backgroundColor: isSelected
                        ? 'rgba(76, 175, 80, 0.1)'
                        : 'transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <img
                      src={emoji.src}
                      alt={t(emoji.labelKey)}
                      style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '4px'
                      }}
                    />
                    <span style={{ fontSize: '12px' }}>
                      {t(emoji.labelKey)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button onClick={handleSubmit}>{t('next')}</Button>
      </div>
    </div>
  )
}
