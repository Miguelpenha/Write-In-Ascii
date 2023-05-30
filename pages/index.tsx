import { useState, useRef } from 'react'
import useHandleCopy from '../utils/useHandleCopy'
import Head from 'next/head'
import { Container, Title, Texts, Textarea, Text, Buttons } from '../styles/pages'
import convertASCII from '../utils/convertASCII'
import ButtonCopy from '../components/ButtonCopy'

function Home() {
    const [ascii, setAscii] = useState(`72 101 108 108 111 44 32 119 111 114 108 100 33

10 10

73 32 97 109 32 77 105 103 117 101 108 44 32 97 110 100 32 105 32 97 109 32 112 114 111 103 114 97 109 109 101 114`)
    const textRef = useRef<HTMLPreElement>(null)
    const { handleCopyText, handleCopyASCII } = useHandleCopy(textRef, ascii)

    return <>
        <Head>
            <title>Escreva em ASCII</title>
        </Head>
        <Container>
            <Title>Escreva em ASCII</Title>
            <Texts>
                <Textarea
                    rows={9}
                    id="text"
                    name="text"
                    defaultValue={ascii}
                    placeholder="Digite seu ASCII: "
                    onChange={ev => setAscii(ev.target.value)}
                />
                <Text ref={textRef} dangerouslySetInnerHTML={{ __html: convertASCII(ascii) }}/>
            </Texts>
            <Buttons>
                <ButtonCopy title="Copiar ASCII" handleCopy={handleCopyASCII}/>
                <ButtonCopy title="Copiar Texto" handleCopy={handleCopyText}/>
            </Buttons>
        </Container>
    </>
}

export default Home