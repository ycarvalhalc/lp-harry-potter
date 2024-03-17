import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Character } from '../../@types/characters.ts'

import './index.scss'
import { Filter } from '../../components/Filter'

export function Characters() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([])
  const [characterNameToFilter, setCharacterNameToFilter] = useState('')

  const filteredCharacters = allCharacters
    .filter(character => {
      return character.name.toLowerCase()
        .includes(characterNameToFilter.toLocaleLowerCase())
    })

  async function getCharacters() {
    const response = await api.get('api/characters')

    setAllCharacters(response.data)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='lp-harry-potter'>
      <Filter handleFilter={setCharacterNameToFilter} />

      <main className='lp-harry-potter__wrapper'>
        {filteredCharacters.map((character: Character) => (
          <div className='card' key={character.id}>
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
        ))}
      </main>
    </div>
  )
}