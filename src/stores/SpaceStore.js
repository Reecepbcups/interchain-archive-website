import { writable } from "svelte/store";
import {v4 as uuidv4} from 'uuid';

const PollStore = writable([
    {        
        id: uuidv4(),
        title: "Test.mp3",
        url: "/2022/12/3305325070/Secret_Spaces_feat._Secret_University_on_their_dev_ed_platform%21.mp3",
        host: "https://twitter.com/Reecepbcups_",
        picture: "https://pbs.twimg.com/profile_images/1594304939307794433/YJgnC-mq_400x400.jpg"
    },
    // {        
    //     id: uuidv4(),
    //     title: "Single%2C_multi%2C_or_app-chain_for_Web3_gaming_with_Zaki_Manian_%26_Saga.mp3",
    //     url: "/2022/11/1441886102906806277/Single%2C_multi%2C_or_app-chain_for_Web3_gaming_with_Zaki_Manian_%26_Saga.mp3",
    //     host: "https://twitter.com/Reecepbcups_",
    //     picture: "https://pbs.twimg.com/profile_images/1594304939307794433/YJgnC-mq_400x400.jpg"
    // },
    // {        
    //     id: uuidv4(),
    //     title: "Into_the_Umeeverse__x_Shade_Protocol_.mp3",
    //     url: "/2022/11/1285628066346274817/Into_the_Umeeverse__x_Shade_Protocol_.mp3",
    //     host: "https://twitter.com/Reecepbcups_",
    //     picture: "https://pbs.twimg.com/profile_images/1594304939307794433/YJgnC-mq_400x400.jpg"
    // }    
    // $data_stream,
]);

export default PollStore;