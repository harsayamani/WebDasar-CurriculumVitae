function progress_bar(width, query){
    const element = document.querySelector(query);
    const long= width;

    let initial = 1;
    let identity = setInterval(scene, 10); 
    
    function scene() { 
        if (initial >= long) { 
        clearInterval(identity); 
        } else { 
            initial++;  
            element.style.width = initial + '%';  
        } 
    } 
}


progress_bar(80, '#android_development');

progress_bar(80, '#web_development');

progress_bar(60, '#game_development');

progress_bar(85, '#animation');
