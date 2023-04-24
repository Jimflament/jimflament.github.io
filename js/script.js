// variablesconst

isName = document.querySelector('.hero-text');

// functionsfunction
function getData(data) {
    console.log(data.member.name);
    isName.innerHTML = `${data.member.name}`;}

function fetchData() {
    const url ='https://whois.fdnd.nl/api/v1/member?id=cldepdo673x6v0av08nin2vhw';
    const data = fetch(url)
    .then((response) => response.json())
    .then((data) => getData(data));}
    
    fetchData();