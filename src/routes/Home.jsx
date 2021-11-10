import React from 'react'
import SearchForm from '../components/Form'
import { Text, Layout } from '../ui'

export default function Home() {
  return (
    <Layout page="home">
      <Text title>Search</Text>
      <SearchForm></SearchForm>
    </Layout>
  )
}
