// --------------------- react-hook-form ------------------------------------------ //
/*
  react-hook-from это библиотека для испольщовании в валидации она точно такая же как и formik
  в отличии от него она uncontrolled испольщуется нпраямую с react елееменатми.

  установка:
    npm install ( i ) react-hook-form;
*/

/*
  register - хранит данные от input:
  handleSubmit - всроенный функция для взятия submit form.
  formState - хранит ошибки от input ов.
  validation - пишется внутри register
*/ 

import { useForm } from "react-hook-form";


export default function ReactHookForm() {
  const { register , handleSubmit , formState:{errors , isValid , isSubmitted} } = useForm();

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"  {...register("text" , { 
                                                    required:"please fullfill the text" , 
                                                    minLength: { value:3 , message: 'the minimum length of content must be 6' },
                                                    maxLength: { value:10 , message: "the maximum length must be 10 " },
                                                    min: { value:1, message:"the max number is 10" },
                                                    max: { value:6, message:"the max number is 10" },
                                                    pattern:{
                                                      value: /^[a-zA-Z0-9_]+$/,
                                                      message:"the data is not valid ="
                                                    }
                                                  })}
        placeholder="...some text" />
        <p>{errors.text && errors.text.message}</p>
        <button disabled={isSubmitted} type="submit">send</button>
    </form>
  )
}