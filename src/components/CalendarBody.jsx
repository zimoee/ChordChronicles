import React from 'react';


const CalendarBody = ({ days, onDayClick }) => {
  console.log('CalendarBody rendered');

  return (
    <table id="calendar">
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {days.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => (
              <td key={dayIndex} onClick={() => onDayClick(day.date)}>
                {day.date.getDate()}
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                    {event}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarBody;