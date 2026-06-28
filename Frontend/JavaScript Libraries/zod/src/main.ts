import * as zod from "zod";
import { ParseStatus } from "zod/v3";

const schema = zod.object({
  name: zod.string().nonempty("the field is empty"),
  password: zod.string().trim().toUpperCase().min(4 , "the password must be at least 4 characters")
});

type MyType = zod.infer<typeof schema>;


/*
// string
  z.string()
  .min(3)
  .max(100)
  .length(10)           // точная длина
  .email()
  .url()
  .uuid()
  .regex(/^\d+$/)
  .includes("hello")
  .startsWith("http")
  .endsWith(".com")
  .trim()               // убирает пробелы
  .toLowerCase()
  .toUpperCase()
  .nonempty()           // не пустая строка
  .optional()           // string | undefined
  .nullable()           // string | null
  .default("guest")

// number
z.number()
  .min(0)
  .max(100)
  .int()                // только целые
  .positive()           // > 0
  .negative()           // < 0
  .nonnegative()        // >= 0
  .nonpositive()        // <= 0
  .multipleOf(5)        // кратно 5
  .finite()
  .safe()               // в пределах Number.MAX_SAFE_INTEGER
  .optional()
  .nullable()
  .default(0)

  // boolean:
  z.boolean()
  .optional()
  .nullable()
  .default(false)

  // date:
  z.date()
  .min(new Date("2000-01-01"))
  .max(new Date())
  .optional()

  // enum:
  z.enum(["admin", "user", "guest"])

  // или из TypeScript enum
  enum Role { Admin = "admin", User = "user" }
  z.nativeEnum(Role)

  //array:
  z.array(z.string())
  .min(1)
  .max(10)
  .length(5)            // точная длина
  .nonempty()

  // object:
  z.object({
  name: z.string(),
}).strict()             // запрещает лишние поля
  .strip()              // убирает лишние поля (по умолчанию)
  .passthrough()        // пропускает лишние поля
  .partial()            // все поля optional
  .required()           // все поля required
  .pick({ name: true }) // выбрать поля
  .omit({ name: true }) // исключить поля
  .extend({ age: z.number() }) // добавить поля
  .merge(otherSchema)   // слить две схемы


  // special types:
  z.literal("hello")      // точное значение
z.literal(42)

z.union([z.string(), z.number()])       // string | number
z.discriminatedUnion("type", [          // оптимизированный union
  z.object({ type: z.literal("a"), ... }),
  z.object({ type: z.literal("b"), ... }),
])

z.intersection(schemaA, schemaB)        // A & B

z.tuple([z.string(), z.number()])       // [string, number]

z.record(z.string(), z.number())        // { [key: string]: number }

z.map(z.string(), z.number())           // Map<string, number>
z.set(z.string())                       // Set<string>

z.any()
z.unknown()
z.never()
z.void()
z.null()
z.undefined()
z.nan()
*/

const saveScheam = schema.safeParse({ name: "sdfd" , password:"123232" });

try {
  if ( !saveScheam.success )
    throw new Error("the data is not valid")

  console.log(saveScheam.data)
} catch(e) {
    console.log(saveScheam.error?.issues)
    // console.log(saveScheam.error)
}