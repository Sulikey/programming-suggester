// buisiness
function jav(que1, que2, que3, que4, que5) {
  return (que1 === que2 && que2 === que3 && que3 === que4 && que4 === que5);
}

function ccc(que1, que2,) {
  return (que1 === que2);
}

function rub(que3, que4, que5,) {
  return (que3 === que4 && que4 === que5 && que3 === que5);
}

function check(que1, que2, que3, que4, que5) {
  if (jav(que1, que2, que3, que4, que5)) {
      return "JavaScript";
    } else if (rub(que3, que4, que5)) {
      return "Ruby";
    } else if (ccc(que1,que2)) {
          return "C#";
      } 
     else { 
      return "Stay home and watch TV!";
    }
  }    

  // ui



function setArt(val) {
  let art;
  if (val === "JavaScript") {
    art = "img/java.jpeg";
  } else if (val === "C#") {
    art = "img/cc.jpeg";
  } else if (val === "Ruby") {
      art = "img/rubyp.jpeg";
  } else {
      art = "img/keep.jpeg";
  }
  return art;
}

addEventListener("load", function() {
  const form = this.document.querySelector("form");
  const triArt = this.document.getElementById("tri-pic");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      const res = document.getElementById("result");

      const que1 = (document.getElementById("que1").value);
      const que2 = (document.getElementById("que2").value);
      const que3 = (document.getElementById("que3").value);
      const que4 = (document.getElementById("que4").value);
      const que5 = (document.getElementById("que5").value);

      const tri = check(que1, que2, que3, que4, que5);
      res.innerText = tri;
      res.classList.remove("invisible");
      const artPath = setArt(tri);
      triArt.setAttribute("src", artPath);
      triArt.classList.remove("invisible");
  })

  const reset = this.document.getElementById("reset-btn");
  reset.addEventListener("click", function() {
      document.location.reload();
  })
});