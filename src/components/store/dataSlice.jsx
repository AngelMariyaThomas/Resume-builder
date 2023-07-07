
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'name',
  initialState: {
    personalinfo:{
    name: '',
    loading: false,
    age:'',
    address:'',
    dob:'',
    phone:'',
    file:null
    },
    educationDetails: [{
       Qualification: "",
     Institution: ""}],
    
     workExperiance:[{
      Company:"",
      Year:" "

     }],


  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPersonalinfo: (state, action) => {
      state.personalinfo = { ...state.personalinfo, ...action.payload };
    },
    setImageFile:(state,action)=>{
      state.file=action.payload;
    }
    
  },
});

export const { setName, setLoading ,setPersonalinfo,setImageFile} = dataSlice.actions;
export default dataSlice.reducer;


export const setNameAsync = (name) => {
  return (dispatch) => {
    dispatch(setLoading(true));

 
    setTimeout(() => {
      dispatch(setName(name));
      dispatch(setLoading(false));
    }, 2000);
  };
};
