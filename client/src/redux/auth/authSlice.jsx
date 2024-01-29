import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUp=createAsyncThunk("signup",async(data,{rejectWithValue})=>{

    // const res=await axios.post("http://127.0.0.1:5000/users/signup",data)


    const response=await fetch("http://127.0.0.1:5000/users/signup",{
        method:'post',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    });

    try{
        const result=await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }

})

export const signIn=createAsyncThunk("signin",async(data,{rejectWithValue})=>{
    const response=await fetch("http://127.0.0.1:5000/users/signin",{
        method:'post',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    });

    try{
        const result=await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }

})

export const AllUSers=createAsyncThunk("allUsers",async({rejectWithValue})=>{
    const response=await fetch("http://127.0.0.1:5000/users/all",{
        method:'get',
        headers:{
            "content-type":"application/json"
        }
    });

    try{
        const result=await response.json();
        return result;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const user = createSlice({
    name:'user',
    initialState:{
        users:[],
        loading:false,
        error:null,
        response:{
            token:'',
            id:0,
            username:'',
            email:''
        }
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(signUp.pending,(state)=>{
            state.loading=true;
        })
        .addCase(signUp.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload
        })
        .addCase(signUp.rejected,(state,action)=>{
            state.loading=true;
            state.error=action.payload
        }).addCase(signIn.pending,(state)=>{
            state.loading=true;
        })
        .addCase(signIn.fulfilled,(state,action)=>{
            state.loading=false;
            if (!action.payload.error){
                state.response.email=action.payload.email
                state.response.id=action.payload.id
                state.response.token=action.payload.token
                state.response.username=action.payload.username
                    localStorage.setItem('jwtToken',action.payload.token);
                    localStorage.setItem('username',action.payload.username);
                    localStorage.setItem('id',action.payload.id);
                state.error=null
            }else{
                state.error=action.payload.error
            }
            
        }).addCase(signIn.rejected,(state,action)=>{
            state.loading=true
            state.error=action.response.error
        })
    }
})

export default user.reducer