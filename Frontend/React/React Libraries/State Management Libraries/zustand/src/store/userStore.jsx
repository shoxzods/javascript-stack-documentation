import { create } from "zustand";
import { persist , devtools } from "zustand/middleware";

export const userStore = create(
    persist(
    devtools(

    
    (set , get) => ({
    count:0,

    // использование set с state:
    increment: () => set(( state ) => ({ count: state.count + 1 })),
    
    // использование set Для измнения даты:
    changeNumber: ( num ) => set({ count: num }),

    // использование get
    getCount: () => {
       const lastInit = get().count;
       return lastInit
    },

    // fetching widthin zustand:
    fetching: async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        
        set({users:[...data]})
    },

    userData: {
        name:"",
        password:"",
    },

    users:[],

    changeUserData: (data) => {
        set((state) => ({
            userData: {
                ...state.userData,
                ...data
            }
        }));
    },

    isSubmitting: (e) => {
        e.preventDefault();
    }
})), { name:"user-store" }));


/*
    Zustand - это библиотека для state management он делает props и state глобальным.
*/

/*
    get , set 

    get - получает данные из state.
        get().count
    
    set - set используется для изменения state В zustand.
        set({ count: 12 })
        set((state) => ({ count: state.count }))

    В zustand иммеет возможность использовать fetch внутри zustand
    Это оченб удобный инструмент.

*/

// getState
/*
    можно получить данные вне jsx.
    const count = userStore.getState().count;
*/

// setState
/*
     можно задать  данные вне jsx.
*/

// persist
/*
    persist автоматически сохраняет данные в localstorage
*/ 


// devtools:
/*
    Redux Devtools это специальная расширения бразуера chrome чтобы отслеживать за global state management

    установка:
        https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd -> chrome.
*/