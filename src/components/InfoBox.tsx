import { FC } from 'react'
import cn from 'classnames'
import { insertSpaces } from 'utils/utils'

import styles from './InfoBox.module.scss'

type InfoBoxProps = {
  label: string
  number?: number
  className?: string
}

const CountryDetails: FC<InfoBoxProps> = ({ number = 0, label, className }) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.number}>{insertSpaces(number)}</div>
    <p className={styles.label}>{label}</p>
  </div>
)

export default CountryDetails
