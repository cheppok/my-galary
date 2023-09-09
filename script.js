
  const thumbnails = document.querySelectorAll('.thumbnails');
 

  thumbnails.forEach((thumbnails) => {
    thumbnails.addEventListener('click', displayLargerImage);
 
  });

     function displayLargerImage(event) {
      const largerDiv = document.getElementById("largerDiv");
      largerDiv.innerHTML = " ";
      
      const largerImage = document.createElement( "img");
      largerImage.src = event.target.src;

      largerImage.style.maxWidth = "100%";
      largerImage.style.maxHeight = "100%";
      largerImage.style.display = "block";
      largerImage.style.margin = "auto";

      largerDiv.appendChild(largerImage);

     };
   
