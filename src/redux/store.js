import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/campersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
