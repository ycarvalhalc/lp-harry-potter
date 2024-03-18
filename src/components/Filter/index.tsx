import { ChangeEvent, FormEvent } from "react";

import './index.scss'
import { Search } from "lucide-react";

interface FilterProps {
  handleFilter: (name: string) => void
}

export function Filter({ handleFilter }: FilterProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleFilter(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <input 
        className="filter__input"
        id="character"
        type="text" 
        placeholder="Nome do personagem"
        onChange={handleInputChange}
      />

      <Search size={25} />
    </form>
  )
}