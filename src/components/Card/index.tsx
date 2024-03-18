import { Character } from "../../@types/characters"

import './index.scss'

interface CardProps {
  character: Character
}

export function Card({ character }: CardProps) {
  return (
    <div className='card'>
      <div className="card__wrapper">
        <h3 className='card__title'>{character.name}</h3>
        
        <div className="card__area">
          <img src={character.image} alt="Harry Potter" className="card__avatar" />

          <div className="card__content">
            <div className="card__group">
              <label>Casa: </label> 
              <span>{character.house}</span>
            </div>

            <div className="card__group">
              <label>Patrono: </label> 
              <span>{character.patronus}</span>
            </div>

            <div className="card__group">
              <label>{character.gender === 'male' ? "Ator" : "Atriz"}: </label> 
              <span>{character.actor}</span>
            </div>

            <div className="card__group">
              <label>Nasceu em: </label> 
              <span>{character.dateOfBirth?.replace(/-/g, '/')}</span>
            </div>

            <div className="card__group">
              <label>Vivo: </label> 
              <span>{character.alive ? "Sim" : "Não"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}