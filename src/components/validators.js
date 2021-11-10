export const isNotEmpty = (value) => (value.length < 1 ? 'Cant be empty' : null)

export const isNotSameDeparture = (value, allValues) =>
  value === allValues.from.value ? 'Cant be same as departure' : null
