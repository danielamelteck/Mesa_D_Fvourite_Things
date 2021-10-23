  (() => {

    console.log("fired");	
  
    let  buttons = document.querySelectorAll("button.svg"),
         objects = {};
  
         function setImageData() {
          let key = this.dataset.key;
  
          let name = document.querySelector(".name"),
              focus = document.querySelector(".focus"),
              description = document.querySelector(".description");
  

    
              name.textContent = objects[key].name;
              focus.textContent = objects[key].focus;
              description.textContent = objects[key].description;
              }
        
          function getData() {
              fetch("./data.json")
              .then(res => res.json())
              .then(data => {
                  
                  objects = data;
      
                  // buildControls(data);
              })
                  
      
              .catch(error => console.error(error));
              
              
              }    
              
          getData();
                
          buttons.forEach(btn => btn.addEventListener('click', setImageData));
      
      })();