import React, { useEffect, useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import EventModal from './EventModal';
import TodoList from './todoList';

const Calendar = () => {
  console.log('Calendar component rendered');

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || {});

  useEffect(() => {
    console.log('useEffect triggered');
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({
        date: new Date(date),
        events: events[date.toDateString()] || [],
      });
      date.setDate(date.getDate() + 1);
    }

    // Organize days into weeks for the calendar
    const weeks = [];
    let week = [];
    days.forEach((day, index) => {
      if (index % 7 === 0 && week.length > 0) {
        weeks.push(week);
        week = [];
      }
      week.push(day);
    });
    weeks.push(week);

    return weeks;
  };

  const days = getDaysInMonth(currentMonth, currentYear);

  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    setCurrentYear(prev => (currentMonth === 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    setCurrentYear(prev => (currentMonth === 11 ? prev + 1 : prev));
  };

  const handleDayClick = (date) => {
    console.log('Day clicked:', date);
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    console.log('Modal closed');
    setIsModalOpen(false);
    setEventText('');
  };

  const handleSaveEvent = () => {
    const dateKey = selectedDate.toDateString();
    const newEvents = { ...events };
    if (!newEvents[dateKey]) newEvents[dateKey] = [];
    newEvents[dateKey].push(eventText);

    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
    handleModalClose();
  };

  const handleDeleteEvent = () => {
    const dateKey = selectedDate.toDateString();
    const newEvents = { ...events };
    if (selectedEventIndex !== null) {newEvents[dateKey].splice(selectedEventIndex, 1);
      if(newEvents[dateKey].length === 0) delete newEvents[dateKey];
    }

    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
    handleModalClose();
  }

  return (
    <div>
      <h1>Calendar</h1>
      <CalendarHeader
        month={monthName}
        year={currentYear}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody days={days} onDayClick={handleDayClick} />
      <EventModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveEvent}
        eventText={eventText}
        setEventText={setEventText}
      />
      <TodoList/>
    </div>
  );
};

export default Calendar;
