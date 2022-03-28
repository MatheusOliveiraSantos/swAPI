import { PilotsPageContainer } from './styled'
import { PilotCard } from '../../components/pilotCard'
import { useState, useEffect } from 'react'
import StarWarsLogo from '../../img/star_wars_logo.png'
import axios from 'axios'

export const PilotsPage = () => {
    const [pilots, setPilots] = useState([])
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/") 
        .then(({data}) => {
            setPilots(data.results)
        }) 
        .catch(error => console.log(error))
    },[])
    
    return (
        <PilotsPageContainer>
            {pilots.map((pilot, index) => <PilotCard key={index} name={pilot.name} image={StarWarsLogo}/>)}
        </PilotsPageContainer>
    )
}   