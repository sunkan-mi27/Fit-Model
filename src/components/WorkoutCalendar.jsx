import Calendar from "react-calendar";
import { useState } from "react";
import "./WorkoutCalender.css";

export default function WorkoutCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-card">
      <h3>📅 Workout Calendar</h3>

      <Calendar onChange={setDate} value={date} />

      <p>
        <span>Next Workout:</span>
        <strong> {date.toDateString()}</strong>
      </p>
    </div>
  );
}
