import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 6vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 10vh;

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export const Texts = styled.div`
    gap: 2em;
    width: 80%;
    display: flex;
    align-self: center;
    margin-bottom: 4em;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Textarea = styled.textarea`
    flex: 0.45;
    border: none;
    padding: 1rem;
    color: #efefef;
    font-size: 1rem;
    resize: vertical;
    border-radius: 15px;
    background-color: #0e0e0e;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: #efefef 0px 2px 8px -1px;

    &:focus {
        outline: none;
        border-radius: 5px;
        box-shadow: #efefef 0px 2px 16px -1px;
    }

    &::placeholder {
        color: #efefef;
    }
`

export const Text = styled.pre`
    flex: 0.45;
    padding: 1em;
    border-radius: 8px;
    white-space: pre-wrap;
    box-shadow: #efefef 0px 2px 8px -1px;
`

export const Buttons = styled.div`
    gap: 2em;
    width: 80%;
    display: flex;
    margin-bottom: 3em;
    align-self: center;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`