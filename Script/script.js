
//for Hamburg Icon
function hamBurgFun(x) {
    x.classList.toggle("change");
}


const slideButtons = document.querySelectorAll("#slider_btn i");
const circleClass = document.getElementById('div_circle');

const home_Img_slide = document.getElementsByClassName('home_img_slide');
const home_text_slide = document.getElementsByClassName('home_text_slide');

const carousal = document.querySelector(".shopby_cat_slider_cont");
const buttons = document.querySelectorAll(".shopby_cat_slider button");

// const firstCardWidth = document.querySelector(".category").offsetWidth;

// console.log(firstCardWidth);


//make slide buttons of Shoping By Category Slider start

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log(btn.id);
        const firstCardWidth = document.querySelector(".category").offsetWidth;

        carousal.scrollLeft += btn.id === 'slide_left' ? -firstCardWidth : firstCardWidth;


    });

});


//make slide buttons of Shoping By Category Slider end


//Made Dragable Shoping By Category Slider start

let isDragging = false;

const dragStart = (e) => {
    isDragging = true;
    carousal.classList.add("dragging");

    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousal.scrollLeft;
}

const dragging = (e) => {
    // console.log(e.pageX);

    if (!isDragging) return;  // if isDragging is false return from here

    carousal.scrollLeft = e.pageX;

    // Updates the scroll position of the carousel based on the cursor movement
    carousal.scrollLeft = startScrollLeft - (e.pageX - startX);

}

const dragStop = (e) => {
    isDragging = false;
    carousal.classList.remove("dragging");
}

carousal.addEventListener("mousedown", dragStart);
carousal.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


//Made Dragable Shoping By Category Slider End

//Animation Section for the Promotion Section when Promotion comes into viewPort Start

const promotion = document.getElementById("promotion");
const promoImgCont = document.querySelector(".promo_img_cont");
const promoImgText = document.querySelector(".promo_text_cont");

// let window_screen = window.matchMedia("(min-width: 768px)");

// window.addEventListener('resize', checkMediaQuery)


// function checkMediaQuery(){

//     if(window_screen.matches)
// {

// alert('media matched');
const observer = new IntersectionObserver(entry => {
    promoImgCont.classList.toggle('movePromoImg_animation');
    promoImgText.classList.toggle('movePromoText_animation');

});
observer.observe(promotion);
// }

// }






//Animation Section for the Promotion Section when Promotion comes into viewPort End



// console.log(firstCardWidth);

// console.log(home_text_slide);



let slideIndex = 0;
showSlide(slideIndex);


//Slide show when screen will start
function showSlide(n) {
    for (i = 0; i < home_Img_slide.length; i++) {

        home_Img_slide[i].style.display = "none";

    }

    for (i = 0; i < home_text_slide.length; i++) {
        home_text_slide[i].style.display = "none";
    }
    home_Img_slide[slideIndex].style.display = "block";
    home_text_slide[slideIndex].style.display = "block";
}


// Next and Previous Buttons, Listner 
slideButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log(btn.id);

        if (btn.id === 'prevButton') {

            for (i = 0; i < home_Img_slide.length; i++) {

                home_Img_slide[i].style.display = "none";

            }

            for (i = 0; i < home_text_slide.length; i++) {
                home_text_slide[i].style.display = "none";
            }

            slideIndex = (slideIndex - 1 + home_Img_slide.length) % home_Img_slide.length;
            //   image.src = images[currentIndex];

            home_Img_slide[slideIndex].style.display = "block";
            home_text_slide[slideIndex].style.display = "block";

            circleClass.classList.add('moveLeft');
            circleClass.classList.remove('moveRight');
        }
        else if (btn.id === 'nextButton') {

            for (i = 0; i < home_Img_slide.length; i++) {

                home_Img_slide[i].style.display = "none";

            }

            for (i = 0; i < home_text_slide.length; i++) {
                home_text_slide[i].style.display = "none";
            }

            slideIndex = (slideIndex + 1) % home_Img_slide.length;
            //   image.src = images[currentIndex];

            home_Img_slide[slideIndex].style.display = "block";
            home_text_slide[slideIndex].style.display = "block";

            circleClass.classList.add('moveRight');
            circleClass.classList.remove('moveLeft');

        }
        else {
            circleClass.classList.remove('moveRight');
            circleClass.classList.remove('moveLeft');
        }


    });

});

//card Heart Button Start

// Function to handle heart click
function handleHeartClick(event) {
    const heart = event.target;

    console.log(heart);

    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa');
    heart.classList.toggle('red_Hear');
  }

document.querySelectorAll('.heart').forEach((heart) => {
    // console.log(heart);
    heart.addEventListener('click', handleHeartClick);
  });



//card Heart Button End


//card Star Rating Button Start


// Function to handle star ratings
function handleRating(cardIndex, selectedRating) {
    const card = document.querySelectorAll('.New_Arr_card_Text')[cardIndex];
    const stars = card.querySelectorAll('.stars');

    stars.forEach((star, index) => {
        if (index < selectedRating) {

            star.innerHTML = '&#9733';
            star.classList.add('star_Color');

        } else {

            star.innerHTML = '&#9734';
            star.classList.remove('star_Color');

        }
    });
}


// Initialize default ratings on page load
document.querySelectorAll('.star_Cont').forEach((rating, index) => {

    const defaultRating = parseInt(rating.getAttribute('data-default'));
    
    handleRating(index, defaultRating);
});


//card Star Rating Button End


//New Arrival Tabs Start 


function openNewArrivalTab(evt, TabName) {

    // console.log(evt);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    // console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {

    //   tabcontent[i].style.display = "none";

    tabcontent[i].classList.add('hide_tab');

    }
    tablinks = document.getElementsByClassName("tabLink");
    // console.log(tablinks);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
    }
    // document.getElementById(TabName).style.display = "block";
    document.getElementById(TabName).classList.remove('hide_tab');

    evt.currentTarget.className += " active_tab";
    // evt.currentTarget.className += " active_tab";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  
//New Arrival Tabs End 