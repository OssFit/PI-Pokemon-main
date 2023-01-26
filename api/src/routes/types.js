const { default: axios } = require('axios');
const { Router }= require('express');
axios
const router=Router();
const {Type}=require('../db')



router.get('/', async (req,res)=>{
    try {
        const types = await Type.findAll()
        if(!types.length){
            const pokeApi = await axios.get('https://pokeapi.co/api/v2/type')
            gettingTypes = pokeApi.data.results.map((t)=>{
                return {name:t.name}
            })
            await Type.bulkCreate(gettingTypes);
        }
        
        res.status(200).json(await Type.findAll());
    } catch (error) {
        res.status(400).json({error:error.message})    
    }
    
});
module.exports=router;