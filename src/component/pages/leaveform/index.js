import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import Card from '@mui/material/Card';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { creteleaveasyncThunk } from '../../../redux/asyncThunk/leaveasyncThunk';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { ROUTE_DEFINATION } from '../../../utils/constants/route.constant';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export const LeaveForm = () => {
    const [start_date, setStart_date] = useState(null);
    const [end_date, setEnd_date] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()

    const navigate = useNavigate()
    console.log(start_date, "start_date")
    console.log(end_date, "end_date")

    const [initialValues, setInitialValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        user_id: "1",
        leave_days: "",

    });

    //   let validation = 
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string().required("firstName Required"),
    //     lastName: Yup.string().required("lastName  Required"),
    //     email: Yup.string().required("email Required"),
    //     start_date: Yup.string().required("start_date Required"),
    //     end_date: Yup.mixed().required("end_date Required"),
    //     // .test("FILE_SIZE","Too big" , (value) => value && value.size < 1024 * 1024)
    //     //.test("FILE_TYPE" , "Invalid" ,  (value) => value && ['product_image/png' , 'product_image/jpeg'].includes(value.type)),
    // });
    const formik = useFormik({
        initialValues,
        //  validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        // enableReinitialize: true,

        onSubmit: (values) => {
            const modifiedObj = {
                ...values, leave_days: moment(values.end_date).diff(moment(values.start_date), 'days')
                , start_date: moment(start_date.$d).format("YYYY-MM-DD"), end_date: moment(end_date.$d).format("YYYY-MM-DD")
            }

            // setLoading(true);
            console.log(modifiedObj, "-------------------------->")
            dispatch(creteleaveasyncThunk({ ...modifiedObj }))
                .unwrap()
                .then((res) => {
                    setLoading(false);

                    navigate(ROUTE_DEFINATION.DASHBOARD);
                })
                .catch((err) => {
                    setLoading(false);
                });
        },
    });

    return (
        <Card
            sx={{
                width: " 58%",
                height: "60%",
                backgroundColor: "#efeded",
                marginLeft: "20rem",
                marginTop: "5rem"
            }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        marginBottom: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FormatAlignLeftIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Leave Form
                    </Typography>

                    <Box noValidate sx={{ mt: 3 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker

                                            name="start_date"
                                            label="Start Date"
                                            value={start_date}
                                            onChange={(value) => setStart_date(value)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="End Date"
                                            name="end_date"
                                            value={end_date}
                                            onChange={(value) => setEnd_date(value)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="reason"
                                        label="Description"
                                        value={formik.values.reason}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>

                </Box>

            </Container>
        </Card>
    )
}
