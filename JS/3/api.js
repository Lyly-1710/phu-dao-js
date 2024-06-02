const input = document.querySelector('.Input');
input.style.display = "none";
const buttonlist = document.querySelector("#listBtn");
buttonlist.style.display = "none";

const app =
{
    API_URL : "https://svc-0-staging-usf.hotyon.com/search?q=&apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83",
    async fetchData() {
        const response = await fetch(this.API_URL);
        const { data } = await response.json();
        return data;
    },
    async GetCount (button)
    {
        button.innerText =  "Dang tai san pham";
        const data = await app.fetchData();
        const items = data.items;
        button.innerText = `Da tai xong ${items.length} san pham`;
        input.style.display = "block";
        buttonlist.style.display = "block";
    },
    async getProduct()
    {
        const data = await app.fetchData();
        return data.items.map((item)=>
        {
            let discount = 0;
            const price = item.variants.map((variant)=>
                {
                    if(variant.price < variant.compareAtPrice)
                    {
                        discount = (1- variant.price/variant.compareAtPrice)*100;
                        return variant.price;
                    }
                    return variant.price;
                })
        
            return `
                <h1> ${item.title} </h1>
                <br>
                <span>Price:${price[0]}</span> 
                <br>
                <span>Discount:${discount}%</span> 
                
            `
        })
    },
    bai1()
    {
        const button = document.querySelector(".button-1");
        const result = document.querySelector(".result");

        button.addEventListener('click', async function () 
        {
            await app.GetCount(button);
        }
        )
    },
    bai2()
    {
        const res = document.querySelector('.result1');
        buttonlist.addEventListener('click', async function()
    {

        res.innerHTML = await app.getProduct();
    })
    },
    async search(input)
    {
        const data = await this.fetchData();
        const result = document.querySelector(".result1");
        const res = data.items.map((item) =>{
            if(item.title.includes(input.value))
                {
                    
                   return `<h1> ${item.title} </h1>`
                }
        }).join('');
        result.innerHTML = res;

    },
    bai3()
    {
        const input = document.querySelector('#search');
        const button = document.querySelector('#searchBtn');
        button.addEventListener('click', async function()
        {
            await app.search(input);
        })
    },
    init()
    {
        app.bai1();
        app.bai2();
        app.bai3();
    },
   
}
app.init();
