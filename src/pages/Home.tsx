import { FC } from 'react'
import { useQuery } from 'react-query'
import Loading from 'components/Loading'
import CountryList from 'components/country-list/CountryList'
import { CountryProps } from 'types/country'

const fetchCountries = () =>
  fetch('https://restcountries.com/v2/all').then((res) => res.json())

const Home: FC = () => {
  const { isLoading, error, data } = useQuery<CountryProps[], Error>(
    'allCountries',
    fetchCountries,
    { refetchOnWindowFocus: false }
  )

  if (isLoading) {
    return <Loading />
  }

  if (error || !data) {
    return <p>An error has occurred</p>
  }

  return <CountryList countries={data} />
}

export default Home
