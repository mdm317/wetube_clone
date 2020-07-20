

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const coinPrices = document.querySelector('.coinPrices');
const loading = document.querySelector('.loading');
const coinPrice = (name,price)=>{
  const li = document.createElement('li');
  const text = document.createTextNode( `${name} price is === ${price}` );
  li.appendChild(text);
  return li;
}
const getCoins= async()=>{
  loading.innerHTML="Prices Is Loading----";

  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  //console.log(data);
  //loading 중

  loading.innerHTML="";

  coinPrices.innerHTML="";
  data.forEach(coin => {
    const {name, quotes:{USD:{price}}}=coin;
    coinPrices.appendChild(coinPrice(name,price));

  });


}

const init= async()=>{
  setInterval(getCoins,5000);



};

init();