import React, { useState } from 'react';
import CompanyInfo from './components/companyinfoform';
import FoodManufacturer from './components/foodmanufacturer';
import Joi from 'joi-browser'
import SignupForm from './components/signupform'
import { green } from "@material-ui/core/colors"
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    button: {
        borderRadius: 25,
        paddingLeft: 30,
        paddingRight: 30,
        color: 'text.primary'

    }
}));
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'

        ].join(','),

    },
    palette: {
        primary: {
            main: green[500]
        },
    }
})




const App = () => {
    //react states
    const [selected, setSelected] = React.useState();

    const [sign, Setsignin] = useState({
        step: 1,
        name: '',
        email: '',
        number: '',
        password: '',
    })
    const [companyinfo, SetCompanyInfo] = useState({
        companyname: '',
        companylocation: '',
        companyoccupation: ''
    })

    const [foodmanufacturer, SetFoodManufacturer] = useState({
        ProductName: '',
        ProductDescription: '',
        VideoLink: '',
        VideoLinkDescription: '',
        ProductIngredients: '',
        NutritionalInfo: ''
    })
    const [SelectedFile, setSelectedFile] = useState([])
    const [FileBase64String, setFileBase64String] = useState("")
    const[finalData, setfinalData] =useState("");

    const [Error, SetError] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        companyname: '',
        companylocation: '',
        companyoccupation: '',
        ProductName: '',
        ProductDescription: '',
        ProductImage: '',
        ProductIngredients: ''


    })
    //destructing the values in the states
    const { step, name, email, number, password } = sign
    const { companyname, companylocation, companyoccupation } = companyinfo
    const info = { companyname, companylocation, companyoccupation }
    const values = { name, email, number, password }
    const { ProductName, ProductDescription } = Error

    //validation of fields using JOI;
    const schema = {
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        number: Joi.string().required().max(10).min(10),
        companyname: Joi.string().required().min(3),
        companyoccupation: Joi.string().required(),
        companylocation: Joi.string().required().min(3),
        ProductName: Joi.string().required().min(3),
        ProductDescription: Joi.string().required().min(10),
        ProductImage: Joi.required(),
        VideoLink: Joi.string(),
        VideoLinkDescription: Joi.string(),
        ProductIngredients: Joi.string(),
        NutritionalInfo: Joi.string(),

    }

    const nextStep = () => {
        const { step } = sign;
        
        if(step ===1)
        {
            axios.post("http://localhost/api.php",sign).then(response=>{
           
                
                
                if(response.data =="success")
                {    
                    Setsignin({ ...sign, step: step + 1 })
                    alert("Successfully Registered...!");
                }
                else
                {
                    alert('This email already exist. Please try another');
                }
            });
            
        }
    
        else if(step===2)
        {
            const data_companyinfo ={
                data_companyname:companyname,
                data_email:email,
                data_companylocation:companylocation,
                data_companyoccupation: companyoccupation
            }
            
            axios.post("http://localhost/api2.php",data_companyinfo).then(response=>{
                Setsignin({ ...sign, step: step + 1 })
            })
            
        }
        else if(step===3 && companyoccupation === 'Food Manufacturer')
        {
            const data_foodmanufacturer ={foodmanufacturer:foodmanufacturer,
                image: FileBase64String,
                email:email}
            axios.post("http://localhost/api3.php",data_foodmanufacturer).then(response=>{
                Setsignin({ ...sign, step: step + 1 })
            }); 
        }
    }
    //sign up form functions
    const handleSelected = (e) => {
        setSelected(e.target.checked)
    }

    const handleChange = (e) => {
        Setsignin({ ...sign, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res, })
    }
    const handlesubmit = () => {

        if (selected === true && Error.name == null && Error.password == null && Error.number == null) {
            return false
        } else {
            return true
        }
    }

    //company info form functions
    const handleChangeCompany = (e) => {
        SetCompanyInfo({ ...companyinfo, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res })

    }
    const handledisabled = () => {
        if (Error.companyname === null && Error.companylocation === null && Error.companyoccupation === null) {
            return false
        } else {
            return true
        }

    }

    //food manufacturer form functions
    const handleChangeFood = (e) => {
        SetFoodManufacturer({ ...foodmanufacturer, [e.target.name]: e.target.value })
        const obj = { [e.target.name]: e.target.value }
        const schema1 = { [e.target.name]: schema[e.target.name] }
        const { error } = Joi.validate(obj, schema1)
        const res = error ? error.details[0].message : null
        SetError({ ...Error, [e.target.name]: res })
       
    }

    const handleimageupload = (e) => {
        setSelectedFile(e.target.files)
        //SetFoodManufacturer({ ...foodmanufacturer, ProductImage: img })     
    }
    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () =>{
                var Base64 = reader.result
                console.log(Base64);
                setFileBase64String(Base64);
            }
        }
    }
    encodeFileBase64(SelectedFile[0]);


    const handledisabledfood = () => {
        if (ProductName === null && ProductDescription === null) {
            return false
        } else {
            return true
        }
    }

    //conditional Rendering
    if (step === 1) {
        return (
            <SignupForm
                handleChange={handleChange}
                nextStep={nextStep}
                handlesubmit={handlesubmit}
                values={values}
                selected={selected}
                handleSelected={handleSelected}
                Error={Error}
                theme={theme}
                useStyles={useStyles}

            />)
           

    } else if (step === 2) {
        return (
            <CompanyInfo
                values={info}
                handleChangeCompany={handleChangeCompany}
                header={name}
                nextStep={nextStep}
                error={Error}
                handledisabled={handledisabled}
                theme={theme}
                useStyles={useStyles}
            />
        )
    } else if (step === 3 && companyoccupation === 'Food Manufacturer') {
        return (<FoodManufacturer
            name={name}
            handleChangeFood={handleChangeFood}
            Error={Error}
            handleimageupload={handleimageupload}
            nextStep={nextStep}
            handledisabledfood={handledisabledfood}
            theme={theme}
            useStyles={useStyles}


        />)
    } else {
        return (<h2>nextpage</h2>)
    }
    
}

export default App;