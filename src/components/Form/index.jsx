import React, { useState } from 'react'
import LocationInput from '../LocationInput'
import { Box, Flex, DayPicker, Button, ResponsiveFlex } from '../../ui'
import { curry } from 'lodash/fp'
import { isNotEmpty, isNotSameDeparture } from '../validators'
import { createSearchParams, useNavigate } from 'react-router-dom'

const DEFAULT_DATA = {
  from: { value: '', errors: [true] },
  to: { value: '', errors: [true] },
  departureDate: { value: null, errors: [] },
  returnDate: { value: null, errors: [] },
}

const validateForm = (formData) => {
  return !Object.values(formData).some((element) => element?.errors?.length > 0)
}
const SearchForm = () => {
  const [formData, setFormData] = useState(DEFAULT_DATA)
  const [allowOldDates, setAllowOldDates] = useState(false)
  const navigate = useNavigate()

  const setForm = (value) => {
    setFormData({ ...formData, ...value })
  }

  const validateInput = curry((formData, value, validator) => {
    if (Array.isArray(validator)) {
      return validator.reduce((acc, validator) => {
        const error = validator(value, formData)
        error && acc.push(error)
        return acc
      }, [])
    }
    return validator(value, formData) ? [validator(value, formData)] : []
  })

  const navigateIfNoErrors = () => {
    if (validateForm(formData)) {
      const params = Object.keys(formData).map((field) => {
        let value = formData[field].value
        if (typeof value != 'string') {
          value = value?.toLocaleDateString() || ''
        }
        return [field, value]
      })
      navigate(`/results?${createSearchParams(params)}`)
    }
  }

  return (
    <Box>
      <ResponsiveFlex flexDirection="row">
        <LocationInput
          id="from"
          placeholder="Departure"
          value={formData?.from?.value}
          onChange={setForm}
          validators={isNotEmpty}
          validatorFn={validateInput(formData)}
        ></LocationInput>
        <LocationInput
          id="to"
          placeholder="Arrival"
          onChange={setForm}
          value={formData?.to?.value}
          validators={[isNotSameDeparture, isNotEmpty]}
          validatorFn={validateInput(formData)}
        ></LocationInput>
      </ResponsiveFlex>
      <ResponsiveFlex flexDirection="row">
        <Flex>
          <DayPicker
            id="departureDate"
            placeholder="Departure date"
            onChange={setForm}
            value={formData?.departureDate?.value}
            startDate={allowOldDates ? null : new Date()}
            formater={(date) => date?.toLocaleDateString()}
          ></DayPicker>
        </Flex>
        <Flex>
          <DayPicker
            id="returnDate"
            placeholder="Return date"
            onChange={setForm}
            value={formData?.returnDate?.value}
            startDate={
              allowOldDates
                ? null
                : formData?.departureDate?.value || new Date()
            }
            formater={(date) => date?.toLocaleDateString()}
          ></DayPicker>
        </Flex>
      </ResponsiveFlex>
      <Flex>
        <label htmlFor="allowolddates">
          <input
            id="allowolddates"
            type="checkbox"
            onClick={() => {
              setAllowOldDates(!allowOldDates)
            }}
          />
          Allow old dates
        </label>
      </Flex>
      <Flex flexDirection="row" justifyContent="end">
        <Button label="Search Flight" onClick={navigateIfNoErrors} />
      </Flex>
      <Flex flexDirection="row" justifyContent="end">
        <Button
          label="Get all flights"
          onClick={() => {
            navigate(`/results`)
          }}
        />
      </Flex>
    </Box>
  )
}

export default SearchForm
