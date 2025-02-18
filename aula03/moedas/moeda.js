// https://docs.awesomeapi.com.br/api-de-moedas

const axios = require("axios");

const fetch = async (de, para) => {
  try {
    const baseURL = "https://economia.awesomeapi.com.br/last/";
    const url = `${baseURL}${de}-${para}`;
    //console.log(url)
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const main = async (de, para) => {
  try {
    const moedas = {
      "USD": "dolares",
      "BRL": "reais",
      "EUR": "euros",
      "BTC": "bitcoins",
    }
    const resposta = fetch(de, para);
    const key = `${de}${para}`
    //console.log(resposta)
    //const dolar = Number(resposta.USDBRL.high);
    const dolar = +resposta[key].high
    console.log(`Um ${de} equivale aproximadamente ${dolar.toFixed(2)} ${moedas[para]}`);
  } catch (error) {
    console.log(error);
  }
};

main("USD", "BRL");
main("EUR", "BRL");
main("BTC", "BRL");
main("BRL", "USD");
main("BRL", "EUR");
// main("BRL", "BTC");
