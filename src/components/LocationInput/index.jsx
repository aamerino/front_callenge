import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ErrorText, Flex } from '../../ui'
import { Select } from '../../ui/stories/form/Select'

const LocationInput = ({
  value,
  validators,
  onChange,
  validatorFn,
  id,
  placeholder,
}) => {
  const [data] = useFetch(`/locations?search=${value}`)
  const filteredLocations = data
    ?.filter((location) =>
      location.toLowerCase().includes(value?.toLowerCase())
    )
    .slice(0, 5)

  const errors = validatorFn(value, validators)
  return (
    <>
      <Flex direction="column">
        <Select
          value={value}
          placeholder={placeholder}
          isNotValid={errors?.length > 0}
          onSelect={(value) => {
            onChange({
              [id]: {
                value: value,
                errors: validatorFn(value, validators),
              },
            })
          }}
          options={filteredLocations}
        ></Select>
        {errors &&
          errors.map((error, key) => <ErrorText key={key}>{error}</ErrorText>)}
      </Flex>
    </>
  )
}
export default LocationInput
