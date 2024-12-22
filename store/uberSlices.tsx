import { UberState } from '@/type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface uberSlices {
    origine: UberState | null,
    destination: UberState | null,
    travelTimeInformation: UberState | null
}

const initialState: uberSlices = {
    origine: null,
    destination: null,
    travelTimeInformation: null,
}
export const uberSlices = createSlice({
    name: 'uber',
    initialState,
    reducers: {
        setOrigin:(state, action) => {
            state.origine = action.payload;
        },
        setDestination:(state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation:(state, action) => {
            state.travelTimeInformation = action.payload;
        },
    }

})

export const {setOrigin, setDestination, setTravelTimeInformation} = uberSlices.actions;
export default uberSlices.reducer