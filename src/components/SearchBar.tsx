import { useState } from 'react'
import { useRouter } from 'next/navigation'
import fetchData from '../api/fetchData'

type SearchItem = {
  title: string
  description: string
}

const SearchBar = ({
  searchData,
  setSearchData,
}: {
  searchData: SearchItem[]
  setSearchData: React.Dispatch<React.SetStateAction<SearchItem[]>>
}) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  // If there was a "real" API search term would be needed for request too
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = 'https://cdn.statcdn.com/static/application/search_results.json'
    try {
      const data = await fetchData(url)
      const filteredData: SearchItem[] = data.items.map((item) => ({
        title: item.title,
        description: item.description,
      }))
      setSearchData(filteredData)
      // Redirect to search results page
      const searchResultUrl = `/searchResults?page=${encodeURIComponent(
        searchTerm,
      )}&p=1`
      router.push(searchResultUrl)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <label htmlFor="search-bar" className="sr-only">
        Search statista
      </label>
      <input
        id="search-bar"
        name="search"
        type="search"
        required
        value={searchTerm}
        onChange={handleChange}
        className="h-14 md:w-[500px] sm:w-full rounded-l-md border-2 border-skyblue bg-white px-3.5 py-2 text-gray-900 focus:outline-none"
        placeholder="Find statistics, forecasts and reports"
      />
      <button
        onClick={handleSearch}
        type="submit"
        className="h-14 md:w-[200px] rounded-r-md bg-skyblue border-2 border-skyblue text-white font-bold py-2 px-4 focus:outline-none flex items-center justify-center"
      >
        <span className="hidden md:inline mr-2 font-sans">Statista search</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5.83335C0 7.38044 0.614573 8.86418 1.70854 9.9581C2.80249 11.0521 4.28621 11.6667 5.8333 11.6667C6.98558 11.6667 8.10271 11.3258 9.04983 10.6998L12.0084 13.6583C12.464 14.1139 13.2027 14.1139 13.6583 13.6583C14.1139 13.2027 14.1139 12.464 13.6583 12.0084L10.6997 9.04982C11.3257 8.10272 11.6666 6.98561 11.6666 5.83335C11.6666 4.28625 11.052 2.80251 9.95802 1.70855C8.8641 0.614578 7.38038 0 5.8333 0C4.28621 0 2.80249 0.614578 1.70854 1.70855C0.614573 2.80251 0 4.28625 0 5.83335ZM3.35844 8.30822C2.70207 7.65184 2.33332 6.76161 2.33332 5.83335C2.33332 4.90509 2.70207 4.01485 3.35844 3.35847C4.01481 2.70209 4.90504 2.33334 5.8333 2.33334C6.76155 2.33334 7.65178 2.70209 8.30815 3.35847C8.96453 4.01485 9.33327 4.90509 9.33327 5.83335C9.33327 6.76161 8.96453 7.65184 8.30815 8.30822C7.65178 8.9646 6.76155 9.33335 5.8333 9.33335C4.90504 9.33335 4.01481 8.9646 3.35844 8.30822Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  )
}

export default SearchBar
