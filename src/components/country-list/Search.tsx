import { FC, ChangeEvent, useCallback, memo } from 'react'
import cn from 'classnames'
import { useListContext } from 'components/country-list/useList'

import styles from './Search.module.scss'

type SearchProps = {
  className?: string
}

const Search: FC<SearchProps> = memo(({ className }) => {
  const {
    actions: { search },
  } = useListContext()

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => search(e.currentTarget.value),
    [search]
  )

  return (
    <div className={cn(styles.wrapper, className)}>
      <input
        className={styles.search}
        id="search"
        type="text"
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  )
})

export default Search
