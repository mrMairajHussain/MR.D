mrd = 6474
function menuc(x) {
    x.classList.toggle("change");
    if (mrd == 6474) {
        document.getElementById("menu-mi").style.display = "block";
        mrd = 7464;
    }
    else {
        document.getElementById("menu-mi").style.display = "none";
        mrd = 6474;


    }

}

// reload function

function reload() {
    window.location.reload();

}
// change theme
let theme = 1111
function ctheme() {
    if (theme == 1111) {
        document.getElementById("img-mi").src = "MRD/moon.png"
        document.body.style.backgroundColor = ("black");
        document.getElementById("t-vi").style.color = "white"
        document.getElementById("previ").style.color = "white"
        document.getElementById("nexti").style.color = "white"


        theme = 2222

    }
    else {
        document.getElementById("img-mi").src = "MRD/sun.png"
        document.body.style.backgroundColor = ("white");
        document.getElementById("t-vi").style.color = "black"
        document.getElementById("previ").style.color = "black"
        document.getElementById("nexti").style.color = "black"

        theme = 1111


    }


}

// radio function
function radio() {
    document.getElementById("r-btn").innerHTML = "Shop new models";
}
function radioc() {
    document.getElementById("r-btn").innerHTML = "Shop c-p-o models";
}

// Audi mouseover/out


function brandover() {

    document.getElementById("hover-maini").style.height = "100px";
    document.getElementById("hover-imga").style.display = "block";
    // document.getElementById("imghi").style.marginRight = "840px";
    document.getElementById("imghi").style.marginLeft = "140px";


}
function brandout() {
    document.getElementById("hover-maini").style.height = "fit-content";
    document.getElementById("hover-imga").style.display = "none";

}

// mercd mouseover/out

function brand2over() {
    document.getElementById("hover-maini").style.height = "100px";
    document.getElementById("hover-imgm").style.display = "block";
    document.getElementById("imgmi").style.marginLeft = "450px";


}
function brand2out() {
    document.getElementById("hover-maini").style.height = "fit-content";
    document.getElementById("hover-imgm").style.display = "none";

}

// ferarri mouseover/out

function brand3over() {
    document.getElementById("hover-maini").style.height = "100px";
    document.getElementById("hover-imgf").style.display = "block";
    document.getElementById("imgfi").style.marginLeft = "730px";


}
function brand3out() {
    document.getElementById("hover-maini").style.height = "fit-content";
    document.getElementById("hover-imgf").style.display = "none";

}


// lem mouseover\\out

function brand4over() {
    document.getElementById("hover-maini").style.height = "100px";
    document.getElementById("hover-imgl").style.display = "block";
    document.getElementById("imgli").style.marginLeft = "1000px";


}
function brand4out() {
    document.getElementById("hover-maini").style.height = "fit-content";
    document.getElementById("hover-imgl").style.display = "none";

}

// Audi web change 




function Audi() {
    // window.location.reload();
    var img = document.getElementById('bg-imgi');

    var slides = ['MRD/audi.bg1.jpg', "MRD/audi-yback.jpg", "MRD/mrb-audi-bgr.jpg", "MRD/audi-yback.jpg",];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 3000);
    document.getElementById("bg-img1mi").style.display = "none";
    document.getElementById("bg-img2mi").style.display = "none";
    document.getElementById("bg-img3mi").style.display = "none";
    document.getElementById("bg-imgi").style.display = "block";



    document.getElementById("mercdi").style.border = "none";
    document.getElementById("ferrarii").style.border = "none";
    document.getElementById("lemi").style.border = "none";




    document.getElementById("text-h1i").innerHTML = "The search for your Audi begins here.Explore the latest inventory.";
    document.getElementById("img-vi").src = "MRD/mrb-audi-top.jpg";
    document.getElementById("t-vi").innerHTML = "Audi Virtual Showroom";
    document.getElementById("stky-imgi").src = "MRD/audi-stky2.jpg";
    document.getElementById("text-si").innerHTML = "Seeing the world with different eyes is what drives us. Discover moreabout ourvision of the future of mobility. Learn more about the technology in the Audi e-tron along with thecharging options, range calculations and its benefits.";
    document.getElementById("c1").innerHTML = "Audi apporved plus";
    document.getElementById("c2").innerHTML = "Audi service";
    document.getElementById("c3").innerHTML = "Audi  connect";
    document.getElementById("c4").innerHTML = "Audi owner";
    document.getElementById("audii").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px;")


}



// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____audi-PHONE_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

