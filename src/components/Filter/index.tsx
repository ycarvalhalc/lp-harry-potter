import { ChangeEvent } from "react";

import './index.scss'

interface FilterProps {
  handleFilter: (name: string) => void
}

export function Filter({ handleFilter }: FilterProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFilter(event.target.value)
  }

  return (
    <form className="filter">
      <label className="filter__label" htmlFor="character">Filtrar: </label>
      <input 
        className="filter__input"
        id="character"
        type="text" 
        placeholder="Nome do personagem"
        onChange={handleInputChange}
      />
    </form>
  )
}