import React, { useState, useEffect } from 'react';
import '../../index.css'
import axios from 'axios';
import {Form, Field,  withFormik} from 'formik';
// import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field';
// import MoleculeInputField from '@s-ui/react-molecule-input-field';
import * as yup from 'yup';


const SubmitStory = ({errors, touched, values, status }) => {

    const [stories, setStories] = useState([]);
    console.log('this is touched', touched);

    useEffect(() => {
        if(status) {
            setStories([...stories, status]);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [status]);

    return (  
        <div className='story-form'>
            <h2>Tell Us Your Story!</h2>

        <Form>
           <Field component= 'input' name='name' type='text' placeholder='Your name' />

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

            <Field component='textarea' name='story' type='text' placeholder='Enter your story...' />

           {touched.story && errors.story && (
               <p className='error'>{errors.story}</p>
           )}


           <Field  component='textarea' name='comment' type='text' placeholder='Your comment' />

           {touched.comment && errors.comment && (
               <p className='error'>{errors.comment}</p>
           )}
           
           <button type='submit'>Submit</button>
        </Form>
        
       </div>
        
    );
}

const FormikSubmitStory =withFormik({
    mapPropsToValues: ( values ) => {
        console.log('Values', values)
        return {
            title: values.title || '',
            story: values.story || '',
            name: values.name || '',
            email: values.email || '',
            comment: values.comment|| '',
        }
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('Fill out this field!'),
        story: yup.string().required('Fill out this field!'),
        name: yup.string().required('Fill out this field!'),
        email: yup.string().email('Email not valid!').required()
    }),

    handleSubmit(values, { setStatus }) {
        axios.post('', values)
        .then(res => {
            console.log(res)
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

}) (SubmitStory)
 
export default FormikSubmitStory;