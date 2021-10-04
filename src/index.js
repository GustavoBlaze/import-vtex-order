(function(){
  function getCartRefFromUrl() {
    const url = new URL(window.location.href);
    const cartRef = url.searchParams.get("cartRef");
    if (cartRef) {
      return cartRef;
    }
    throw new Error("No cartRef found in URL");
  }
  
  async function getItemsFromCart(cartRef) {
    const {items} = await fetch(`/api/checkout/pub/orderForm/${cartRef}`).then(r => r.json())
    
    return items.map(({id, quantity, seller}) => ({id, quantity, seller}));
  }
  
  async function run() {
    const cartRef = getCartRefFromUrl();
    const items = await getItemsFromCart(cartRef)

    if (items.length === 0) {
      console.log("No items in cart");
      return;
    } 

    vtexjs?.checkout?.addToCart(items, null, items[0].seller).done(() => {
      console.log("Added items to cart");
      console.table(items)
    })
  }

  run();
})()
