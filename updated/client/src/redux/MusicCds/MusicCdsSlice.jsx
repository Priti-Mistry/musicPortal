import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addMusicCd=createAsyncThunk("addMusicCd",async(data,{rejectWithValue})=>{
    const response = await fetch("http://127.0.0.1:5000/MusicCds/add",{
        method:'post',
        headers:{
            "content-type":"application/json",
            "jwtToken":localStorage.getItem("jwtToken")
        },
        body:JSON.stringify(data)
    });
    try{
        const res=await response.json('music cd addded');
        return res
    }catch(error){
        return rejectWithValue(error)
    }
})


export const musicCds = createSlice({
    name:'musicCds',
    initialState:{
        musicCdsDetail:[],
        loading:false,
        error:null
    },
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(addMusicCd.pending,(state)=>{
            state.loading=true
        }).addCase(addMusicCd.fulfilled,(state,action)=>{
            state.loading=false
            state.musicCdsDetail=action.payload
        }).addCase(addMusicCd.rejected,(state,action)=>{
            state.loading=true
            state.error=action.payload
        })
    }
})

export default musicCds.reducer