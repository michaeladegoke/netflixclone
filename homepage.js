const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader){
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = "0";
    }
    
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";  
    }
    else {
    accordionItemBody.style.maxHeight = 0;
  }
  });
});

          let image = document.getElementById('image');
          let images = ['NETFLIX1.jpg', 'NETFLIX2.jpg', 'NETFLIX3.jpg', 'NETFLIX4.jpg']
          setInterval(function(){
           let random = Math.floor(Math.random() * 4); 
           image.src = images[random];
          }, 800);


