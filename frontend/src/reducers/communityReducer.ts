import { WRITEDATA_CLEAR, SET_WRITEDATA } from '../types';

const initalState = {
    writeData: null,
};

export default function (state = initalState, action:any) {
    switch (action.type) {
        case SET_WRITEDATA:
            return {
                writeData: action.payload,
            }
        case WRITEDATA_CLEAR:
            return {
                writeData: null,
            }
        default:
            return state;
    }
}