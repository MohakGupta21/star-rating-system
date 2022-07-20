
document.addEventListener('DOMContentLoaded', () => {
  stars = document.querySelectorAll(".stars");
  stars.forEach(item => {
    item.addEventListener('click', function () {

      token.style.display="flex";

      var rating = this.getAttribute("data-rating");
      //for frontend
      let x = document.getElementById("helpfulText");
      console.log(x.innerText);
      x.innerHTML = `${rating}`;
      //for backend
      let r =document.getElementById("ratings");
      r.setAttribute("value", `${rating}`);
      //set stars
      return SetRatingStar(rating, stars);
    });
  });

});

/**
* SetRatingStar sets the rating on page
*
* @param {int} rating           Int of the rating value. 
* @returns {object} stars       html stars elements
*
*/


function SetRatingStar(rating, stars) {
  var len = stars.length;

  for (var i = 0; i < len; i++) {
    if (i < rating) {
      stars[i].innerHTML = '★';
    } else {
      stars[i].innerHTML = '☆';
    }
  }

}

function submit(){
  
  let readers = document.getElementById("num_readers").innerText;
  let rs = parseInt(readers)+1;

  document.getElementById("num_readers").innerHTML=`${rs} `;

}

