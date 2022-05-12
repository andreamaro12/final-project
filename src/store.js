import { createStore } from 'redux'
import { bankingReducer } from './reducers/bankingReducer'

import { rootReducer } from './reducers/rootReducer'

export const store = createStore (bankingReducer)