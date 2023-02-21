import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import "./calender.css"
import { useDispatch, useSelector } from 'react-redux';
import { getLeavesThunk } from '../../../redux/asyncThunk/leaveasyncThunk';

export const Dashboard = () => {
  const { leaveslist } = useSelector((state) => state.leave)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeavesThunk())
  }, [])

  const isWithinRange = (date) => {
    var found = false;
    leaveslist?.map((item) => {
      var { start_date, end_date } = item;

      if (start_date && end_date && date >= start_date && date <= end_date) {
        found = true;
        return;
      }
    })
    return found;
  };
  // console.log("---------------->", leaveslist[0]);


  return (
    <>
      <div>
        <Calendar
          tileClassName={({ date, view }) => {
            const formattedDate = moment(date).format("YYYY-MM-DD");
            const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
            const endOfMonth = moment().add(1, 'months').endOf('month').format('YYYY-MM-DD');
            if ((moment(formattedDate).weekday() !== 0 && moment(formattedDate).weekday() != 6) && formattedDate >= startOfMonth && formattedDate <= endOfMonth) {
              if (isWithinRange(formattedDate)) {
                return 'highlight'
              }
            }
          }}
        />
      </div>
    </>
  );
}
