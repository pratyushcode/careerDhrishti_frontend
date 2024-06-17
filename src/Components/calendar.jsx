import React, { useState, useEffect } from 'react';

const Calendar = ({open}) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);

  const generateCalendar = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const calendar = [];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Headers for the days of the week
    daysOfWeek.forEach((day, index) => {
      calendar.push(
        <div key={index} className="text-center font-semibold">
          {day}
        </div>
      );
    });

    // Empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(<div key={Math.random().toString(36).substring(2, 10)} className="text-center py-2 border"></div>);
    }

    // Boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date();
      const isCurrentDate = year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate();

      calendar.push(
        <div
          key={Math.random().toString(36).substring(2, 10)}
          onClick={() => handleDayClick(day)}
          className={`text-center py-2 border cursor-pointer ${isCurrentDate ? 'bg-blue-500 text-white' : ''}`}
        >
          {day}
        </div>
      );
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = selectedDate.toLocaleDateString(undefined, options);
    setSelectedDate(formattedDate);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
  };

  useEffect(() => {
    const dayElements = document.querySelectorAll('.cursor-pointer');
    dayElements.forEach((dayElement) => {
      dayElement.addEventListener('click', () => {
        const day = parseInt(dayElement.innerText);
        handleDayClick(day);
      });
    });

    return () => {
      dayElements.forEach((dayElement) => {
        dayElement.removeEventListener('click', () => {});
      });
    };
  }, [currentYear, currentMonth]);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [opens,setisopen]=useState(false);
  const handleopen=()=>
  {
    setisopen(true);
    open(opens)
    console.log("hello")
  }
  return (
    <>
    <div className="bg-primary flex items-center justify-center w-full ">
      <div className=" w-full h-full">
        <div className="bg-white shadow-lg  overflow-hidden px-0">
          <div className="flex items-center justify-between px-2 bg-gray-700">
            <button onClick={handlePrevMonth} className="text-white">
              Previous
            </button>
            <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
            <button onClick={handleNextMonth} className="text-white">
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2  w-full">{generateCalendar(currentYear, currentMonth)}</div>
          {selectedDate && (
            <div id="myModal" className="modal fixed inset-0 flex items-center justify-center z-50">
              <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
              <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Selected Date</p>
                    <button onClick={handleCloseModal} className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">
                      ✕
                    </button>
                  </div>
                  <div id="modalDate" className="text-xl font-semibold">
                    {selectedDate}
                    
                  </div>
                  <div className=" flex justify-center items-center mt-2 ">
                    <div className='bg-primary h-8 px-2 rounded-sm cursor-pointer text-white' onClick={handleopen}>Book</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

   
    </>
  );
};

export default Calendar;
