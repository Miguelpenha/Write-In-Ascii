import { useState, useRef } from 'react'
import asciiDefault from '../utils/asciiDefault'
import useHandleCopy from '../utils/useHandleCopy'
import Head from 'next/head'
import { Container, Title, Subtitle, Texts, Textarea, Text, Buttons } from '../styles/pages'
import convertASCII from '../utils/convertASCII'
import ButtonCopy from '../components/ButtonCopy'
import Gallery from '../components/Gallery'

function Home() {
    const [ascii, setAscii] = useState(asciiDefault)
    const textRef = useRef<HTMLPreElement>(null)
    const { handleCopyText, handleCopyASCII } = useHandleCopy(textRef, ascii)

    return <>
        <Head>
            <title>Write in ASCII</title>
            <meta name="twitter:site" content="@MglPenha"/>
            <meta name="twitter:creator" content="@MglPenha"/>
            <meta property="og:title" content="Write in ASCII"/>
            <meta name="description" content="Escreva em ASCII"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:description" content="Escreva em ASCII"/>
            <link rel="canonical" href="https://write-in-ascii.vercel.app"/>
            <meta property="og:url" content="https://write-in-ascii.vercel.app"/>
            <meta property="og:image" content="https://write-in-ascii.vercel.app/img/thumbnail.png"/>
        </Head>
        <Container>
            <Title>Write in ASCII</Title>
            <Subtitle>This project is inspired by the film "<a href="https://www.google.com/search?q=film+the+martian" target="_blank">The Martian &#x1F331;</a>"</Subtitle>
            <Texts>
                <Textarea
                    rows={10}
                    id="text"
                    name="text"
                    defaultValue={ascii}
                    placeholder="Write you ASCII: "
                    onChange={ev => setAscii(ev.target.value)}
                />
                <Text ref={textRef} dangerouslySetInnerHTML={{ __html: convertASCII(ascii) }}/>
            </Texts>
            <Buttons>
                <ButtonCopy title="Copy ASCII" handleCopy={handleCopyASCII}/>
                <ButtonCopy title="Copy Text" handleCopy={handleCopyText}/>
            </Buttons>
            <Gallery/>
        </Container>
    </>
}

export default Home