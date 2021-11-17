import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'components/Image'
import InfoBox from 'components/InfoBox'
import { CountryDetailsProps } from 'types/countryDetails'

import styles from './CountryDetails.module.scss'

const CountryDetails: FC<{ country: CountryDetailsProps }> = ({
  country: {
    name,
    flags,
    region,
    subregion,
    capital,
    population,
    area,
    gini,
    languages,
  },
}) => {
  const navigate = useNavigate()
  console.log('CountryDetails')
  const handleGoBack = () => navigate(-1)

  const langs = languages.map(({ name }) => (
    <strong key={name} className={styles.language}>
      {name}
    </strong>
  ))

  return (
    <>
      <button type="button" className={styles.backBtn} onClick={handleGoBack}>
        <FaArrowLeft className={styles.backIcon} />
        Back
      </button>

      <div className={styles.hero}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <Image src={flags.svg} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p>
          Capital: <strong>{capital}</strong> city
        </p>
        <p>Languages: {langs}</p>
        <p>
          Sub-region: <strong>{subregion}</strong>
        </p>
        <p>
          Region: <strong>{region}</strong>
        </p>
        <div className={styles.boxWrapper}>
          <InfoBox
            number={population}
            label="Population"
            className={styles.infoBox}
          />
          <InfoBox number={area} label="Area" className={styles.infoBox} />
          <InfoBox number={gini} label="Gini" className={styles.infoBox} />
        </div>
      </div>
    </>
  )
}

export default CountryDetails
