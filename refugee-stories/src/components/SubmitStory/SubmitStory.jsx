import React, { useState, useEffect } from 'react';
import '../../index.css'
import axios from 'axios';
import {Form, Field,  withFormik} from 'formik';
// import Button from '../Button/Button';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import * as yup from 'yup';


const SubmitStory = ({errors, touched, values, status, handleReset }) => {

    const [stories, setStories] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // console.log('this is touched', touched);

    useEffect(() => {
        if(status) {
            setStories([...stories, status]);
            setLoading(true);
        }
        setTimeout(() => {
            setLoading(false);
            handleReset();
           }, 3000);
         // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [status]);


    return (  
        <div className='story-form'>
            <h2>Tell Us Your Story!</h2>

        <Form>
           <Field name='name' type='text' placeholder='Your name' />

           {touched.name && errors.name && (
               <p className='error'>{errors.name}</p>
           )}

           <Field name='email' type='email' placeholder='Your email' />

            {touched.email && errors.email && (
                <p className='error'>{errors.email}</p>
            )}

            <Field name='title' type='text' placeholder='Title of Your Story' />

           {touched.title && errors.title && (
               <p className='error'>{errors.title}</p>
           )}

            <Field component='textarea' name='contents' type='text' placeholder='Enter your story...' />

           {touched.story && errors.story && (
               <p className='error'>{errors.story}</p>
           )}
 
           
           <div style={{marginTop: '40px'}}>
            <button className='button' type='submit'>
                {isLoading && <h3>Submitting the story...</h3>}
                {!isLoading && <h3>Submit Your Story</h3>}
            </button>
           </div>
        </Form>
        
       </div>
        
    );
}

const FormikSubmitStory =withFormik({
    mapPropsToValues: ( values ) => {
        // console.log('Values', values)
        return {
            name: values.name || '',
            email: values.email || '',
            title: values.title || '',
            contents: values.contents || '',
            pending: 1
            // comment: values.comment|| '',
        }
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('Fill out this field!'),
        contents: yup.string().required('Fill out this field!'),
        name: yup.string().required('Fill out this field!'),
        email: yup.string().email('Email not valid!').required()
    }),


    handleSubmit(values, { setStatus }) {
       axios.post('https://refu-stories-api.herokuapp.com/stories/', values)
        .then(res => {
            console.log('Res', res)
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

}) (SubmitStory)


export default FormikSubmitStory;