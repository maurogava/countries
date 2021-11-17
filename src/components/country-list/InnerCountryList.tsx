import { FC } from 'react'
import CountryCard from 'components/CountryCard'
import { useListContext } from 'components/country-list/useList'

import styles from './InnerCountryList.module.scss'

export type Country = {
  name: string
  flags: { svg: string }
  region: string
}

const CountryList: FC = () => {
  const { countries } = useListContext()

  const list = countries.map(({ name, flags, region }) => (
    <li key={name}>
      <CountryCard name={name} flags={flags} region={region} />
    </li>
  ))

  return <ul className={styles.list}>{list}</ul>
}

export default CountryList
