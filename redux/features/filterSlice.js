import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  people: 0,
  rooms: 0,
  hasReserve: undefined,
  price: {
    from: 50000,
    to: 500000
  },
  city: "",
  type: "",
  rate: "",
  hasWifi: undefined,
  hasCooling: undefined,
  hasHeating: undefined,
  hasFurniture: undefined,
  hasTV: undefined,
  hasWater: undefined,
  hasElectricity: undefined,
  hasGas: undefined,
}

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: () => initialState,
    peopleIncrement: (state) => {
      if (state.people <= 19) {
        state.people += 1;
      }
    },
    peopleDec: (state) => {
      if (state.people >= 1) {
        state.people -= 1;
      }
    },
    roomsIncrement: (state) => {
      if (state.rooms <= 5) {
        state.rooms += 1;
      }
    },
    roomsDec: (state) => {
      if (state.rooms >= 1) {
        state.rooms -= 1;
      }
    },
    priceFrom: (state, action) => {
      state.price.from = action.payload;
    },
    priceTo: (state, action) => {
      state.price.to = action.payload;
    },
    citySet: (state, action) => {
      state.city = action.payload;
    },
    typeSet: (state, action) => {
      state.type = action.payload;
    },
    rateSet: (state, action) => {
      state.rate = action.payload;
    },
    reserve: (state) => {
      state.hasReserve = true;
    },
    reserveReset: (state) => {
      state.hasReserve = undefined;
    },
    wifi: (state) => {
      state.hasWifi = true;
    },
    wifiReset: (state) => {
      state.hasWifi = undefined;
    },
    cooling: (state) => {
      state.hasCooling = true;
    },
    coolingReset: (state) => {
      state.hasCooling = undefined;
    },
    heating: (state) => {
      state.hasHeating = true;
    },
    heatingReset: (state) => {
      state.hasHeating = undefined;
    },
    furniture: (state) => {
      state.hasFurniture = true;
    },
    furnitureReset: (state) => {
      state.hasFurniture = undefined;
    },
    TV: (state) => {
      state.hasTV = true;
    },
    TVReset: (state) => {
      state.hasTV = undefined;
    },
    water: (state) => {
      state.hasWater = true;
    },
    waterReset: (state) => {
      state.hasWater = undefined;
    },
    gas: (state) => {
      state.hasGas = true;
    },
    gasReset: (state) => {
      state.hasGas = undefined;
    },
    electricity: (state) => {
      state.hasElectricity = true;
    },
    electricityReset: (state) => {
      state.hasElectricity = undefined;
    },
  },
});

export const {
  reset,
  peopleIncrement,
  peopleDec,
  roomsIncrement,
  roomsDec,
  priceFrom,
  priceTo,
  citySet,
  typeSet,
  rateSet,
  reserve,
  reserveReset,
  wifi,
  wifiReset,
  cooling,
  coolingReset,
  heating,
  heatingReset,
  furniture,
  furnitureReset,
  TV,
  TVReset,
  water,
  waterReset,
  gas,
  gasReset,
  electricity,
  electricityReset
} = filter.actions;
export default filter.reducer;