import { FC } from 'react'
import { Link } from 'react-router-dom'
import Image from 'components/Image'
import { CountryProps } from 'types/country'

import styles from './CountryCard.module.scss'

const CountryCard: FC<CountryProps> = ({ name, flags, region }) => {
  return (
    <Link to={`/country-details/${name}`} className={styles.link}>
      <div className={styles.flagWrapper}>
        <Image src={flags.svg} alt={`${name} flag`} className={styles.flag} />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.region}>{region}</p>
        <h3 className={styles.country}>{name}</h3>
        <p className={styles.detailText}>See country details</p>
      </div>
    </Link>
  )
}

export default CountryCard
