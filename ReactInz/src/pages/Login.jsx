import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import AuthService from '../services/auth.service'
import loginImage from '../assets/loginImage.jpg'
import { Link } from 'react-router-dom'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const Login = () => {
    let navigate = useNavigate()

    const form = useRef()
    const checkBtn = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
        }
    
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
        }
    
    const handleLogin = (e) => {
        e.preventDefault()
    
        setMessage('')
        setLoading(true)
    
        form.current.validateAll()
    
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate('/profile')
                    },
                (error) => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
                    setLoading(false)
                    setMessage(resMessage)
                    }
                )
            } else {
                setLoading(false)
                }
        }


  return (
    <div className='bg-gradient-primary'>
        <div className='container'>

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    
                    {/* Nested Row within Card Body */}
                    <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image">
                        <img src={loginImage} alt="loginImage" />
                    </div>

                    <div className="col-lg-6">
                        <div className="p-5">

                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>

                            <Form className="user" onSubmit={handleLogin} ref={form}>

                                <div className="form-group">
                                    <label htmlFor='username'>Username</label>
                                    <Input type="text" className="form-control form-control-user" name="username" value={username} onChange={onChangeUsername} validations={[required]} placeholder="Użytkownik" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor='username'>Password</label>
                                    <Input type="password" className="form-control form-control-user" name="password" value={password} onChange={onChangePassword} validations={[required]} placeholder="Hasło" />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <Input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                        Me</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <Link to="/HomePage" className="btn btn-primary btn-user btn-block" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                        <span>Login</span>
                                    </Link>
                                </div>

                                <hr />
                                {message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton style={{ display: 'none' }} ref={checkBtn} />
                            </Form>

                            <hr />

                            <div className="text-center">
                                <Link className="small" to="/Register">Zarejestruj się</Link>
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

export default Login