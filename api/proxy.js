// const axios = require("axios");

// const proxyHandler = async (req, res) => {
//     try {
//         // Faz uma chamada HTTP à sua API não segura usando axios
//         const apiResponse = await axios.get("http://homologacao3.azapfy.com.br/api/ps/metahumans");
//         const data = apiResponse.data;

//         // Retorna os dados em uma resposta segura (HTTPS)
//         res.status(200).json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Erro ao acessar a API" });
//     }
// };

// export default proxyHandler;
