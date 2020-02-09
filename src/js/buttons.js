function changeContenttl() {
    document.getElementById('tl').innerHTML = "Copied";    
    document.getElementById('tl').style.cssText = 'background-color: #43B581;';
    setTimeout(() => { document.getElementById('tl').innerHTML = "Copy";  document.getElementById('tl').style.cssText = 'background-color: #333;';  }, 1500);
}

function changeContentds() {
    document.getElementById('ds').innerHTML = "Copied";    
    document.getElementById('ds').style.cssText = 'background-color: #43B581;';
    setTimeout(() => { document.getElementById('ds').innerHTML = "Copy";  document.getElementById('ds').style.cssText = 'background-color: #333;';  }, 1500);
}

function changeContentem() {
    document.getElementById('em').innerHTML = "Copied";    
    document.getElementById('em').style.cssText = 'background-color: #43B581;';
    setTimeout(() => { document.getElementById('em').innerHTML = "Copy";  document.getElementById('em').style.cssText = 'background-color: #333;';  }, 1500);
}
