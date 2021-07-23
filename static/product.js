var pro_id = $("#pro_id");
var details = $("#details");
// ajax call for select options
var product_request = new XMLHttpRequest();
product_request.open("get", "/api/products/", true);
product_request.onload = function () {
  if (this.status == "200") {
    try {
      var product_data = JSON.parse(this.responseText);
      var sele = `<option value="all">All</option>`;
      for (var i = 0; i < product_data.length; i++) {
        sele += `<option value="${product_data[i].id}">${product_data[i].id}</option>`;
      }
      pro_id[0].innerHTML = sele;
    } catch (e) {
      console.warn("something went wrong");
    }
  }
};
product_request.send();
var url = "/api/products/";
function test(value) {
  if (value == "all") {
    final_products(url);
  } else {
    one_product(url + value);
  }
}
final_products(url);
function final_products(url) {
  var product_request = new XMLHttpRequest();
  product_request.open("get", url, true);
  product_request.onload = function () {
    if (this.status == "200") {
      try {
        var product_data = JSON.parse(this.responseText);
        var txt = ``;
        for (var i = 0; i < product_data.length; i++) {
          txt += `
                  <div class='col-md-3' id='${product_data[i].id}' onclick='new_page(this.id)'>
                  <div class='card p-3 mx-2 my-4 '>
                  <img src="${product_data[i].image}" class="card-img p-3" alt="product images" width="100px"height="150px">
                  <div class='card-body'>
                  <b class='card-title'>$${product_data[i].price} </b>
                  <p class='card-text'>${product_data[i].title}</p>
                  </div>
                  </div>
                  </div>
                  `;
        }
        details[0].innerHTML = txt;
      } catch (e) {
        console.warn("something went wrong");
      }
    }
  };
  product_request.send();
}
// for displaying a particular product
function one_product(url) {
  var product_request = new XMLHttpRequest();
  product_request.open("get", url, true);
  product_request.onload = function () {
    if (this.status == "200") {
      try {
        var product_data = JSON.parse(this.responseText);
        var txt = ``;

        txt += `

                  <div class='col-md-3' id='${product_data.id}' onclick='new_page(this.id)'>
                  <div class='card p-3 mx-2 my-4 '>
                  <img src="${product_data.image}" class="card-img p-3" alt="product images" width="100px"height="150px">
                  <div class='card-body'>
                  <b class='card-title'>$${product_data.price} </b>
                  <p class='card-text'>${product_data.title}</p>
                  </div>
                  </div>
                  </div>
                  `;

        details[0].innerHTML = txt;
      } catch (e) {
        console.warn("something went wrong");
      }
    }
  };
  product_request.send();
}

//function to display details of the particular product when clicked.
function new_page(id) {
  var product_request = new XMLHttpRequest();
  product_request.open("get", "/api/products/", true);
  product_request.onload = function () {
    var product_data = JSON.parse(this.responseText);
    for (var item in product_data) {
      if (product_data[item].id == id) {
        var myWindow = window.open("product_details.html", "_blank"); //new tab for displaying details of the product
        myWindow.document.write(`
          <div class="container m-3 p-3">
            <div class="row">
              <div class="col-md-3">
                <img src="${product_data[item].image}" alt="" id="img" width="200px" height="200px" />
              </div>
              <div class="col-md-3">
                <h1 id="price">$ ${product_data[item].price}</h1>
                <b id="title"> Title : ${product_data[item].title}</b>
                <h3 id="category">Category : ${product_data[item].category}</h3>
                <p id="description">${product_data[item].description}</p>
              </div>
            </div>
          </div>`);
      }
    }
  };
  product_request.send();
}

// var details = $("#details");

// add_html_more("/apiproducts/");

// //for displaying more product

// function add_html_more(url) {
//   var product_request = new XMLHttpRequest();
//   product_request.open("get", url, true);
//   product_request.onload = function () {
//     if (this.status == "200") {
//       try {
//         var product_data = JSON.parse(this.responseText);
//         var txt = ``;
//         for (var i = 0; i < product_data.length; i++) {
//           txt += `

//         <div class='col-md-3' id='${product_data[i].id}' onclick='new_page(this.id)'>
//         <div class='card p-3 mx-2 my-4 '>
//         <img src="${product_data[i].image}" class="card-img p-3" alt="product images" width="100px"height="150px">
//         <div class='card-body'>
//         <b class='card-title'>$${product_data[i].price} </b>
//         <p class='card-text'>${product_data[i].title}</p>
//         </div>
//         </div>
//         </div>
//         `;
//         }
//         details[0].innerHTML = txt;
//       } catch (e) {
//         console.warn("something went wrong");
//       }
//     }
//   };
//   product_request.send();
// }
