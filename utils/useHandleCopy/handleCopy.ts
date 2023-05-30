async function handleCopy(text: string) {
    await navigator.clipboard.writeText(text)
}

export default handleCopy