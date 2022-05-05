import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from "../"
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onRestartFeedback: () => void
    onFeedbackSent: () => void
}

function FeedbackContentStep({
    feedbackType,
    onRestartFeedback,
    onFeedbackSent
}: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function sendFeedback(event: FormEvent) {
        event.preventDefault()

        console.log(screenshot)
        console.log(comment)

        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button type='button' className='left-5 top-5 absolute text-zinc-400 hover:text-zinc-100'
                    onClick={onRestartFeedback}
                >
                    <ArrowLeft weight='bold' className='w-4 h-4' />
                </button>

                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>



            <form className='my-4 w-full' onSubmit={sendFeedback} >
                <textarea
                    className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-500 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
                    placeholder='Conte com detalhes o que está acontecendo...'
                    onChange={event => setComment(event.target.value)}
                />
                <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
                    <button
                        type='submit'
                        className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-centes text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
                        disabled={comment.length === 0}
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}

export { FeedbackContentStep }