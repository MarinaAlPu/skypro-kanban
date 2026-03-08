import styled from "styled-components";


export const SCalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
`

export const SCalendarTitle = styled.p`
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
`

export const SCalendarBlock = styled.div`
  display: block;
`

export const SCalendarNavigation = styled.div`
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`

export const SCalendarMonth = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const SCalendarNavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCalendarNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SCalendarArrow = styled.svg`
  fill: var(--text-secondary);
`

export const SCalendarContent = styled.div`
  margin-bottom: 12px;
`

export const SCalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`

export const SCalendarDayName = styled.div`
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`

export const SCalendarDayNameWeekend = styled.div`
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`

export const SCalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`

export const SCalendarCellDay = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  ${({ $isDateSelected }) => ($isDateSelected ? "color: var(--text-tertiary);" : "color: var(--text-secondary);")}
  ${({ $isDateSelected }) => ($isDateSelected ? "background-color: #94A6BE;" : "background-color: transparent;")}
  
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: ${({ $isClickable }) => $isClickable ? "pointer" : "default"};

  &:hover {
    ${({ $isClickable }) => ($isClickable ? "color: var(--text-secondary);" : "")}
    ${({ $isClickable }) => ($isClickable ? "background-color: #EAEEF6;" : "")}
  }
  &:active {
    ${({ $isClickable }) => ($isClickable ? "color: var(--text-tertiary);" : "")}
    ${({ $isClickable }) => ($isClickable ? "background-color: #94A6BE;" : "")}
  }
`

export const SCalendarPeriod = styled.div`
  padding: 0 7px;
`

export const SCalendarDateEnd = styled.p`
  color: var(--text-secondary);
  font-size: 10px;
  line-height: 1;
`

export const SCalendarDateControl = styled.span`
  color: var(--text-primary);
`
