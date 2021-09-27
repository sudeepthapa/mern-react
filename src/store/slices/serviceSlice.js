import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const sliceName = 'services'
const ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/users';

export const getAllUsers = createAsyncThunk(
    `${sliceName}/getAllUsers`,
    async (payload, thunkAPI) => {
        try{
            const response = await axios.get(ENDPOINT_URL);
            return response.data;
        }catch(err){
            throw(err)
        }
    }
)

export const serviceSlice = createSlice({
    name: sliceName,
    initialState: {
        services: [],
        users: [],
        status: 'idle',
        errorMessage: null
    },
    reducers: {
        deleteService: (state, action) => {
            state.services = state.services.filter(service=>service.id !== action.payload)
        },
        addService: (state, action) => {
            state.services = [action.payload, ...state.services]
        },
    },
    extraReducers: (builder)=>{
        // getAllUsers
        builder.addCase(getAllUsers.fulfilled, (state, action)=>{
            state.users = action.payload
            state.status = 'success'
        }).addCase(getAllUsers.pending, (state, action)=>{
            state.status = 'processing'
        }).addCase(getAllUsers.rejected, (state, action)=>{
            state.status = 'error'
            state.errorMessage = action.error.message
        })        
    }
})

export const { deleteService, addService } = serviceSlice.actions;

export default serviceSlice.reducer;


// UI -> action dispatch => reducer => state update => UI rerender

// {type: 'services/deleteService', payload: 1}


// GIT BASICS

// initialize git in project - git init
// link local repository to remote - git remote add origin <url>


// staging - git add <filename> / .
// commit - git commit -m 'message'
// pushing to remote - git push origin <branchname>
// retriving from remote - git pull origin <branchname>

// mergeing - git merge branch_name
// branching - git checkout -b branch_name


// develop - feature/bugs
// qc - qc.test.com - bugfix
// master/main test.com - hotfix

// features

// switch to develop and pull the develop
// git checkout -b refator-header

// git checkout develop -> git pull origin develop 




