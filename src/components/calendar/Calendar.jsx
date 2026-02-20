import { useState } from "react";
import { SCalendarContainer, SCalendarTitle, SCalendarBlock, SCalendarNavigation, SCalendarMonth, SCalendarNavActions, SCalendarNavAction, SCalendarArrow, SCalendarContent, SCalendarDaysNames, SCalendarDayName, SCalendarDayNameWeekend, SCalendarCells, SCalendarCellDay, SCalendarCellDayWeekend, SCalendarCellDayCurrent, SCalendarCellOtherMonth, SCalendarCellOtherMonthWeekend, SCalendarPeriod, SCalendarDateEnd, SCalendarDateControl } from "./Calendar.styled";


export const Calendar = ({ isEditTask }) => {
  // console.log("isEditTask: ", isEditTask);

  // const currentDateForTitle = new Date();

  // let currentMonthName = currentDateForTitle.toLocaleString('ru-RU', { month: 'long' });
  // currentMonthName = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);
  // let currentMonthYear = currentMonthName + " " + currentDateForTitle.getFullYear();


  // const [currentDateToDisplay, setCurrentDateToDisplay] = useState(new Date());
  const [currentMonthToDisplay, setCurrentMonthToDisplay] = useState(new Date().getMonth());
  const [currentYearToDisplay, setCurrentYearToDisplay] = useState(new Date().getFullYear());
  // const [currentMonthToDisplay, setCurrentMonthToDisplay] = useState("");
  // const [currentYearToDisplay, setCurrentYearToDisplay] = useState("");

  const currentDateToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay);
  // console.log("currentDateToDisplay: ", currentDateToDisplay);

  const currentMonthName = currentDateToDisplay.toLocaleString('ru-RU', { month: 'long' });
  // console.log("currentMonthName: ", currentMonthName);

  const currentMonthNameForTitle = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);
  // console.log("currentMonthNameForTitle: ", currentMonthNameForTitle);

  const currentPeriodToDisplay = currentMonthNameForTitle + " " + currentYearToDisplay;
  // console.log("currentPeriodToDisplay: ", currentPeriodToDisplay);


  const daysInCurrentMonthToDisplay = new Date(currentYearToDisplay, currentMonthToDisplay + 1, 0).getDate();
  console.log("daysInCurrentMonth: ", daysInCurrentMonthToDisplay);


  const onSelectPrevMonth = () => {
    if (currentMonthToDisplay === 0) {
      setCurrentMonthToDisplay(11);
      setCurrentYearToDisplay(currentYearToDisplay - 1);
    } else {
      setCurrentMonthToDisplay(currentMonthToDisplay - 1);
    }
  };

  const onSelectNextMonth = () => {
    if (currentMonthToDisplay === 11) {
      setCurrentMonthToDisplay(0);
      setCurrentYearToDisplay(currentYearToDisplay + 1);
    } else {
      setCurrentMonthToDisplay(currentMonthToDisplay + 1);
    }
  };

  const dates = Array.from({ length: daysInCurrentMonthToDisplay }, (_, i) => i + 1);
  // console.log("dates: ", dates);

  return (
    <SCalendarContainer>
      <SCalendarTitle>Даты</SCalendarTitle>
      <SCalendarBlock>
        <SCalendarNavigation>
          <SCalendarMonth>{currentPeriodToDisplay}</SCalendarMonth>
          <SCalendarNavActions>
            <SCalendarNavAction
              data-action="prev"
              onClick={onSelectPrevMonth}
            >
              <SCalendarArrow xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </SCalendarArrow>
            </SCalendarNavAction>
            <SCalendarNavAction
              data-action="next"
              onClick={onSelectNextMonth}
            >
              <SCalendarArrow xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </SCalendarArrow>
            </SCalendarNavAction>
          </SCalendarNavActions>
        </SCalendarNavigation>
        <SCalendarContent>
          <SCalendarDaysNames>
            <SCalendarDayName>пн</SCalendarDayName>
            <SCalendarDayName>вт</SCalendarDayName>
            <SCalendarDayName>ср</SCalendarDayName>
            <SCalendarDayName>чт</SCalendarDayName>
            <SCalendarDayName>пт</SCalendarDayName>
            <SCalendarDayNameWeekend>сб</SCalendarDayNameWeekend>
            <SCalendarDayNameWeekend>вс</SCalendarDayNameWeekend>
          </SCalendarDaysNames>
          <SCalendarCells>

            {dates.map((date) => <SCalendarCellDay key={date}>{date}</SCalendarCellDay>)}

            {/* <SCalendarCellOtherMonth>28</SCalendarCellOtherMonth>
            <SCalendarCellOtherMonth>29</SCalendarCellOtherMonth>
            <SCalendarCellOtherMonth>30</SCalendarCellOtherMonth>
            <SCalendarCellDay>31</SCalendarCellDay>
            <SCalendarCellDay>1</SCalendarCellDay>
            <SCalendarCellDayWeekend>2</SCalendarCellDayWeekend>
            <SCalendarCellDayWeekend>3</SCalendarCellDayWeekend>
            <SCalendarCellDay>4</SCalendarCellDay>
            <SCalendarCellDay>5</SCalendarCellDay>
            <SCalendarCellDay>6</SCalendarCellDay>
            <SCalendarCellDay>7</SCalendarCellDay>
            <SCalendarCellDayCurrent>8</SCalendarCellDayCurrent>
            <SCalendarCellDayWeekend>9</SCalendarCellDayWeekend>
            <SCalendarCellDayWeekend>10</SCalendarCellDayWeekend>
            <SCalendarCellDay>11</SCalendarCellDay>
            <SCalendarCellDay>12</SCalendarCellDay>
            <SCalendarCellDay>13</SCalendarCellDay>
            <SCalendarCellDay>14</SCalendarCellDay>
            <SCalendarCellDay>15</SCalendarCellDay>
            <SCalendarCellDayWeekend>16</SCalendarCellDayWeekend>
            <SCalendarCellDayWeekend>17</SCalendarCellDayWeekend>
            <SCalendarCellDay>18</SCalendarCellDay>
            <SCalendarCellDay>19</SCalendarCellDay>
            <SCalendarCellDay>20</SCalendarCellDay>
            <SCalendarCellDay>21</SCalendarCellDay>
            <SCalendarCellDay>22</SCalendarCellDay>
            <SCalendarCellDayWeekend>23</SCalendarCellDayWeekend>
            <SCalendarCellDayWeekend>24</SCalendarCellDayWeekend>
            <SCalendarCellDay>25</SCalendarCellDay>
            <SCalendarCellDay>26</SCalendarCellDay>
            <SCalendarCellDay>27</SCalendarCellDay>
            <SCalendarCellDay>28</SCalendarCellDay>
            <SCalendarCellDay>29</SCalendarCellDay>
            <SCalendarCellDayWeekend>30</SCalendarCellDayWeekend>
            <SCalendarCellOtherMonthWeekend>1</SCalendarCellOtherMonthWeekend> */}
          </SCalendarCells>
        </SCalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <SCalendarPeriod>
          {
            isEditTask ?
              <SCalendarDateEnd>Выберите срок исполнения.<SCalendarDateControl></SCalendarDateControl></SCalendarDateEnd>
              :
              <SCalendarDateEnd>Срок исполнения <SCalendarDateControl>09.09.23</SCalendarDateControl>.</SCalendarDateEnd>
          }
        </SCalendarPeriod>
      </SCalendarBlock>
    </SCalendarContainer>
  )
}