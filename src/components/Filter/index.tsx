import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Search, X } from "lucide-react";

import './index.scss'

interface FilterProps {
  handleFilter: (name: string) => void
}

export function Filter({ handleFilter }: FilterProps) {
  const [inputFilter, setInputFilter] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputFilter(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleCloseClick() {
    setInputFilter('')
  }

  useEffect(() => {
    handleFilter(inputFilter)
  }, [inputFilter])

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <input 
        className="filter__input"
        id="character"
        type="text" 
        placeholder="Nome do personagem"
        onChange={handleInputChange}
        value={inputFilter}
      />

      {!inputFilter 
        ? (
          <button className="filter__button">
            <Search size={25} /> 
          </button>
        )
        : (
          <button className="filter__button" onClick={handleCloseClick}>
            <X size={25} />
          </button>
        )
      } 
      
    </form>
  )
}