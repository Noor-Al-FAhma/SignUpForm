import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const SignupForm = (props) => {


    const { handleChange, nextStep, handlesubmit, handleSelected, selected, theme, useStyles } = props
    const { name, email, number, password } = props.values
    const classes = useStyles();


    return (

        <ThemeProvider theme={theme}>
           
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"  ><br></br><br></br>
                <Typography variant='h5' color='primary'>Sign-Up / Personal Info</Typography>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Name'
                        name='name'
                        placeholder='Enter Your Name'
                        onChange={handleChange}
                        value={name}
                        variant="outlined"
                        error={props.Error.name ? true : false}
                        helperText={props.Error.name}
                        type='text'
                        required="true"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='Email'
                        name='email'
                        placeholder='Enter Email'
                        onChange={handleChange}
                        defaultValue={email}
                        variant="outlined"
                        type='email'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        label='phone number'
                        name='number'
                        placeholder='Enter Phone Number'
                        onChange={handleChange}
                        defaultValue={number}
                        variant="outlined"
                        type='text'
                        error={props.Error.number ? true : false}
                        helperText={props.Error.number}
                        required='true'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField style={{ minWidth: 325, maxWidth: 325 }}
                        placeholder='Enter Password'
                        label=' password'
                        name='password'
                        onChange={handleChange}
                        defaultValue={password}
                        variant="outlined"
                        type='password'
                        error={props.Error.password ? true : false}
                        helperText={props.Error.password}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selected}
                                onChange={(e) => handleSelected(e)}
                                color='primary' />
                        }
                        label="I have agreed to the terms of services"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" disableElevation onClick={() => nextStep()} disabled={handlesubmit()} size='large' type='submit' className={classes.button} > next</Button>
                </Grid>
            </Grid>
            
        </ThemeProvider>


    )
}

export default SignupForm;



