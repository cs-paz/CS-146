// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 *       formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   var username = document.getElementById("formUsername");
   var caption = document.getElementById("formCaption");
   var img = document.getElementById("formImg");
   // Pass values to addNewPost()
   addNewPost(username, caption, img);
}

/**
 * This function create the following div and append it to the #postList element
   <div class="post">
      <span>{username}</span>
      <img src="{imgLocation}" alt="{caption}">
      <div class="postOverlay">
         {caption}
      </div>
   </div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   // Create a span for the user
   // Create image element
   // Create overlay element
   // Add all child elements (order matters)
   // Add event listeners to post
   // Add post element to post list
   var postDiv = document.createElement("div");
   postDiv.setAttribute("class", "post");
   var uSpan = document.createElement("span");
   uSpan.innerHTML = username.value;
   var img = document.createElement("img");
   if (imgLocation.value == "woofer") {
      img.setAttribute("src", './img/woofer.jpg');
   }
   else if(imgLocation.value == "pupper") {
         img.setAttribute("src", './img/pupper.jpg')
   }
   else if(imgLocation.value == "clouds") {
         img.setAttribute("src", './img/clouds.jpg')
   }
   else{
         img.setAttribute("src", './img/snek.jpg')
   }
   img.setAttribute("alt", caption);
   var captionDiv = document.createElement("div");
   captionDiv.setAttribute("class","postOverlay");
   captionDiv.innerHTML = caption.value;

   postDiv.onmouseover = function opUp(user){
         captionDiv.style.opacity = "1";
   }
   postDiv.onmouseout = function opDown(user){
         captionDiv.style.opacity = "0";
   }

   postDiv.appendChild(uSpan);
   postDiv.appendChild(img);
   postDiv.appendChild(captionDiv);
   document.getElementById("postList").appendChild(postDiv);

}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};