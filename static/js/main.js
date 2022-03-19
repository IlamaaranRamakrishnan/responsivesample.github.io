function testing(){
    var newtest = document.querySelector('.service-list');
    var latest =newtest.getBoundingClientRect().top;
    var screensize = window.innerHeight/1.5;

    //console.log(latest);
    //console.log(screensize);
    if(latest<screensize){
        newtest.classList.add('transition-styling');
    }
   
}

window.addEventListener('scroll', testing);

function aboutanimation(){
    var aboutclass = document.querySelector('.about-us');
    var dimensionabout =aboutclass.getBoundingClientRect().top;
    var screensizeaboutus = window.innerHeight/1.5;

    //console.log(latest);
    //console.log(screensize);
    if(dimensionabout<screensizeaboutus){
        aboutclass.classList.add('transition-about');
    }
   
}
//testing();

window.addEventListener('scroll', aboutanimation);



function abouttext(){
    var aboutformtext = document.querySelector('.text');
    var dimensionabout =aboutformtext.getBoundingClientRect().top;
    var screensizeabouttext = window.innerHeight/1.5;

    //console.log(latest);
    //console.log(screensize);
    if(dimensionabout<screensizeabouttext){
        aboutformtext.classList.add('transition-text');
    }
   
}

window.addEventListener('scroll', abouttext);

function aboutform(){
    var aboutform = document.querySelector('.contact');
    var dimensionabout =aboutform.getBoundingClientRect().top;
    var screensizeaboutform = window.innerHeight/1.5;

    //console.log(latest);
    //console.log(screensize);
    if(dimensionabout<screensizeaboutform){
        aboutform.classList.add('transition-contact');
    }
   
}

window.addEventListener('scroll', aboutform);

//coding for toggle button
const togglebutton = document.getElementsByClassName('toggle')[0]
const navbarlink = document.getElementsByClassName('nav')[0]

togglebutton.addEventListener('click', () => {
    navbarlink.classList.toggle('active')
})




navbarlink.addEventListener('click', () =>{
    navbarlink.classList.toggle('active')
});

