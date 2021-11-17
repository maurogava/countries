type Language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export type CountryDetailsProps = {
  name: string
  flags: { svg: string }
  region: string
  subregion: string
  capital: string
  languages: Language[]
  population?: number
  area?: number
  gini?: number
}
