const fetch = require("node-fetch");

module.exports = class FipeController {
    static async showVehicles(req, res) {

        const type = req.query.type;

        if(!type) {
            res.redirect('/');
        }

        let brands = false;
        let models = false;
        let years = false;
        let result = false;

        const brand = req.query.brand;
        const model = req.query.model;
        const year = req.query.year;

        if (brand && !model && !year) {
            const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos`);
            models = await response.json();
        }
        else if (model && !year) {
            const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos`);
            years = await response.json();
        }
        else if (year) {
            const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos/${year}`);
            result = await response.json();
        }

        else {
            const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`);
            brands = await response.json();
        }

        res.render('fipe/vehicles', { brands, models, model, brand, years, result, type });
    }

};