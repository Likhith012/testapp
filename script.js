

function getRecommendation() {
    // Get user input and convert to lowercase
    let category = document.getElementById("category").value.trim().toLowerCase();
    let resultDiv = document.getElementById("result");
  
    //array of product objects
    let products = [
      { category: "electronics", name: "Smartphones", url: "https://example.com/smartphone" },
      { category: "electronics", name: "Laptops", url: "https://example.com/laptop" },
      { category: "clothing", name: "T-shirts", url: "https://example.com/tshirt" },
      { category: "clothing", name: "Jackets", url: "https://example.com/jacket" },
      { category: "books", name: "Novel Books", url: "https://example.com/novel" },
      { category: "books", name: "Comic Books", url: "https://example.com/comic" }
    ];
  
  
  
    // Check for empty input
    if (category === "") {
      resultDiv.textContent = "Please enter a product category.";
      return;
    }
  
    // Filter the array to get products to matching the category
    let filteredProducts = products.filter(function(item) {
      return item.category === category;
    });
  
    // If no products match show an error message
    if (filteredProducts.length === 0) {
      resultDiv.textContent = "No products found for that category.";
      return;
    }
  
  
    // Select a random product from the filtered array
    let randomIndex = Math.floor(Math.random() * filteredProducts.length);
    let selectedProduct = filteredProducts[randomIndex];
  
    // Display the recommendation
    resultDiv.innerHTML = "Recommended: <a href='" + selectedProduct.url + "' target='_blank'>" + selectedProduct.name + "</a>";
  }
  