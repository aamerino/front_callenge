import React from 'react'
import { Text, Layout } from '../ui'
import FlightsList from '../components/flights/FlightsList'

export default function Results() {
  return (
    <Layout>
      <Text title>Results</Text>
      <FlightsList />
    </Layout>
  )
}
