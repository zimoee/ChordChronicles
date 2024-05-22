import React from 'react';


const CalendarHeader = ({month, year, onPrevMonth, onNextMonth}) => {
  
  return (
    <div id="calendar-header">
      <button onClick={onPrevMonth}>&lt;</button>
      <h2>{`${month} ${year}`}</h2>
      <button onClick={onNextMonth}>&gt;</button>
    </div>
  );
};

export default CalendarHeader;