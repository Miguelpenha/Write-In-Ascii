import { Container, ImageContainer, Image } from './style'
import ImageTable from '../../public/img/Table.jpg'
import ImageTableASCII from '../../public/img/Table ASCII.jpg'
import ImageTableASCIIWithHTML from '../../public/img/Table ASCII with HTML.jpg'

function Gallery() {
    return (
        <Container>
            <ImageContainer href="/img/Table.jpg" target="_blank">
                <Image src={ImageTable} alt="Tabela"/>
            </ImageContainer>
            <ImageContainer href="/img/Table ASCII.jpg" target="_blank">
                <Image src={ImageTableASCII} alt="Tabela ASCII"/>
            </ImageContainer>
            <ImageContainer href="/img/Table ASCII with HTML.jpg" target="_blank">
                <Image src={ImageTableASCIIWithHTML} alt="Tabela ASCII com HTML"/>
            </ImageContainer>
        </Container>
    )
}

export default Gallery