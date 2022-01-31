const axios = require('axios');

module.exports.totalMortes = async function (req, res) {
    axios.get('https://api.covid19api.com/summary')
        .then(response => {
            res.json("O total de mortes por covid é de: "+response.data.Global.TotalDeaths);
        })
        .catch(error => {
            res.json(error);
        });
        
}

module.exports.totalConfirmados = async function (req, res) {
    axios.get('https://api.covid19api.com/summary')
        .then(response => {
            res.json("O total de casos confirmados é de: "+ response.data.Global.TotalConfirmed);
        })
        .catch(error => {
            res.json(error);
        });
}