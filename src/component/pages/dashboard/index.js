import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import "./calender.css"
import { useDispatch, useSelector } from 'react-redux';
import { getLeavesThunk, getUserDetailThunk } from '../../../redux/asyncThunk/leaveasyncThunk';
import { Card, CardContent, Typography } from '@mui/material';

export const Dashboard = () => {
  const { leaveslist } = useSelector((state) => state.leave)
  const { userDetail } = useSelector((state) => state.leave)
  console.log(userDetail, "userDetail")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeavesThunk())
    dispatch(getUserDetailThunk(moment().format("YYYY-MM-DD")))
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
      {userDetail.length > 0 ? <>
        <Card variant="outlined" sx={{
          width: "22rem",
          margin: "1rem"
        }}>
          <CardContent>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Employee On Leave
            </Typography>

            <Typography variant="body2">
              {userDetail.map((item) => {
                return (
                  <div>{`${item?.first_name} ${item?.last_name}`}</div>
                )
              })}
            </Typography>
          </CardContent>

        </Card>

      </>

        : <>{null}</>}

      <div>
        <Calendar
          onClickDay={(date) => {
            dispatch(getUserDetailThunk(moment(date).format("YYYY-MM-DD")));
          }}
          tileClassName={({ date, view }) => {
            const formattedDate = moment(date).format("YYYY-MM-DD");
            const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
            const endOfMonth = moment().add(1, 'months').endOf('month').format('YYYY-MM-DD');

            if ((moment(formattedDate).weekday() !== 0 && moment(formattedDate).weekday() != 6) && formattedDate >= startOfMonth && formattedDate <= endOfMonth && (formattedDate != moment().format("YYYY-MM-DD"))) {
              if (isWithinRange(formattedDate)) {
                return 'highlight'
              }
            }
            else if ((formattedDate == moment().format("YYYY-MM-DD"))) {
              return 'highlight-blue'
            }
          }}
        />
      </div>
    </>
  );
}
