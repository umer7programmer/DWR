const mongoose=require("mongoose");

const sponsorSchema=new mongoose.Schema({
    title:{
        type:String
    },
    data:{
        p1:{
            type:String 
        },
        p2:{
            type:String 
        },
        p3:{
            type:String 
        },
        p4:{
            type:String 
        },
        p5:{
            type:String 
        },
        p6:{
            type:String 
        },
        p7:{
            type:String 
        },
        p8:{
            type:String 
        },
        p9:{
            type:String 
        },
        p10:{
            type:String 
        },
        p11:{
            type:String 
        },
        p12:{
            type:String 
        },
        p13:{
            type:String 
        },
        p14:{
            type:String 
        },
        p15:{
            type:String 
        },

    },
    tiers:{
        type:String
    },
    tiersData:{
    
        p1:{
            type:String 
        },
        p2:{
            type:String 
        },
        p3:{
            type:String 
        },
        p4:{
            type:String 
        },
        p5:{
            type:String 
        },
        p6:{
            type:String 
        },
        
    }
})
module.exports=mongoose.model("Sponsor",sponsorSchema);