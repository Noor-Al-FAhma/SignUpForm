import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Grid, ThemeProvider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
const CompanyInfo = (props) => {
    const { handleChangeCompany, header, nextStep, handledisabled, useStyles, theme } = props
    const { companyname, companylocation, companyoccupation } = props.error
    const classes = useStyles();



    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"><br></br><br></br>

                <Typography variant='h5' color='primary'>  Welcome {header} </Typography>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Company Name'
                        placeholder='Enter Company Name'
                        onChange={handleChangeCompany}
                        variant="outlined"
                        name='companyname'
                        error={companyname ? true : false}
                        helperText={companyname}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Company Location'
                        placeholder='Enter Company Location'
                        onChange={handleChangeCompany}
                        variant="outlined"
                        name='companylocation'
                        error={companylocation ? true : false}
                        helperText={companylocation}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl variant="filled" style={{ minWidth: 325, maxWidth: 325 }}>
                        <InputLabel id="demo-simple-select-filled-label" style={{ fontSize: 18 }}>What does Your Company Do</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={handleChangeCompany}
                            name='companyoccupation'
                            error={companyoccupation ? true : false}
                            helperText={companyoccupation}
                        >

                            <MenuItem value={'Farming'}>Farming</MenuItem>
                            <MenuItem value={'Food Manufacturer'}>Food Manufacturer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" disableElevation onClick={() => nextStep()} disabled={handledisabled()} className={classes.button} size='large'> Next</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default CompanyInfo;