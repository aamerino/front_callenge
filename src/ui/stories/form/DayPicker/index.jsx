import React, { useState } from 'react'
import styled from 'styled-components'
import {
  DayPickerSingleDateController,
  isInclusivelyAfterDay,
} from 'react-dates'
import { Input } from '../Input'
import moment from 'moment'

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 2;
`
const StyledDiv = styled.div`
  width: 100%;
`
export const DayPicker = ({
  value,
  id,
  onChange,
  startDate,
  formater,
  placeholder,
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledDiv>
      <Input
        onClick={() => {
          setIsOpen(true)
        }}
        value={(formater && formater(value)) || value}
        placeholder={placeholder}
      ></Input>
      {isOpen && (
        <StyledWrapper>
          <DayPickerSingleDateController
            {...restProps}
            date={moment()}
            isOutsideRange={(day) =>
              !isInclusivelyAfterDay(day, moment(startDate))
            }
            onDateChange={(date) => {
              onChange({
                [id]: {
                  value: date.toDate(),
                },
              })
              setIsOpen(false)
            }}
          />
        </StyledWrapper>
      )}
    </StyledDiv>
  )
}
