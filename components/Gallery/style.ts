import styled from 'styled-components'
import Link from 'next/link'
import ImageRaw from 'next/image'

export const Container = styled.div`
    gap: 1em;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5em;
    justify-content: space-around;
`

export const ImageContainer = styled(Link)`
    width: 28em;
    display: flex;
    transform: scale(0.95);
    justify-content: center;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        transform: scale(1);
    }

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
    border-radius: 10px;
`