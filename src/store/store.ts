import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>

const middleWares = [logger]
// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const configureAppStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: middleWares
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./root-reducer', () => store.replaceReducer(rootReducer))
    }

    return store;
};

