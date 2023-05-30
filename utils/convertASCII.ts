function convertASCII(ascii: string) {
    if (ascii) {
        const text = ascii && '&#'+ascii.trim().replace(/ /g, ';&#').replace(/\n/g, ';&#')
        let textBreakLines = ''
        let textFinally = ''

        text.split(';&#').map(letter => textBreakLines += letter && (letter.includes('&#') ? letter : ';&#'+letter))

        textBreakLines.split('&#10;').map(textBL => textFinally += `${textBL.length > 0 ? '> ' : ''}${textBL}&#10;`)

        return textFinally
    } else {
        return ''
    }
}

export default convertASCII