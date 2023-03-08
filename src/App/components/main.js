import React from 'react';

function Main() {
    let movieNameRef = document.getElementById("movie-name");
    let searchBtn = document.getElementById("search-btn");
    let result = document.getElementById("result");


    //hente data fra API

    let getMovie = () => {
        let movieName = movieNameRef.value;
        let url = `http://www.omdbapi.com/?t=${movieName}&apikey=f03d0b7`;
        //if input field is empty

        if (movieName.length <= 0) {
            result.innerHTML = `<h3 class="msg">Enter a Movie Name</h3>`;
        }

        //if input isn't empty
        else {
            fetch(url).then((resp) => resp.json()).then((data) => {
                //if movie exist in database
                if (data.Response == "True") {
                    result.innerHTML = `
                        <div class="info">
                            <img src=${data.Poster} class="poster">
                            <div>
                                <h2>${data.Title}</h2>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}</span>
                                    <span>${data.Runtime}</span>
                                </div>
                                <div class="genre">
                                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>
                    `;
                }

                //if movie doesn't exist in database
                else {
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
                }
            })
                //if error occurs
                .catch(() => {
                    result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
                });
        }
    };
    searchBtn.addEventListener("click", getMovie);
    window.addEventListener("load", getMovie);



    return (
        <div>
            <div class="featuringweek">
                <div class="text">
                    <span></span>
                    <h2>THIS WEEKS TOP WATCH</h2>
                </div>
            </div>
            <div class="fullcontainer">
                <div class="container">
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="content">
                            <h2>01</h2>
                            <h3>One Piece</h3>
                            <p>The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his
                                childhood
                                idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to
                                find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.</p>
                            <div class="weeknr">
                                <p>This Week: <h2>1</h2></p>
                            </div>
                            <div class="lastweeknr">
                                <p>Last Week: <h2>2</h2></p>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="content">
                            <h2>02</h2>
                            <h3>Spy x Family</h3>
                            <p>The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his
                                childhood
                                idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to
                                find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.</p>
                            <div class="weeknr">
                                <p>This Week:<h2>2</h2></p>
                                <div class="lastweeknr">
                                    <p>Last Week:<h2>1</h2></p>
                                </div>
                            </div>

                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="card">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="content">
                            <h2>03</h2>
                            <h3>Blue Lock</h3>
                            <p>The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his
                                childhood
                                idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to
                                find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates.</p>
                            <div class="weeknr">
                                <p>This Week:<h2>3</h2></p>
                            </div>
                            <div class="lastweeknr">
                                <p>Last Week: <h2>3</h2></p>
                            </div>
                            <a className='readmore' href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='search'>
                <div className='icon-search'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                <div className='inputsearch'>
                    <input id="movie-name" className='inputbox' type="text" placeholder='Search here ...' required />
                    <button id='search-btn'>Search</button>
                </div>

                <div id='result'></div>
            </div>



        </div>
    );
}

export default Main;
