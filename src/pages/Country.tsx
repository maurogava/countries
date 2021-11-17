import { FC, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from 'components/Loading'
import CountryDetails from 'components/CountryDetails'
import { CountryDetailsProps } from 'types/countryDetails'

const Country: FC = () => {
  const { slug } = useParams()

  const fetchCountry = useCallback(
    () =>
      fetch(`https://restcountries.com/v2/name/${slug}`).then((res) =>
        res.json()
      ),
    [slug]
  )

  const { isLoading, error, data } = useQuery<CountryDetailsProps[], Error>(
    ['country', slug],
    fetchCountry,
    { refetchOnWindowFocus: false }
  )

  if (isLoading) {
    return <Loading />
  }

  if (error || !data) {
    return <p>An error has occurred</p>
  }

  // The API always return an Array with only one Country
  const countryData = data[0]

  return <CountryDetails country={countryData} />
}

export default Country
