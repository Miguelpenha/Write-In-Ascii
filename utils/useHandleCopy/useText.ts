import { RefObject, useEffect, useState } from 'react'

function useText(textRef: RefObject<HTMLPreElement>) {
    const [text, setText] = useState('')

    useEffect(() => {
        if (textRef.current) {
            setText(textRef.current.innerText.replace(/> /g, ''))
        }
    }, [textRef.current?.innerText])

    return text
}

export default useText