const indicator = document.querySelector(".indicator");
const API_URL = "http://ip-api.com/json/";
const callUrl = async () => {
  try {
    indicator.innerHTML = "Finding Location...";
    const data = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    });
    const parseData = await data.json();
    const { country, region, isp } = parseData;
    indicator.innerHTML = `your Location === country: ${country} region=${region} isp=${isp}`;

    console.log(country, region, isp);
  } catch (error) {
    console.log(error);
  }
};
const init = () => {
  document.addEventListener("DOMContentLoaded", callUrl);
};
init();
