import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Character } from '../../@types/characters.ts'

import './index.scss'
import { Filter } from '../../components/Filter'
import { Card } from '../../components/Card/index.tsx'

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
          <Card character={character} key={character.id} />
        ))}
      </main>
    </div>
  )
}