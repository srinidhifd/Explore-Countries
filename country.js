const countryName= new URLSearchParams(window.location.search).get('name');
const flagImage = document.querySelector('.country-details img');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => res.json()).then((data) => {
    flagImage.src = data[0].flags.svg;
});