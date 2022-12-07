import {useContext, createContext} from 'react'

import {useLocalObservable} from 'mobx-react'

import {createStore} from '../Stores/store'

const NoteContext = createContext(null)

export const ChildContext = ({children}) => {
    
    const store = useLocalObservable(createStore)
    
    return(
        <NoteContext.Provider value={store}>
            {children}
        </NoteContext.Provider>
    )
}

export const useContextStore = () => useContext(NoteContext)
