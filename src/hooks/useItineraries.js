import { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import { checkLocation, checkDate } from './itinerariesFilters'

const dateConverter = ({
  year,
  month,
  dayOfMonth,
  hourOfDay,
  minute,
  second,
}) => new Date(year, month, dayOfMonth, hourOfDay, minute, second)

const buildPagination = (array, limit, page) => {
  const startingPosition = limit * page
  return array.slice(startingPosition, Number(startingPosition) + Number(limit))
}
export const useItineraries = (pagination, search) => {
  const [data] = useFetch('/itineraries')

  const [paginatedData, setPaginatedData] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [parsedData, setParsedData] = useState([])

  useEffect(() => {
    setParsedData(
      data
        ?.map((itinerary) => ({
          ...itinerary,
          arrivalDate: dateConverter(itinerary.arrivalDate),
          departureDate: dateConverter(itinerary.departureDate),
        }))
        .reduce((acc, itinerary) => {
          if (
            checkLocation(search?.from, itinerary.departureLocation) &&
            checkLocation(search?.to, itinerary.arrivalLocation) &&
            checkDate(search?.departureDate, itinerary.departureDate) &&
            checkDate(search?.returnDate, itinerary.arrivalDate)
          ) {
            acc.push(itinerary)
          }
          return acc
        }, [])
        .sort((itineraryA, itineraryB) => itineraryA.price - itineraryB.price)
    )
  }, [data])

  useEffect(() => {
    setPaginatedData(
      (parsedData &&
        pagination !== null &&
        buildPagination(parsedData, pagination.limit, pagination.page)) ||
        parsedData
    )
    setHasMore(parsedData?.length > pagination.limit * (pagination.page + 1))
  }, [parsedData])

  const fetchMore = (pagination) => {
    setPaginatedData(
      buildPagination(parsedData, pagination?.limit, pagination?.page)
    )
    setHasMore(parsedData?.length > pagination.limit * (pagination.page + 1))
  }

  return [paginatedData, fetchMore, hasMore]
}
