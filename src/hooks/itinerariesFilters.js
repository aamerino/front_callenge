export const checkLocation = (searchParam, location) =>
  !searchParam || location === searchParam

export const checkDate = (searchParam, date) =>
  !searchParam || date.toLocaleDateString() === searchParam
