export interface Character {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand,
  patronus: string,
  hogwartsStudent: boolean,
  hogwartsStaff: boolean,
  actor: string,
  alive: string,
  image: string
}

interface Wand {
  wood: string
  core: string,
  length: number
}