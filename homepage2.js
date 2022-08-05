            
 let image = document.getElementById('image');
 let images = ['NETFLIX1.jpg', 'NETFLIX2.jpg', 'NETFLIX3.jpg', 'NETFLIX4.jpg'];
 setInterval(function(){
  let random = Math.floor(Math.random() * 4); 
  image.src = images[random];
 }, 800);
   

 