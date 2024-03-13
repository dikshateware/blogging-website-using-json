let http = new XMLHttpRequest();
http.open('get', 'pro.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let posts = JSON.parse(this.responseText);
      let output = "";
      for(let item of posts){
         output += `
            <div class="pos">
               <img src="${item.image}" alt="${item.description}">
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
                  <span>€</span>
               </p>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
      }
      document.querySelector(".posts").innerHTML = output;
   }
}