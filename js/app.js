function changeColour(){

let color  =  document.getElementById('primary');

let small = color.children;

for (let i = 0; i < small.length; i = i+ 2) {
    
    let child = small[i];

    child.setAttribute('style', 'color: red;background-color:green')
    
}


}


changeColour();