import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'
import { Button, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";


const FormContainer = () => {

    const [ userData, setUserData ] = useState({});
    const navigate = useNavigate();
    const { userid } = useParams();

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    
    const { register, control, handleSubmit, formState, watch, reset } = form;
    const { errors } = formState;
    
    
    const onSubmit = (data) => {
        console.log('data', data);
        reset();
    }

    const handleBackPage = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>react-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="form-control">
                    <label htmlFor='firstName'>FirstName</label>
                    <input 
                        type='text' 
                        id='firstName' 
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: 'FirstName is required'
                            }
                        })}
                    />
                    <p className="error">{errors.firstName?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor='lastName'>LastName</label>
                    <input 
                        type='text' 
                        id='lastName' 
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: 'LastName is required'
                            }
                        })}
                    />
                    <p className="error">{errors.firstName?.message}</p>
                </div>
                
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid email format'
                            }
                        })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>
                
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='text' 
                        id='password' 
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is must"
                            }
                        })} 
                    />
                    <p className="error">{errors.password?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input 
                        type='text' 
                        id='confirmPassword' 
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "confirmPassword is must"
                            },
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Your passwords do no match";
                                  }
                            }
                        })} 
                    />
                    <p className="error">{errors.confirmPassword?.message}</p>
                </div>

                <Stack spacing={2} direction={'row'}>
                    <Button type="submit" variant="contained" size="small" >
                        Submit
                    </Button>    
                    <Button variant="outlined" size="small" onClick={handleBackPage}>
                        Back
                    </Button>   
                </Stack>
            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default FormContainer