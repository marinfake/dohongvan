$(window).scroll(function(){
    if($(window).scrollTop()){
         $("nav").addClass("scrolled");
    }
    else{
        $("nav").removeClass("scrolled");

    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

document.getElementById('myvideo').play();
