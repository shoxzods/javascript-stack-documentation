// ------------------------ formik ----------------------------------------------------- //

/*
  formik - это специальная библиотека для проеврки валидации.

  Сушествует два вида: компоннетный и c hook:
*/


// hook - используется для ручной настройки 
/*
  useFormik:

  form ( onSubmit ) -> formik.handleSubmit
  input
      ( onChange ) -> formik.handleChange
      ( onBlur ) -> formik.handleBlur
      ( reset ) -> formik.handeReset

      errors -> formik.errors.email
      touched -> formik.touched.email

      ( value ) -> formik.values.inputName (email)

      formik.isSubmitting
      formik.isValid - когда вес валидация правильная 
      formik.dirty - когда изменится значения 
*/

import { useFormik } from "formik";

export function Formiks() {
  const formik = useFormik({
      initialValues:{   // input datas
        text:'',
        password:''
      },

      validate: (values) => { // vailadtion cheker and errors
          const errors = {};

          if ( values.text.length < 4 ) {
              errors.text = "the length is not valid"
          }

          return errors
      },

      onSubmit: ( values ) => {   // submit method
          console.log(values)
      }
  });

  return (
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <input value={formik.values.text} onChange={formik.handleChange} onBlur={formik.handleBlur} name="text" type="text" autoComplete="off" />
          <p>{ formik.errors.text }</p>
          <input onChange={formik.handleChange } value={formik.values.password} name="password" type="password" />
          <p>{ formik.errors.password }</p>
          <button type="submit">enter</button>
          <button type="reset" >reset</button>
      </form>
  )
}




// компоннет Алтернатива для useFormik
/*
  Formik - для валидации , onSubmit , onReset , intialValues
  Form - держит в себе input , error
  Field - для input

*/ 
import { Formik , Form , Field , ErrorMessage } from "formik";

export function ComponentFormik() {
      return (
        <Formik 
        initialValues={ { password:'' , full_name:"" } } 
        
        validate={ (values) => {
          const errors = {};

          if (values.full_name.length < 2) {
              errors.full_name = "the text is not completed"
          }

          return errors
        }} 
        
        onSubmit={ (values) => {
            console.log(values);
        }}>

        { (formik) => {
         return <Form>
            <Field name = "password" type="password"  />
            <ErrorMessage name="password" component="p" />

            <br /> <br />

            <Field name="full_name" type="text" />
            <ErrorMessage  name="full_name" component="p" />

            <br /><br />
            <button disabled = {formik.isValid} type="submit">submit</button>
          </Form>
        }}
        </Formik>
      )
}