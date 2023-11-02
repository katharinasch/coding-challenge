'use client'
import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import fetchData from '../../api/fetchData'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Pagination from '@/components/Pagination'

type SearchItem = {
  title: string
  description: string
}

const SearchResults = () => {
  const [searchData, setSearchData] = useState<SearchItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('page')
  // get to a desired page by changing url params
  const requestedPage = searchParams.get('p')

  useEffect(() => {
    const url = 'https://cdn.statcdn.com/static/application/search_results.json'
    fetchData(url)
      .then((data) => {
        const filteredData: SearchItem[] = data.items.map((item) => ({
          title: item.title,
          description: item.description,
        }))
        setSearchData(filteredData)
      })
      .catch((error) => {
        console.error('Error fetching search results:', error)
      })
  }, [])

  // get to a desired page by changing url params
  useEffect(() => {
    if (requestedPage) {
      setCurrentPage(parseInt(requestedPage, 10))
    }
  }, [requestedPage])

  // Calculate number of pages for pagination
  const totalPages = Math.ceil(searchData.length / itemsPerPage)

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = searchData.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <div className="bg-royalblue md:px-100 h-[150px]">
        <div className="pt-10">
          <Image
            src="statista_logo.svg"
            alt="Statista Logo"
            width={200}
            height={50}
            className="lg:absolute top-10 left-40 mx-auto"
          />
        </div>
      </div>
      <div className="h-[100px] flex items-center justify-center px-10 bg-white">
        <SearchBar searchData={searchData} setSearchData={setSearchData} />
      </div>
      <div role="status" aria-live="polite" className="h-[100px] bg-lightgrey lg:px-40 px-10 font-sans py-7">
        <h2 className="text-spacegray font-bold" aria-label={`Total results: ${searchData.length}`}>
          TOTAL RESULTS: <span className="text-royalblue font-thin">{searchData.length}</span>
        </h2>
        <h2 className="text-spacegray font-bold" aria-label={`Search term: ${searchTerm}`}>
          SEARCH TERM: <span className="text-royalblue font-thin">{searchTerm}</span>
        </h2>
      </div>
      {searchData.length > 0 ? (
        <div className="lg:px-40 px-10 bg-white py-10">
          <div className="space-y-4 bg-white">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-md transition-colors duration-300 ease-in-out hover:bg-lightgrey"
              >
                <div className="text-skyblue font-bold font-sans">
                  {item.title}
                </div>
                <div className="text-royalblue overflow-ellipsis overflow-hidden whitespace-nowrap font-sans font-thin">
                  {item.description.split(' ').slice(0, 10).join(' ')}
                  {item.description.split(' ').length > 10 ? '...' : ''}
                </div>
              </div>
            ))}
          </div>
          <div className="px-48 bg-white py-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <p>No search results yet.</p>
      )}
    </>
  )
}

export default SearchResults
