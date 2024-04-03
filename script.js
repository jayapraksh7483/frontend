var settingsmenu=document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");

}

var darkbtn=document.getElementById("dark-btn");
darkbtn.onclick=function()
{
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
let likeCount = 0;

// Function to handle liking the post
function likePost() {
  // Increase the like count
  likeCount++;
  // Update the like count displayed on the page
  document.getElementById('likeCount').innerText = likeCount;
}


 