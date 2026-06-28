import * as yup from "yup";

// schema:
const schema = yup.object({
    name: yup.string().required("данное поле обязательно"),
    age:  yup.number().min(2 , "must be at least 2 numbers")
});

// schema structure:
/*

// string:
  yup.string()
  .required('Обязательно')
  .min(3, 'Минимум 3 символа')
  .max(50, 'Максимум 50 символов')
  .email('Некорректный email')
  .url('Некорректный URL')
  .uuid('Некорректный UUID')
  .matches(/^[a-z]+$/, 'Только строчные буквы')   // regex
  .length(10, 'Ровно 10 символов')
  .trim()           // обрезает пробелы перед проверкой
  .lowercase()      // приводит к нижнему регистру
  .uppercase()      // приводит к верхнему регистру
  .oneOf(['admin', 'user'], 'Только admin или user')
  .notOneOf(['banned'], 'Это значение запрещено')
  .nullable()       // разрешает null
  .optional()       // поле необязательное (можно не передавать)
  .default('guest') // значение по умолчанию

// number
yup.number()
  .required('Обязательно')
  .min(0, 'Минимум 0')
  .max(100, 'Максимум 100')
  .positive('Должно быть положительным')   // > 0
  .negative('Должно быть отрицательным')   // < 0
  .integer('Должно быть целым числом')
  .moreThan(5, 'Больше чем 5')             // строго > 5
  .lessThan(10, 'Меньше чем 10')           // строго < 10
  .oneOf([1, 2, 3], 'Только 1, 2 или 3')
  .nullable()
  .default(0)

// boolean:
yup.boolean()
  .required()
  .isTrue('Должно быть true')    // например, checkbox "согласен"
  .isFalse('Должно быть false')
  .default(false)


// date
yup.date()
  .required('Обязательно')
  .min(new Date('2000-01-01'), 'Не раньше 2000 года')
  .max(new Date(), 'Не позже сегодня')
  .nullable()
  .default(new Date())
  
// array:
yup.array()
  .of(yup.string().required())     // тип элементов
  .min(1, 'Минимум 1 элемент')
  .max(5, 'Максимум 5 элементов')
  .length(3, 'Ровно 3 элемента')
  .required()
  .nullable()
  .default([])

// object:
yup.object({
  name: yup.string().required(),
  address: yup.object({           // вложенный объект
    city: yup.string().required(),
    zip: yup.string().matches(/^\d{6}$/, '6 цифр'),
  })
})
.required()
.nullable()
.default({})

// universal:
yup.string() // или number, boolean, date...
  .required('Обязательно')
  .nullable()          // разрешает null
  .optional()          // разрешает undefined
  .default(value)      // значение по умолчанию
  .label('Email')      // имя поля для сообщений ошибок
  .typeError('Неверный тип данных')   // ошибка при неверном типе
  .oneOf([...], msg)   // только эти значения
  .notOneOf([...], msg) // исключить эти значения
  .when('otherField', { // условная валидация
    is: true,
    then: (s) => s.required(),
    otherwise: (s) => s.optional(),
  })
  .test('custom-name', 'Сообщение', (value) => {  // своя логика
    return value !== 'forbidden'
  })
*/


// isValid
/*
  isValid проверяет является ли наща форма валидным.
*/ 
schema.isValid({ name:'123' , age:23 }).then(
  res => console.log(res)
)

// validate:
/*
  abortEarly - показывает только первые ошибки и поэтому мы его отключаем если знаение несколько.
  err / err.message - показывает соклько ошибок 
  err.errors - показывает ошибки в виде массива

  err.inner - показывает и ошибки и название
    err.inner.path - возврашет какое значене.
    err.inner.message - возврашает его ошибку.
*/

const errorObj = {
  name:'',
  age:''
};

schema.validate({name:'' , age:1} , { abortEarly: true } ).then(
  res => console.log(res)
).catch( 
  err => {
      err.inner.forEach(element => {
          errorObj[element.path] = element.message;
      });
      }
);