const api = "https://svc-0-staging-usf.hotyon.com/search?q=&apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83";

fetch(api)
  .then(response => {
    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return; // Exit early if the response is not successful
    }
    return response.json();
  })
  .then(data => {
    const items = data.data.items;

    
    const results = items.reduce((acc, item) => {
      const highestVariant = item.variants.reduce((maxVariant, variant) => {
        return variant.price > maxVariant.price ? variant : maxVariant;
      }, item.variants[0]); 

      acc.push({
        id: highestVariant.id,
        price: highestVariant.price,
      });

      return acc;
    }, []);

    const singleHighestPrice = results.reduce((max, current) => {
      return max.price > current.price ? max : current;
    }, results[0]); 

    // Find the variant with the matching ID within the highest-priced item:
    const matchingVariant = items.find(
      (item) => item.variants.some((variant) => variant.id === singleHighestPrice.id)
    );

    if (matchingVariant) {
      // console.log(`${matchingVariant.title}  
      //       Price: $${matchingVariant.variants[0].price} USD  
      //       `); // Access price from the first element of variants array
    } else {
      console.log("No matching variant found."); // Handle potential case where no matching ID exists
    }

    //cau 2
    const TestBundle = items.find(
      (item) => item.title === "Test bundle"
    );
    const total = TestBundle.variants.reduce((acc, curr) =>{
      return acc + curr.price
    }, 0)
    // console.log("Test Bundle")
    // console.log(`Teotal price: ${total}USD`)

    //cau 3
    const soldOUt = items.map((item)=>{
      if(item.variants.every((variant) => variant.available === 0))
      {
        //console.log(item.title)
      }
    },null)
    const size = items.map((item) => Object.values(item.options))
    console.log(size)
    //cau 4
    
  
  })
  .catch(err => console.error(err));

  // function check(size, color)
  // {
  //   let arr = document.querySelector('#input4').value.split('|');
  //   console.log(size)
  // }
