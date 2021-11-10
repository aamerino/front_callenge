import React, { useState } from 'react'
import { useItineraries } from '../../../hooks/useItineraries'
import { List, FlightsRenderer, Pagination } from '../../../ui'
import { useSearchParams } from 'react-router-dom'

const PAGE_LIMIT = 10

const FlightsList = () => {
  const [searchParams] = useSearchParams()
  const [flightsData, fetchMore, hasMore] = useItineraries(
    { limit: PAGE_LIMIT, page: 0 },
    Object.fromEntries(searchParams)
  )

  const [currentPage, setCurrentPage] = useState(0)

  const prevPage = () => {
    fetchMore({ limit: PAGE_LIMIT, page: currentPage - 1 })
    setCurrentPage(currentPage - 1)
  }

  const advPage = () => {
    fetchMore({ limit: PAGE_LIMIT, page: currentPage + 1 })
    setCurrentPage(currentPage + 1)
  }

  return (
    (flightsData && (
      <>
        <List itemRenderer={FlightsRenderer} data={flightsData} />
        <Pagination
          current={currentPage + 1}
          back={prevPage}
          hasBack={currentPage > 0}
          next={advPage}
          hasNext={hasMore}
        ></Pagination>
      </>
    )) ||
    null
  )
}

export default FlightsList
