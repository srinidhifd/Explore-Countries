const countriesContainer=document.querySelector('.countries-container');

fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
.then((data) => {
    data.forEach((country) => {
        const countryCard=document.createElement('a');
countryCard.classList.add('country-card');
countryCard.href=`country.html?name=${country.name.common}`;
countryCard.innerHTML=`  <img src="${country.flags.svg}" alt="Flag">
                    <div class="card-text">
                        <h3 class="card-title">${country.name.common}</h3>
                    <p><strong>Population:</strong> ${country.population.toLocaleString('en-IN')}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Capital:</strong> ${country.capital}</p>  `;

countriesContainer.appendChild(countryCard);
    }) 
})



