import {createSlice} from '@reduxjs/toolkit';

const sliceName = 'services'

export const serviceSlice = createSlice({
    name: sliceName,
    initialState: {
        services: []
    },
    reducers: {
        deleteService: (state, action) => {
            state.services = state.services.filter(service=>service.id !== action.payload)
        },
        addService: (state, action) => {
            state.services = [action.payload, ...state.services]
        },
    }
})

export const { deleteService, addService } = serviceSlice.actions;

export default serviceSlice.reducer;


// UI -> action dispatch => reducer => state update => UI rerender

// {type: 'services/deleteService', payload: 1}