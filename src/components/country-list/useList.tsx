import {
  createContext,
  useContext,
  useState,
  FC,
  useMemo,
  useCallback,
} from 'react'
import { CountryProps } from 'types/country'

type Context = {
  countries: CountryProps[]
  results: number
  actions: {
    search: (value: string) => void
  }
}

// Context with defaults
const ListContext = createContext<Context>({
  countries: [],
  results: 0,
  actions: {
    search: () => {},
  },
})

export const useListContext = () => useContext(ListContext)

type ProviderProps = {
  countries: CountryProps[]
}

// Context Provider
export const ListContextProvider: FC<ProviderProps> = ({
  children,
  countries,
}) => {
  const [data, setData] = useState(countries)

  // Method to Filter the data based in the search input
  const search = useCallback(
    (value: string) => {
      // If the input is empty reset the data
      if (!value.length) {
        setData([...countries])
        return
      }

      // Filtering based the input value. This method is case insensitive
      const tempData = countries.filter(({ name }) =>
        new RegExp(value, 'i').test(name)
      )
      setData(tempData)
    },
    [countries]
  )

  const providerData = useMemo(
    () => ({
      countries: data,
      results: data.length,
      actions: {
        search,
      },
    }),
    [data, search]
  )

  return (
    <ListContext.Provider value={providerData}>{children}</ListContext.Provider>
  )
}
