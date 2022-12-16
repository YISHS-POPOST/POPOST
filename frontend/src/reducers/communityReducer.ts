import { WRITEDATA_CLEAR, SET_WRITEDATA } from '../actionTypes';
import { CommunityType } from '../type/commuity';

const initalState: CommunityType | null  = null;

export default function (state = initalState, action:any) {
    switch (action.type) {
        case SET_WRITEDATA:
            return {
                ...action.payload,
            }
        case WRITEDATA_CLEAR:
            return {
                writeData: null,
            }
        default:
            return state;
    }
} 