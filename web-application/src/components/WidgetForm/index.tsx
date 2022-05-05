import { useState } from 'react'

import bugImageUrl from './../../assets/icons/bug.svg'
import ideaImageUrl from './../../assets/icons/idea.svg'
import thoughtImageUrl from './../../assets/icons/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagen de uma balão de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes

function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function restartFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto'>
            {
                feedbackSent
                    ? <FeedbackSuccessStep onRestartFeedback={restartFeedback}/>
                    : <>
                        {
                            !feedbackType
                                ? <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                                : <FeedbackContentStep
                                    feedbackType={feedbackType}
                                    onRestartFeedback={restartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}

                                />
                        }
                    </>
            }
            <footer className='text-xs text-neutral-400'>
                Feito com ❤ pela <a href='https://rocketseat.com.br' className='underline underline-offset-2'>Rocketseat</a>
            </footer>
        </div>
    )
}

export { WidgetForm }