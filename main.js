fetchAPI = async (moviename) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=2e8f3462&t=${moviename}+4&plot=full`)
        .then(response => response.json())
        .catch(err => err.json())
    console.log(response)
    return response
}


const fetchMovie = () => {
    let moviename = document.getElementById('movie').value
    console.log(moviename)
    if (moviename == '' || moviename == undefined) {
        document.getElementById('empty').style.display = 'block';
        document.getElementById('empty').innerHTML = 'Input a movie'
    } else if (moviename !== '') {
        document.getElementById('empty').innerHTML = ''
        document.getElementById('empty').style.display = 'none'
        document.getElementById('hide').innerHTML = 'Loading...';
        document.getElementById('movie').classList.remove('red')
        fetchAPI(moviename)
            .then((data) => {
                console.log(data)
                if (data.Response != 'False') {
                    document.getElementById('drop-card').style.display = 'block';
                    document.getElementById('hide').innerHTML = 'Fetch';
                    let table = document.getElementById('table').innerHTML = `
                <tbody>
                    <tr>
                        <td>Title:&nbsp&nbsp${data.Title}</td>
                    </tr>

                    <tr>
                        <td>Year:&nbsp&nbsp${data.Year}</td>
                    </tr>

                    <tr>
                        <td>Genre:&nbsp&nbsp${data.Genre}</td>
                    </tr>

                    <tr>
                        <td>Country&nbsp&nbsp${data.Country}</td>
                    </tr>
                </tbody>
                `
                    let result1 = `
                <img src="${data.Poster}" alt="img" class="img-fluid rounded image">`
                    document.getElementById('display1').innerHTML = result1
                }
                else {
                    document.getElementById('empty').style.display = 'block';
                    document.getElementById('empty').innerHTML = data.Error;
                    document.getElementById('drop-card').style.display = 'none'
                    document.getElementById('hide').innerHTML = 'Fetch';
                    document.getElementById('movie').classList.add('red')
                }
            })
            .catch((err) => console.log(err.net))
    }

}