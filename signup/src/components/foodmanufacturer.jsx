import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';





const FoodManufacturer = (props) => {
    const { name, handleChangeFood, handleimageupload, nextStep, handledisabledfood, theme, useStyles } = props
    const { ProductName, ProductDescription } = props.Error
    
    const classes = useStyles();



    return (
        <body className='image'>
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    spacing={5}
                    direction="column"
                    alignItems="center"
                    justify="center">

                    <Grid item xs={12}>
                        <Typography variant='h5' color='primary' align='center' gutterBottom >Food Manufacturer</Typography>
                        <Typography color='primary' align='center' gutterBottom>{name}, tell us about your product</Typography><br></br>

                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            label='What is your Product'
                            placeholder='Ex Vrigin Cocunut Oil'
                            variant="outlined"
                            name='ProductName'
                            onChange={handleChangeFood}
                            error={ProductName ? true : false}
                            helperText={ProductName}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            id="outlined-multiline-static"
                            label="Product Description"
                            name='ProductDescription'
                            multiline
                            rows={4}
                            onChange={handleChangeFood}
                            error={ProductDescription ? true : false}
                            helperText={ProductDescription}
                            variant="outlined"
                            placeholder='Type Something'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            id="outlined-multiline-static"
                            label="How To Cook"
                            name='ProductIngredients'
                            multiline
                            rows={4}

                            onChange={handleChangeFood}
                            variant="outlined"
                            placeholder='Type Something'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            id="outlined-multiline-static"
                            label="Nutritional Information"
                            name='NutritionalInfo'
                            multiline
                            rows={4}
                            onChange={handleChangeFood}


                            variant="outlined"
                            placeholder='Type Something'
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            name ='SelectedFile'
                            onChange={handleimageupload}
                            
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="outlined"
                                color="primary"
                                component="span"
                                style={{ minWidth: 325, maxWidth: 325 }}
                                endIcon={<PhotoCamera />}>
                                Upload Product Image
        </Button>
                        </label>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            label='Paste Video Link'
                            variant="outlined"
                            name='VideoLink'
                            onChange={handleChangeFood}
                        />

                    </Grid>

                    <Grid item xs={12}>

                        <TextField style={{ minWidth: 325, maxWidth: 325 }}
                            label='Video Link Description'
                            variant="outlined"
                            name="VideoLinkDescription"
                            onChange={handleChangeFood}
                        />

                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" disableElevation size='large' disabled={handledisabledfood()} onClick={() => nextStep()} className={classes.button}> next</Button>

                    </Grid>





                </Grid>
            </ThemeProvider>
        </body>);
}

export default FoodManufacturer;