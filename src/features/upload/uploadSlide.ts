import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface uploadState {
  images: string[];
  status: "nothing" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: uploadState = {
  images: [],
  status: "nothing",
  error: null,
};

export const uploadSilce = createSlice({
  name: "upload",
  initialState,
  reducers: {
    
    uploadImage: (state) => {
        state.status = "loading";
        state.error = null;
      },
      uploadImageSuccess: (state: Draft<uploadState>, action: PayloadAction<string[]>) => {
        state.status = "succeeded";
        state.images = action.payload
  
      },
      uploadImageFailure: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = "failed";
      },
  },
});

export const {
    uploadImage,
    uploadImageFailure,
    uploadImageSuccess 
} = uploadSilce.actions;

export const selectAllImage = (state: RootState) => state.upload.images;



export default uploadSilce.reducer;
