const { default: axios } = require('axios');
const { Router } = require('express');
const router = Router();
const { getApiData } = require('../controllers/pokemonController')
const { Pokemon,Type } = require('../db')

router.get('/', async (req, res) => {

    const { name } = req.query;
    const getApi = await getApiData();



    if (!name) {
        return res.status(200).send(getApi)
    }
    if (name) {
        const pokeBD = await Pokemon.findAll({ where: { name: name } })
        const filterName = getApi.filter((r) =>
            r.name.toLowerCase() === name.toLowerCase());
        if (pokeBD.length <= 0) {
            return res.send(filterName)
        }
        else {
            return res.send(pokeBD)
        }

    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (id.length > 5) {
        const pokeApi = await Pokemon.findAll({ where: { id: id } })
        return res.send(pokeApi)
    }

    else {
        const getApi = await getApiData();
        const filterName = getApi.filter((r) => r.id === id);
        return res.send(filterName)
    }


})

router.post('/', async (req, res) => {
    const { life, attack, defense, speed, height, weight,image,type1, type2 } = req.body;
    const { name } = req.body;
    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required.");
    };

    let types = ["unknown"];
    if (!type1 && !type2) {
      types = ["unknown"];
    } else if (type1 && !type2) {
      types = [type1];
    } else if (type2 && !type1) {
      types = [type2];
    } else {
      types = [type1, type2];
    }

    const getApi = await getApiData();
    const filterName = getApi.filter((r) => r.name.toLowerCase() === name.toLowerCase());
    if (filterName.length) return res.status(400).json({ msg: 'Pokemon ya existe' });
    const [newPokemon, creado] = await Pokemon.findOrCreate({
        where: { name: name },
        defaults: { life, attack, defense, speed, height, weight,image}

    });
    let assignTypes = await Promise.all(
        types.map((type) => Type.findOne({ where: { name: type } }))
      );
      newPokemon.setTypes(assignTypes)
    if (creado) return res.json({ msg: "Pokemon creado" })
    else return res.status(400).json({ msg: "pokemon ya existe" })

})

module.exports = router;