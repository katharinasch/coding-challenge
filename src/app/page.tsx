'use client'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'

type SearchItem = {
  title: string
  description: string
}

const Index: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchItem[]>([])
  return (
    <div className="bg-royalblue md:px-100">
      <div className="pt-10">
        <Image
          src="statista_logo.svg"
          alt="Statista Logo"
          width={200}
          height={50}
          className="lg:absolute top-10 left-40 mx-auto"
        />
      </div>
      <div
        className="w-full min-h-screen flex items-center justify-center px-10 md:px-100"
        role="main"
        aria-label="Search Bar Section"
      >
        <SearchBar searchData={searchData} setSearchData={setSearchData} />
      </div>
    </div>
  )
}

export default Index
