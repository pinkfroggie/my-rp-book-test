import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, StyledTitle, colors, ButtonGroup, TextLink, ExtraText } from "./../components/Styles";

// formik
import {Formik, Form} from 'formik';
import { TextInput } from "./../components/FormLib";
import * as Yup from 'yup';

// auth & redux
import {connect} from 'react-redux';
import { loginUser } from "./../auth folder/actions/userActions";
import {useHistory } from 'react-router-dom';


const Login = ({loginUser}) => {
    const history = useHistory();
    return(
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={25}>
                    Log in to your book!
                </StyledTitle>
                <Formik>
                     initialValues={{
                        name: "",
                        username: "",
                        password: "",
                     }}
                     validationSchema={
                        Yup.object({
                            name: Yup.string(),
                            username: Yup.string().username('Please enter your username').required('Required'),
                            password: Yup.string().min(4, 'Password is too short').required('Required'),
                        })
                     }

                        onSubmit={(values, {setSubmitting, setFieldError}) =>
                        {console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting);
                     }}
                        {({ isSubmitting }) => (
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="name"
                            />
                            <TextInput 
                                name="username"
                                type="text"
                                label="username"
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="password"
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Log in
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>)
                        }
                </Formik>
                <ExtraText>
                    New here? <TextLink to='/Signup'>Sign up.</TextLink>
                </ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default connect(null, {loginUser})(Login);

// import React, {useState} from 'react';

// function LoginForm({ Login, error }) {
//   const [details, setDetails] = useState({name: "", username: "", password: ""});

//     const submitHandler = e => {
//       e.preventDefault();

//       Login(details);
//     }

//   return (
//     <form onSubmit={submitHandler}>
//         <div className='form-inner'>
//             <h2>Login</h2>
//             {(error != "") ? (<div className='error'>{error}</div>) : "" }
//             <div className='form-group'>
//                 <label htmlFor='name'>Name:</label>
//                 <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor='username'>Username:</label>
//                 <input type='username' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor='password'>Password</label>
//                 <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
//               </div>
//                 <input type="submit" value="Login" />
//         </div>
//     </form>
//   )
// }

// export default LoginForm