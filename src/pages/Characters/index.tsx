import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Character } from '../../@types/characters.ts'

import './index.scss'

export function Characters() {
  const [allCharacters, setAllCharacters] = useState<Character[]>([])

  async function getCharacters() {
    const response = await api.get('api/characters')

    setAllCharacters(response.data)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='lp-harry-potter'>
      {/* <header className='lp-harry-potter__header'>
        <form>
          <input 
            type="text" 
            placeholder="Procure pelo personagem"
            onChange={handleInputFilterChange}
          />
        </form>
        {charactersCurrentPage.length > 0 && <Pagination totalCount={filteredCharacters.length} perPage={characterPerPage} /> }
      </header> */}

      <main className='lp-harry-potter__wrapper'>
        {allCharacters.map((character: Character) => (
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