import { PilotCardContainer, Name, Image } from './styled'

export const PilotCard = ({ name, image }) => {
    return (
        <PilotCardContainer>
            <Image> {image} </Image>
            <Name> {name} </Name> 
        </PilotCardContainer>
    )
}