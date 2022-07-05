const url = "https://knowi.com/api/data/ipE4xJhLBkn8H8jisFisAdHKvepFR5I4bGzRySZ2aaXlJgie";

function getData(URL) {
    fetch(URL).then((res) => { return res.json(); }).then((data) => {
        console.log(data);
        displayData(data);
    });
}

getData(url);