import { FC } from 'react'
import { ListContextProvider } from 'components/country-list/useList'
import InnerCountryList from 'components/country-list/InnerCountryList'
import Search from 'components/country-list/Search'
import { CountryProps } from 'types/country'

const CountryList: FC<{ countries: CountryProps[] }> = ({ countries }) => {
  return (
    <ListContextProvider countries={countries}>
      <Search />
      <InnerCountryList />
    </ListContextProvider>
  )
}

export default CountryList
