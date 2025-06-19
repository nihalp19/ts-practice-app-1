import {create} from "zustand"


export const useChatStore = create((set,get) => ({
    isJoining : false,
    isCreated : true,

    joinRoom : () => {
        set({isJoining : true})
    }

    

}))