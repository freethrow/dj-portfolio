
    // select div with class markdown
    let education = document.getElementById('education').innerHTML
    md = marked(education);
    
    education.innerHTML = md;

