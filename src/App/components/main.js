import React from 'react';

function Main() {
    const panels = document.querySelectorAll('.scroll-panel');
    const buttons = document.querySelectorAll('.scroll-button');
    const container = document.querySelector('.scroll-container');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(button => button.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
    
        // Get the target panel
        const targetPanel = document.getElementById(button.dataset.target);
    
        // Remove active class from all panels
        panels.forEach(panel => panel.classList.remove('active'));
    
        // Add active class to the target panel
        targetPanel.classList.add('active');
    
        // Calculate the position of the target panel
        const targetPanelIndex = Array.from(panels).indexOf(targetPanel);
        const targetPanelPosition = targetPanelIndex * targetPanel.offsetWidth;
    
        // Update the margin-left property of the container
        container.style.marginLeft = `-${targetPanelPosition}px`;
      });
    });
    





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
                    <input className='inputbox' type="text" placeholder='Search here ...' required />
                    <button>Search</button>
                </div>

                <div className='resultinput'></div>
            </div>



        </div>
    );
}

export default Main;