function Audia() {
    // window.location.reload();
    var img = document.getElementById('bg-imgi');

    var slides = ['MRD/audi-ph1.jpg', "MRD/audi-ph2.jpg", "MRD/audi-ph3.jpg", "MRD/audi-ph4.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 3000);
    document.getElementById("bg-img1mi").style.display = "none";
    document.getElementById("bg-img2mi").style.display = "none";
    document.getElementById("bg-img3mi").style.display = "none";
    document.getElementById("bg-imgi").style.display = "block";



    document.getElementById("mercdi").style.border = "none";
    document.getElementById("ferrarii").style.border = "none";
    document.getElementById("lemi").style.border = "none";




    document.getElementById("text-h1i").innerHTML = "The search for your Audi begins here.Explore the latest inventory.";
    document.getElementById("img-vi").src = "MRD/mrb-audi-top.jpg";
    document.getElementById("t-vi").innerHTML = "Audi Virtual Showroom";
    document.getElementById("stky-imgi").src = "MRD/audi-el-ph1.jpg";
    document.getElementById("text-si").innerHTML = "Seeing the world with different eyes is what drives us. Discover moreabout ourvision of the future of mobility. Learn more about the technology in the Audi e-tron along with thecharging options, range calculations and its benefits.";
    document.getElementById("c1").innerHTML = "Audi apporved plus";
    document.getElementById("c2").innerHTML = "Audi service";
    document.getElementById("c3").innerHTML = "Audi  connect";
    document.getElementById("c4").innerHTML = "Audi owner";
    document.getElementById("audii").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px;")


}


// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____audi-PHONE-end_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4


// mercd web change
let myIndexx = 0;

function mercd() {
    var img = document.getElementById('bg-img1mi');

    var slides = ["MRD/mercd-f1.jpg", "MRD/mercd-bgg2.jpg", "MRD/mercd-bg1.jpg", "MRD/mercd-bg3.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dffm src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 3000);

    document.getElementById("bg-img1mi").style.display = "block";
    document.getElementById("bg-img2mi").style.display = "none";
    document.getElementById("bg-img3mi").style.display = "none";
    document.getElementById("bg-imgi").style.display = "none";


    document.getElementById("ferrarii").style.border = "none";
    document.getElementById("lemi").style.border = "none";
    document.getElementById("audii").style.border = "none";




    // document.getElementById("bg-img-mi").src = "MRD/mercd-bgg2.jpg";
    document.getElementById("text-h1i").innerHTML = "It's all starts with dream,with Mercedes";
    document.getElementById("img-vi").src = "MRD/mrcd-top.jpeg";
    document.getElementById("t-vi").innerHTML = "Mercedes Virtual Showroom";
    document.getElementById("stky-imgi").src = "MRD/mercd-e1.jpeg";
    document.getElementById("text-si").innerHTML = "No compromises. The Mercedes-AMG EQS combines performance and luxury in a thrilling, first-class driving experience. Two electromotors, fed with one of our company-own high-performance batteries, supply irrepressible driving force.";
    document.getElementById("c1").innerHTML = "Mercedes apporved plus";
    document.getElementById("c2").innerHTML = "Mercedes service";
    document.getElementById("c3").innerHTML = "Mercedes  connect";
    document.getElementById("c4").innerHTML = " Mercedes owner";
    document.getElementById("mercdi").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px;")




}
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____merd-PHONE_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
var M = window.matchMedia('(max-width: 600px)');

if (M.matches) {
    function mercda() {
        var img = document.getElementById('bg-img1mi');

        var slides = ["MRD/mercd-ph11.jpg", "MRD/mercd-ph2.jpg", "MRD/mercd-ph3.jpg", "MRD/mercd-ph4.jpeg"];

        var Start = 0;

        function slider() {
            if (Start < slides.length) {
                Start = Start + 1;
            }
            else {
                Start = 1;
            }
            img.innerHTML = "<img class= dffm src=" + slides[Start - 1] + ">";

        }
        setInterval(slider, 3000);

        document.getElementById("bg-img1mi").style.display = "block";
        document.getElementById("bg-img2mi").style.display = "none";
        document.getElementById("bg-img3mi").style.display = "none";
        document.getElementById("bg-imgi").style.display = "none";


        document.getElementById("ferrarii").style.border = "none";
        document.getElementById("lemi").style.border = "none";
        document.getElementById("audii").style.border = "none";




        document.getElementById("dffmi").src = "MRD/mercd-ph5.jpeg";
        document.getElementById("text-h1i").innerHTML = "It's all starts with dream,with Mercedes";
        document.getElementById("img-vi").src = "MRD/mrcd-top.jpeg";
        document.getElementById("t-vi").innerHTML = "Mercedes Virtual Showroom";
        document.getElementById("stky-imgi").src = "MRD/mercd-el-ph1.jpeg";
        document.getElementById("text-si").innerHTML = "No compromises. The Mercedes-AMG EQS combines performance and luxury in a thrilling, first-class driving experience. Two electromotors, fed with one of our company-own high-performance batteries, supply irrepressible driving force.";
        document.getElementById("c1").innerHTML = "Mercedes apporved plus";
        document.getElementById("c2").innerHTML = "Mercedes service";
        document.getElementById("c3").innerHTML = "Mercedes  connect";
        document.getElementById("c4").innerHTML = " Mercedes owner";
        document.getElementById("mercdi").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px;")




    }
}


// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____mercd-PHONE-end_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4



// ferrari web change

// body.style.backgroundColor="#EF1A2D";
// document.body.style.backgroundColor=("#EF1A2D");



function ferrari() {
    var img = document.getElementById('bg-img2mi');

    var slides = ["MRD/ferrari-bg1.jpg", "MRD/ferrari-bg21.jpg", "MRD/ferrari-back1.jpg", "MRD/ferrari-eng1.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dfff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 4000);

    document.getElementById("bg-img2mi").style.display = "block";
    document.getElementById("bg-img1mi").style.display = "none";
    document.getElementById("bg-img3mi").style.display = "none";
    document.getElementById("bg-imgi").style.display = "none";

    document.getElementById("mercdi").style.border = "none";
    document.getElementById("lemi").style.border = "none";
    document.getElementById("audii").style.border = "none";




    // document.getElementById("bg-img-mi").src = "MRD/ferrari-bg21.jpg";
    document.getElementById("text-h1i").innerHTML = " creating timeless icons for a changing world";
    document.getElementById("img-vi").src = "MRD/ferrari-top1.jpg";
    document.getElementById("t-vi").innerHTML = "Ferrari Virtual Showroom";
    document.getElementById("stky-imgi").src = "MRD/ferrari-elec2.jpg";
    document.getElementById("text-si").innerHTML = "The SF90 Stradale is the first ever Ferrari to feature PHEV (Plug-in Hybrid Electric Vehicle) architecture which sees the internal combustion engine integrated with three electric motors, two of which are independent and located on the front axle, with the third at the rear between the engine and the gearbox.";
    document.getElementById("c1").innerHTML = "ferrari apporved plus";
    document.getElementById("c2").innerHTML = "ferrari service";
    document.getElementById("c3").innerHTML = "ferrari connect";
    document.getElementById("c4").innerHTML = " ferrari owner";
    document.getElementById("ferrarii").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px; display:block; ")
    // "MRD/lem-side1.jpg"

}

// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____ferrari-PHONE_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

var F = window.matchMedia('(max-width: 600px)');

if (F.matches) {
    function ferrari() {
        var img = document.getElementById('bg-img2mi');

        var slides = ["MRD/ferrari-ph1.jpg", "MRD/ferrari-ph2.jpg", "MRD/ferrari-ph31.jpeg", "MRD/ferrari-ph4.jpeg"];

        var Start = 0;

        function slider() {
            if (Start < slides.length) {
                Start = Start + 1;
            }
            else {
                Start = 1;
            }
            img.innerHTML = "<img class= dfff src=" + slides[Start - 1] + ">";

        }
        setInterval(slider, 4000);

        document.getElementById("bg-img2mi").style.display = "block";
        document.getElementById("bg-img1mi").style.display = "none";
        document.getElementById("bg-img3mi").style.display = "none";
        document.getElementById("bg-imgi").style.display = "none";

        document.getElementById("mercdi").style.border = "none";
        document.getElementById("lemi").style.border = "none";
        document.getElementById("audii").style.border = "none";




        document.getElementById("dfffi").src = "MRD/ferrari-ph5.jpg";
        document.getElementById("text-h1i").innerHTML = " creating timeless icons for a changing world";
        document.getElementById("img-vi").src = "MRD/ferrari-top1.jpg";
        document.getElementById("t-vi").innerHTML = "Ferrari Virtual Showroom";
        document.getElementById("stky-imgi").src = "MRD/ferrari-el-ph1.jpg";
        document.getElementById("text-si").innerHTML = "The SF90 Stradale is the first ever Ferrari to feature PHEV (Plug-in Hybrid Electric Vehicle) architecture which sees the internal combustion engine integrated with three electric motors, two of which are independent and located on the front axle, with the third at the rear between the engine and the gearbox.";
        document.getElementById("c1").innerHTML = "ferrari apporved plus";
        document.getElementById("c2").innerHTML = "ferrari service";
        document.getElementById("c3").innerHTML = "ferrari connect";
        document.getElementById("c4").innerHTML = " ferrari owner";
        document.getElementById("ferrarii").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px; display:block; ")
        // "MRD/lem-side1.jpg"

    }
}


// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____ferrari-PHONE-end_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4


// lem web change
function lem() {

    var img = document.getElementById('bg-img3mi');

    var slides = ["MRD/lem-f1.jpg", "MRD/mrd-lem-int.jpg", "MRD/lem-bg1.jpg", "MRD/lem-side1.webp"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dffl src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 3000);

    document.getElementById("bg-img3mi").style.display = "block";
    document.getElementById("bg-img2mi").style.display = "none";
    document.getElementById("bg-img1mi").style.display = "none";
    document.getElementById("bg-imgi").style.display = "none";


    document.getElementById("mercdi").style.border = "none";
    document.getElementById("ferrarii").style.border = "none";
    document.getElementById("audii").style.border = "none";


    // document.getElementById("bg-img-mi").src = "MRD/mrd-lem-bg.jpg";
    document.getElementById("text-h1i").innerHTML = " THE KEY TO A HAPPY LIFE IS A LAMBORGHINI KEY";
    document.getElementById("img-vi").src = "MRD/lem-v1.jpeg";
    document.getElementById("t-vi").innerHTML = "Lamborghini Virtual Showroom";
    document.getElementById("stky-imgi").src = "MRD/lem-stky2.jpg";
    document.getElementById("text-si").innerHTML = "The Terzo Millennio anticipates the future and projects the emotions of super sports cars into the electrical revolution era.";
    document.getElementById("c1").innerHTML = "Lamborghini apporved plus";
    document.getElementById("c2").innerHTML = "Lamborghini service";
    document.getElementById("c3").innerHTML = "Lamborghini connect";
    document.getElementById("c4").innerHTML = " Lamborghini owner";
    document.getElementById("lemi").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px; display:block;")


}

// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____lem-PHONE_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

var L = window.matchMedia('(max-width: 600px)');

if (L.matches) {
    function lem() {

        var img = document.getElementById('bg-img3mi');

        var slides = ["MRD/lem-ph1.jpg", "MRD/lem-ph2.jpg", "MRD/lem-ph3.jpeg", "MRD/lem-ph4.jpeg"];

        var Start = 0;

        function slider() {
            if (Start < slides.length) {
                Start = Start + 1;
            }
            else {
                Start = 1;
            }
            img.innerHTML = "<img class= dffl src=" + slides[Start - 1] + ">";

        }
        setInterval(slider, 3000);

        document.getElementById("bg-img3mi").style.display = "block";
        document.getElementById("bg-img2mi").style.display = "none";
        document.getElementById("bg-img1mi").style.display = "none";
        document.getElementById("bg-imgi").style.display = "none";


        document.getElementById("mercdi").style.border = "none";
        document.getElementById("ferrarii").style.border = "none";
        document.getElementById("audii").style.border = "none";


        document.getElementById("dffli").src = "MRD/lem-ph5.jpeg";
        document.getElementById("text-h1i").innerHTML = " THE KEY TO A HAPPY LIFE IS A LAMBORGHINI KEY";
        document.getElementById("img-vi").src = "MRD/lem-v1.jpeg";
        document.getElementById("t-vi").innerHTML = "Lamborghini Virtual Showroom";
        document.getElementById("stky-imgi").src = "MRD/lem-el-ph1.jpeg";
        document.getElementById("text-si").innerHTML = "The Terzo Millennio anticipates the future and projects the emotions of super sports cars into the electrical revolution era.";
        document.getElementById("c1").innerHTML = "Lamborghini apporved plus";
        document.getElementById("c2").innerHTML = "Lamborghini service";
        document.getElementById("c3").innerHTML = "Lamborghini connect";
        document.getElementById("c4").innerHTML = " Lamborghini owner";
        document.getElementById("lemi").setAttribute("style", "border: 2px solid orangered;border-top-color: gray;border-left: none;border-right: none;border-bottom: none;border-top-width: 5px; display:block;")


    }
}



// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$____lem-PHONE-end_______$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// #@#@#@@#@##$$%%%&&&&&^%$*&^%$#@%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4


// BACK TO TOP Function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//media query

function plusSlides() {
    document.getElementById("ferrarii").style.display = "block";
    document.getElementById("lemi").style.display = "block";
    document.getElementById("audii").style.display = "none";
    document.getElementById("mercdi").style.display = "none";

}


function subSlides() {
    document.getElementById("ferrarii").style.display = "none";
    document.getElementById("lemi").style.display = "none";
    document.getElementById("audii").style.display = "block";
    document.getElementById("mercdi").style.display = "block";


}





// function checkMedia(media) {
//     if (media.matches) {
//         document.getElementById("hover-maini").style.display = "none";

//         // Mobile
//     } else {
//         // Desktop
//     }
// }

var m = window.matchMedia('(max-width: 830px)');



hide = 1111
function menu2() {
    if (hide == 1111 == m.matches) {
        document.getElementById("logo-mi").style.display = "none";
        hide = 1234;
    }
    else if (hide == 1234) {
        document.getElementById("logo-mi").style.display = "block";
        hide = 1111;

    }


}







