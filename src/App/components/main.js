import React, { useState } from 'react';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLHu6xVx76EFUTeYNPJqBIOYqD8pSHZiM",
  authDomain: "flux-f455c.firebaseapp.com",
  projectId: "flux-f455c",
  storageBucket: "flux-f455c.appspot.com",
  messagingSenderId: "93231493877",
  appId: "1:93231493877:web:3bdc86ad891555883d0bbc",
  measurementId: "G-GLZ256HXV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Main() {
    const [movieName, setMovieName] = useState('');
    const [result, setResult] = useState('');

    const getMovie = () => {
        if (movieName.length <= 0) {
            setResult('<h2 class="featuringweek">Enter a valid movie/series</h2>');
        } else {
            const url = `https://www.omdbapi.com/?t=${movieName}&apikey=f03d0b7`;
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
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 576 512"><defs><style>.cls-1{fill:#ffb92a;}</style></defs><path class="cls-1" d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"/></svg><svg id ='Layer_2'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 575 289.83" width="200px" height="auto"><defs><path d="M575 24.91C573.44 12.15 563.97 1.98 551.91 0C499.05 0 76.18 0 23.32 0C10.11 2.17 0 14.16 0 28.61C0 51.84 0 237.64 0 260.86C0 276.86 12.37 289.83 27.64 289.83C79.63 289.83 495.6 289.83 547.59 289.83C561.65 289.83 573.26 278.82 575 264.57C575 216.64 575 48.87 575 24.91Z" id="d1pwhf9wy2"></path><path d="M69.35 58.24L114.98 58.24L114.98 233.89L69.35 233.89L69.35 58.24Z" id="g5jjnq26yS"></path><path d="M201.2 139.15C197.28 112.38 195.1 97.5 194.67 94.53C192.76 80.2 190.94 67.73 189.2 57.09C185.25 57.09 165.54 57.09 130.04 57.09L130.04 232.74L170.01 232.74L170.15 116.76L186.97 232.74L215.44 232.74L231.39 114.18L231.54 232.74L271.38 232.74L271.38 57.09L211.77 57.09L201.2 139.15Z" id="i3Prh1JpXt"></path><path d="M346.71 93.63C347.21 95.87 347.47 100.95 347.47 108.89C347.47 115.7 347.47 170.18 347.47 176.99C347.47 188.68 346.71 195.84 345.2 198.48C343.68 201.12 339.64 202.43 333.09 202.43C333.09 190.9 333.09 98.66 333.09 87.13C338.06 87.13 341.45 87.66 343.25 88.7C345.05 89.75 346.21 91.39 346.71 93.63ZM367.32 230.95C372.75 229.76 377.31 227.66 381.01 224.67C384.7 221.67 387.29 217.52 388.77 212.21C390.26 206.91 391.14 196.38 391.14 180.63C391.14 174.47 391.14 125.12 391.14 118.95C391.14 102.33 390.49 91.19 389.48 85.53C388.46 79.86 385.93 74.71 381.88 70.09C377.82 65.47 371.9 62.15 364.12 60.13C356.33 58.11 343.63 57.09 321.54 57.09C319.27 57.09 307.93 57.09 287.5 57.09L287.5 232.74L342.78 232.74C355.52 232.34 363.7 231.75 367.32 230.95Z" id="a4ov9rRGQm"></path><path d="M464.76 204.7C463.92 206.93 460.24 208.06 457.46 208.06C454.74 208.06 452.93 206.98 452.01 204.81C451.09 202.65 450.64 197.72 450.64 190C450.64 185.36 450.64 148.22 450.64 143.58C450.64 135.58 451.04 130.59 451.85 128.6C452.65 126.63 454.41 125.63 457.13 125.63C459.91 125.63 463.64 126.76 464.6 129.03C465.55 131.3 466.03 136.15 466.03 143.58C466.03 146.58 466.03 161.58 466.03 188.59C465.74 197.84 465.32 203.21 464.76 204.7ZM406.68 231.21L447.76 231.21C449.47 224.5 450.41 220.77 450.6 220.02C454.32 224.52 458.41 227.9 462.9 230.14C467.37 232.39 474.06 233.51 479.24 233.51C486.45 233.51 492.67 231.62 497.92 227.83C503.16 224.05 506.5 219.57 507.92 214.42C509.34 209.26 510.05 201.42 510.05 190.88C510.05 185.95 510.05 146.53 510.05 141.6C510.05 131 509.81 124.08 509.34 120.83C508.87 117.58 507.47 114.27 505.14 110.88C502.81 107.49 499.42 104.86 494.98 102.98C490.54 101.1 485.3 100.16 479.26 100.16C474.01 100.16 467.29 101.21 462.81 103.28C458.34 105.35 454.28 108.49 450.64 112.7C450.64 108.89 450.64 89.85 450.64 55.56L406.68 55.56L406.68 231.21Z" id="fk968BpsX"></path></defs><g><g><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill="#f6c700" fill-opacity="1"></use><g><use xlink:href="#d1pwhf9wy2" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#g5jjnq26yS" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#g5jjnq26yS" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#i3Prh1JpXt" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#a4ov9rRGQm" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#a4ov9rRGQm" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#fk968BpsX" opacity="1" fill="#000000" fill-opacity="1"></use><g><use xlink:href="#fk968BpsX" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>
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
    
    return (

        <div>
            <div class="featuringweek">
                <div class="text">
                    <span></span>
                    <h2>THIS WEEKS TOP WATCH funker yes</h2>
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
                            <p>The Roy family is known for controlling the biggest media and entertainment company in the world. However, it all changes when the father steps down.</p>
                            <div class="weeknr">
                                <p>This Week: <h2>1</h2></p>
                            </div>
                            <div class="lastweeknr">
                                <p>Last Week: <h2>2</h2></p>
                            </div>
                            
                            <a href="https://www.imdb.com/title/tt7660850/?ref_=fn_al_tt_1">Read More</a>
                            
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

                            <a href="https://www.imdb.com/title/tt10986410/?ref_=fn_al_tt_1">Read More</a>
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
                            <p>Starting over isn't easy, especially for John Nolan who, after a life-altering incident, is pursuing his dream of joining the LAPD. As their oldest rookie.</p>
                            <div class="weeknr">
                                <p>This Week:<h2>3</h2></p>
                            </div>
                            <div class="lastweeknr">
                                <p>Last Week: <h2>3</h2></p>
                            </div>
                            <a className='readmore' href="https://www.imdb.com/title/tt7587890/?ref_=fn_al_tt_1">Read More</a>
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
