// import React from 'react';
// import {Formik, Form, Field} from 'formik';
//
// import {Button} from "../index";
// import {listInputs, DB,} from '../../constants'
// import {validationSchema} from '../../shema'
//
// export const FormBlock = () => {
//
//     const submit = values => {
//         DB.push(values);
//         console.log(DB);
//     };
//
//     return (
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 phone: '',
//                 gender: '',
//                 age: ''
//             }}
//             onSubmit={values => submit(values)}
//             validationSchema={validationSchema}
//         >
//             {({errors, touched}) => (
//
//                 <Form>
//                     <h1>FORM</h1>
//                     <div className="form-group">
//                         <label htmlFor='firstNameExampleInput'>First Name</label>
//                         <Field
//                             name='firstName'
//                             type='text'
//                             className="form-control"
//                             id='firstNameExampleInput'/>
//                         {errors.firstName && touched.firstName && (
//                             <small className="form-text text-danger">{errors.firstName}</small>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor='lastNameExampleInput'>Last Name</label>
//                         <Field
//                             name='lastName'
//                             type='text'
//                             className="form-control"
//                             id='lastNameExampleInput'/>
//                         {errors.lastName && touched.lastName && (
//                             <small className="form-text text-danger">{errors.lastName}</small>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor='phoneExampleInput'>Phone</label>
//                         <Field
//                             name='phone'
//                             type='text'
//                             className="form-control"
//                             id='phoneExampleInput'/>
//                         {errors.phone && touched.phone && (
//                             <smal className="form-text text-danger">{errors.phone}</smal>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor='genderExampleInput'>Gender</label>
//                         <Field
//                             name='gender'
//                             as="select"
//                             className="form-control"
//                             id='genderExampleInput'>
//                             <option value="">Select your gender</option>
//                             <option value="Men">Men</option>
//                             <option value="Woman">Woman</option>
//                         </Field>
//                         {errors.gender && touched.gender && (
//                             <smal className="form-text text-danger">{errors.gender}</smal>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor='ageExampleInput'>Age</label>
//                         <Field
//                             name='age'
//                             type='number'
//                             className="form-control"
//                             id='ageExampleInput'/>
//                         {errors.age && touched.age && (
//                             <small className="form-text text-danger">{errors.age}</small>
//                         )}
//                     </div>
//                     {/*{*/}
//                     {/*    listInputs.map(({name, title, type}, i) => {*/}
//                     {/*        return (*/}
//                     {/*            <div className="form-group" key={name + i}>*/}
//                     {/*                <label htmlFor={`${name}ExampleInput`}>{title}</label>*/}
//                     {/*                <Field*/}
//                     {/*                    style={{color: 'red'}}*/}
//                     {/*                    name={name}*/}
//                     {/*                    type={type}*/}
//                     {/*                    className="form-control"*/}
//                     {/*                    id={`${name}ExampleInput`}/>*/}
//                     {/*                {errors.title && touched.title && (*/}
//                     {/*                    <span style={{ color: 'red' }}>{errors.title}</span>*/}
//                     {/*                )}*/}
//                     {/*                <small className="form-text text-muted">*/}
//                     {/*                    Enter yours {title}*/}
//                     {/*                </small>*/}
//                     {/*            </div>*/}
//                     {/*        )*/}
//                     {/*    })*/}
//                     {/*}*/}
//                     <Button/>
//                 </Form>
//             )}
//         </Formik>
//     )
// };
