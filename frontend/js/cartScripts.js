const productsObject = {
  "Budweiser": {
      "prodid": 1,
      "prodnome": "Budweiser",
      "prodesc": "A cerveja Budweiser possui sabor leve, cor clara e aroma discreto.",
      "prodpre": "5.50",
      "prodqtd": 10,
      "prodfoto": "../assets/budweiser.webp",
      "fornid": 1,
      "cartQuantity": 1
  },
  "Amstel": {
      "prodid": 2,
      "prodnome": "Amstel",
      "prodesc": "Cerveja de origem holandesa puro malte com sabor de Amsterdam.",
      "prodpre": "2.59",
      "prodqtd": 15,
      "prodfoto": "../assets/amstel.webp",
      "fornid": 1,
      "cartQuantity": 6
  },
  "Eisenbahn": {
      "prodid": 3,
      "prodnome": "Eisenbahn",
      "prodesc": "Puro malte, leve e com amargor na medida.",
      "prodpre": "2.99",
      "prodqtd": 7,
      "prodfoto": "../assets/eisenbahn.webp",
      "fornid": 1,
      "cartQuantity": 2
  },
  "Heineken": {
      "prodid": 4,
      "prodnome": "Heineken",
      "prodesc": "Cerveja gelada",
      "prodpre": "5.99",
      "prodqtd": 10,
      "prodfoto": "../assets/heineken.jpeg",
      "fornid": 1,
      "cartQuantity": 0
  }
}

$(document).ready(function() {
  

  productsObject.map(product => {
    console.log(product);
  })
})