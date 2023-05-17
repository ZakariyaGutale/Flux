import React, { useState } from 'react';



function Main() {
    const [movieName, setMovieName] = useState('');
    const [result, setResult] = useState('');

    const getMovie = () => {
        if (movieName.length <= 0) {
            setResult('<h2 class="featuringweek">Enter a valid movie/series</h2>');
        } else {
            const url = `http://www.omdbapi.com/?t=${movieName}&apikey=f03d0b7`;
            fetch(url)
                .then((resp) => resp.json())
                .then((data) => {
                    if (data.Response === 'True') {
                        setResult(
                            `
            <div class="bigcardcontent">
              <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                  <h2>${data.Title}</h2>
                  <div class="rating">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 576 512"><defs><style>.cls-1{fill:#ffb92a;}</style></defs><path class="cls-1" d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"/></svg>
                    <h4>${data.imdbRating}</h4>
                  </div>
                  <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                  </div>
                  <div class="genre">
                    <div>${data.Genre.split(',').join('</div><div>')}</div>
                  </div>
                </div>
              </div>
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Cast:</h3>
              <p>${data.Actors}</p>
              <a href="https://www.imdb.com/find?q=${data.Title}">Read More</a>
            </div>
              `
                        );
                    } else {
                        setResult(`<h3 class="msg">${data.Error}</h3>`);
                    }
                })
                .catch(() => {
                    setResult(`<h3 class="msg">Error Occured</h3>`);
                });
        }
    };
    const getTopMovies = () => {
        if (movieName.length <= 0) {
            setResult('<h2 class="featuringweek">Enter a valid movie/series</h2>');
        } else {
            const url = `http://www.omdbapi.com/?t=${movieName}&apikey=f03d0b7`;
            fetch(url)
                .then((resp) => resp.json())
                .then((data) => {

                })
                .then((data) => {
                    if (data.Response === 'True') {
                        setResult(
                            `
            <div class="bigcardcontent">
              <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                  <h2>${data.Title}</h2>
                  <div class="rating">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 576 512"><defs><style>.cls-1{fill:#ffb92a;}</style></defs><path class="cls-1" d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"/></svg>
                    <h4>${data.imdbRating}</h4>
                  </div>
                  <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                  </div>
                  <div class="genre">
                    <div>${data.Genre.split(',').join('</div><div>')}</div>
                  </div>
                </div>
              </div>
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Cast:</h3>
              <p>${data.Actors}</p>
              <a href="https://www.imdb.com/find?q=${movieName}">Read More</a>
            </div>
              `
                        );
                    } else {
                        setResult(`<h3 class="msg">${data.Error}</h3>`);
                    }
                })
                .catch(() => {
                    setResult(`<h3 class="msg">Error Occured</h3>`);
                });
        }
    };

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
                            <h3>Succession</h3>
                            <p>The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.</p>
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
                            <h3>Ted Lasso</h3>
                            <p>American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team</p>
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
                            <h3>The Rookie</h3>
                            <p>Starting over isn't easy, especially for John Nolan who, after a life-altering incident, is pursuing his dream of joining the LAPD. As their oldest rookie, he's met with skepticism from those who see him as just a walking midlife ...</p>
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
                    <input id="movie-name" className='inputbox' type="text" onChange={(e) => setMovieName(e.target.value)} placeholder='Search here ...' required />
                    <button id="search-btn" onClick={getMovie}>
                        Search
                    </button>
                </div>
            </div>


            <div class="bigcardfullcontainer">
                <div className='bigcardcontainer'>
                    <div class="bigcard">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div id="result" dangerouslySetInnerHTML={{ __html: result }}></div>
                    </div>
                </div>

                

            </div>
        </div>
    );
}

export default Main;
