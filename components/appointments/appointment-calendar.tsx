"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentCalendarProps {
  className?: string;
}

export function AppointmentCalendar({ className }: AppointmentCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // January 2026

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
  // Adjust to Monday = 0
  const adjustedStartingDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

  // Get previous month's days to fill the grid
  const previousMonthLastDay = new Date(year, month - 1, 0);
  const daysInPrevMonth = previousMonthLastDay.getDate();

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const calendarDays: (number | null)[] = [];

  // Add previous month's trailing days
  for (let i = adjustedStartingDay - 1; i >= 0; i--) {
    calendarDays.push(daysInPrevMonth - i);
  }

  // Add current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Add next month's leading days to fill the grid (42 cells total)
  const remainingCells = 42 - calendarDays.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendarDays.push(i);
  }

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden",
        className
      )}
    >
      {/* Calendar Header */}
      <div className="bg-header-orange text-header-text-on-dark px-6 py-4 flex items-center justify-between">
        <button
          onClick={handlePrevMonth}
          className="text-header-text-on-dark hover:text-header-text-on-dark/80 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-lg lg:text-xl font-bold">
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={handleNextMonth}
          className="text-header-text-on-dark hover:text-header-text-on-dark/80 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 bg-header-teal/20">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="px-2 py-3 text-center text-sm font-semibold text-header-teal"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((day, index) => {
          const isCurrentMonth = index >= adjustedStartingDay && day !== null && day <= daysInMonth;
          const isPrevMonth = index < adjustedStartingDay;
          const isNextMonth = day !== null && day > daysInMonth;

          return (
            <div
              key={index}
              className={cn(
                "border border-gray-200 min-h-[60px] lg:min-h-[80px] p-2 flex items-center justify-center",
                !isCurrentMonth && "text-gray-400",
                isCurrentMonth && "text-gray-700"
              )}
            >
              {day !== null && (
                <span className="text-sm lg:text-base">{day}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

