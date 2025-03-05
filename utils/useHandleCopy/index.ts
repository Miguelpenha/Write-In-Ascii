import { RefObject } from 'react'
import useText from './useText'
import handleCopy from './handleCopy'

function useHandleCopy(textRef: RefObject<HTMLPreElement | null>, ascii: string) {
    const text = useText(textRef)

    return {
        handleCopyText: async () => handleCopy(text),
        handleCopyASCII: async () => handleCopy(ascii)
    }
}

export default useHandleCopy