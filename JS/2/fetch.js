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

    // Efficiently find items with highest variant price using reduce:
    const results = items.reduce((acc, item) => {
      const highestVariant = item.variants.reduce((maxVariant, variant) => {
        return variant.price > maxVariant.price ? variant : maxVariant;
      }, item.variants[0]); // Initialize with first variant

      acc.push({
        id: highestVariant.id,
        price: highestVariant.price,
      });

      return acc;
    }, []);

    // Find the single item with the highest price among all highest variants:
    const singleHighestPrice = results.reduce((max, current) => {
      return max.price > current.price ? max : current;
    }, results[0]); // Initialize with first item

    // Find the variant with the matching ID within the highest-priced item:
    const matchingVariant = items.find(
      (item) => item.variants.some((variant) => variant.id === singleHighestPrice.id)
    );

    if (matchingVariant) {
      console.log(`${matchingVariant.title}  
            Price: $${matchingVariant.variants[0].price} USD  
            `); // Access price from the first element of variants array
    } else {
      console.log("No matching variant found."); // Handle potential case where no matching ID exists
    }
    const TestBundle = items.find(
      (item) => item.title === "Test bundle"
    );
    const total = TestBundle.variants.reduce((acc, curr) =>{
      return acc + curr.price
    }, 0)
    console.log("Test Bundle")
    console.log(`Teotal price: ${total}USD`)
  })
  .catch(err => console.error(err));
