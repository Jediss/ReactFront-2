import React, {useState, useRef} from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import registerImage from '../assets/registerImage.jpg'
import { Link } from 'react-router-dom'

import AuthService from '../services/auth.service'

const required = (value) => {
    if (!value) {
        return (
        <div className="alert alert-danger" role="alert">
            This field is required!
        </div>
        )
    }
    }

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
        <div className="alert alert-danger" role="alert">
            This is not a valid email.
        </div>
        )
    }
    }

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
        <div className="alert alert-danger" role="alert">
            The username must be between 3 and 20 characters.
        </div>
        )
    }
    }

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
        <div className="alert alert-danger" role="alert">
            The password must be between 6 and 40 characters.
        </div>
        )
    }
    }

const Register = () => {
    
    const form = useRef()
    const checkBtn = useRef()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successful, setSuccessful] = useState(false)
    const [message, setMessage] = useState('')

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
        }

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
        }
    
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
        }

    const handleRegister = (e) => {
        e.preventDefault()

        setMessage('')
        setSuccessful(false)

        form.current.validateAll()

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message)
                    setSuccessful(true)
                    },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                    
                    setMessage(resMessage)
                    setSuccessful(false)
                    }
                )
            }
        }
        
    
    return (
        <div className='bg-gradient-primary'>

            <div className="container">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        {/* Nested Row within Card Body */}
                        <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image">
                            <img src={registerImage} alt="registerImage" />
                        </div>

                        <div className="col-lg-7">
                            <div className="p-5">

                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Stwórz konto!</h1>
                            </div>

                            <Form className="user" onSubmit={handleRegister} ref={form}>
                                {!successful && (
                                    <div>
                                
                                        <div className="form-group row">
                                            <label htmlFor='username'>Username</label>
                                            <Input type="text" className="form-control form-control-user" name="username" value={username} onChange={onChangeUsername} validations={[required, vusername]} placeholder="Użytkownik" />
                                        </div>
                                    

                                        <div className="form-group row">
                                            <label htmlFor='username'>Email</label>
                                            <Input type="text" className="form-control form-control-user" name="email" value={email} onChange={onChangeEmail} validations={[required, validEmail]} placeholder="Email" />
                                        </div>


                                        <div className="form-group row">
                                            <label htmlFor='username'>Password</label>
                                            <Input type="password" className="form-control form-control-password" name="password" value={password} onChange={onChangePassword} validations={[required, vpassword]} placeholder="Hasło" />
                                        </div>

                                        <a className="btn btn-primary btn-user btn-block">Zarejestruj</a>

                                    </div>
                                )}
                                <hr />

                                {message && (
                                    <div className="form-group">
                                        <div className={ successful ? 'alert alert-success' : 'alert alert-danger' } role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}  
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />  
                            </Form>
                            <hr />

                            <div className="text-center">
                                <Link className="small" to="/Login">Masz już konto? Zaloguj się!</Link>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
  )
}

export default Register