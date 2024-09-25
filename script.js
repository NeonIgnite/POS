let pos = document.querySelector('.pos');
let id = document.getElementById('username');
let passWord = document.getElementById('password');
let registerWrapper = document.querySelector('.registerWrapper');
let foodAndDrinks = document.querySelector('.foodAndDrinks');
let dashboard = document.querySelector('#dashboard');
let messages = document.querySelector('#messages');
let bills = document.querySelector('#bills');
let settings = document.querySelector('#settings');
let notifications = document.querySelector('#notifications');
let support = document.querySelector('#support');
let uncheckedBtn = document.querySelectorAll('ul button')
let homePOS = document.getElementById('homePOS');
let homeText = document.getElementById('homeText');
let posTitle = document.querySelector('.posTitle');
let fdBTn = document.getElementById('foodAndDrinks');
let tBody = document.getElementById('tableBody');
let bill = document.querySelector('.bills');
let offcanvas = document.querySelector('.offcanvas');
let orderList = document.getElementById('orderList');
let tfoot = document.querySelector('tfoot');
let totalCell = document.querySelector('#totalCell');
let btnCharge = document.querySelector('#btnCharge');

let user={
    id: 123456,
    password:123456
}

let catgories= [
    {
        name:'Pizza',
        img:'./assets/images/Pizza.png'
    },
    {
        name:'Drink',
        img:'./assets/images/Drink.png'
    },
    {
        name:'Burger',
        img:'./assets/images/Burger.png'
    },
    {
        name:'Pasta',
        img:'./assets/images/Pasta.png'
    },
    {
        name:'Wok',
        img:'./assets/images/Wok.png'
    },
    {
        name:'Dessert',
        img:'./assets/images/Dessert.png'
    },

]
let products= {
    Pizza : [
        {
            name: 'Super Supreme',
            price: '150',
            img:'./assets/images/pizzas/Hot-Dog.png'
        },
        {
            name: 'Margherita',
            price: '120',
            img:'./assets/images/pizzas/mixedcheese.png'
        },
        {
            name: 'Chicken Ranch',
            price: '170',
            img:'./assets/images/pizzas/chickenranch.png'
        },
        {
            name: 'Pepperoni',
            price: '150',
            img:'./assets/images/pizzas/Pepperoni.png'
        },
        {
            name: 'Super Sriracha',
            price: '180',
            img:'./assets/images/pizzas/Super-Sriracha.png'
        },
        {
            name: 'BBQ Chicken',
            price: '150',
            img:'./assets/images/pizzas/bbqchicken.png'
        },
    ],
    Drink: [
        {
            name: 'Orange Juice',
            price: '35',
            img:'./assets/images/drinks/orange.png'
        },
        {
            name: 'Water',
            price: '10',
            img:'./assets/images/drinks/water.png'
        },
        {
            name: 'Green Cola',
            price: '25',
            img:'./assets/images/drinks/greencolagreen.png'
        },
        {
            name: 'Green Cola',
            price: '25',
            img:'./assets/images/drinks/greencolablack.png'
        },
        {
            name: 'Big Cola',
            price: '20',
            img:'./assets/images/drinks/bigcola.png'
        },
        {
            name: 'Apple Juice',
            price: '20',
            img:'./assets/images/drinks/apple.png'
        },
    ],
    Burger: [
        {
            name: 'BBQ',
            price: '180',
            img:'./assets/images/burgers/BBQ.png'
        },
        {
            name: 'Old School',
            price: '100',
            img:'./assets/images/burgers/oldschool.png'
        },
        {
            name: 'Bacon',
            price: '120',
            img:'./assets/images/burgers/bacon.png'
        },
        {
            name: 'Cheesy',
            price: '140',
            img:'./assets/images/burgers/cheesy.png'
        },
        {
            name: 'Ditch',
            price: '160',
            img:'./assets/images/burgers/ditch.png'
        },
        {
            name: 'Cholo Chicken',
            price: '130',
            img:'./assets/images/burgers/cholochicken.png'
        },
    ],
    Pasta: [
        {
            name: 'Crispy Chicken',
            price: '100',
            img:'./assets/images/pastas/crispychicken.jpg'
        },
        {
            name: 'Shrimp',
            price: '150',
            img:'./assets/images/pastas/shrimp.jpg'
        },
        {
            name: 'Sogo2',
            price: '120',
            img:'./assets/images/pastas/sogo2.jpg'
        },
    ],
    Wok: [
        {
            name: 'Thai Basil',
            price: '120',
            img:'./assets/images/woks/thaibasil.png'
        },
        {
            name: 'Shrimp',
            price: '150',
            img:'./assets/images/woks/shrimp.png'
        },
        {
            name: 'Drunken',
            price: '160',
            img:'./assets/images/woks/drunken.png'
        },
    ],
    Dessert: [
        {
            name: 'Molten Cake',
            price: '90',
            img:'./assets/images/desserts/moltencake.png'
        },
        {
            name: 'Marble Cake',
            price: '100',
            img:'./assets/images/desserts/marble.png'
        },
        {
            name: 'Brownies',
            price: '70',
            img:'./assets/images/desserts/brownies.png'
        },
    ]
}

let cart=[
    
]
let order=[];

let recipt=[
    {
        orderNumber:1,
        noOfGuest:2,
        table:'2B',
        total:100
    }
]

let cats = Object.keys(products);

function check(){
    const regex = /^\d{6}$/;
    const idNumber = id.value;
    const pass = passWord.value

    if (regex.test(idNumber) && regex.test(pass)) {
        if(idNumber == user.id && pass == user.password){
            alert('hello welcome to POS web APP');
            registerWrapper.classList.replace('d-flex','d-none');
            pos.classList.replace('d-none','d-flex');
        }
        else{
            alert('invalid ID or Password please try again')
        }
    } else {
    alert('ID number is invalid');
    }
}

function showCategories(){
    foodAndDrinks.classList.replace('d-none','d-flex');
    homeText.innerText='Categories';
    homePOS.classList.add('align-self-start','px-5');
    bill.classList.replace('d-flex','d-none')
    if(homePOS.classList.contains('d-none')){
        homeText.innerText='Categories';
    }
    else{
        homePOS.classList.replace('d-none','d-flex');
    }
    posTitle.classList.replace('d-none','d-flex');
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    fdBTn.classList.add('btn-warning');
    foodAndDrinks.innerHTML ="";
    catgories.forEach((prod, index)=>{
        foodAndDrinks.innerHTML +=`
            <div class="cardFD col-3"  onclick="renderProducts('${prod.name}')">
                <div class='catBtn d-flex flex-column justify-content-between''>
                    <img src="${prod.img}" class="w-100" alt="">
                    <span>${prod.name}</span>
                </div>
            </div>
        `;
        
    });
}

function renderProducts(catNam){
    homeText.innerText=catNam+'s';
    let productToFetch = products[catNam];
    foodAndDrinks.innerHTML ="";
    productToFetch.forEach((prod,index) => {
        foodAndDrinks.innerHTML +=`
            <div class="cardFD col-3">
                <button class="btn" onclick="addOrder('${catNam}',${index})" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <img src="${prod.img}" class="w-75" alt="">
                    <h3 id='productDes'>${prod.name}</h3>
                    <h3 id='price'>${prod.price} EGP</h3>
                </button>
            </div>
            
  
        `
        
        
    });
}

function addOrder(key,index){
    // let newCart = []
  
    let obj = products[key][index];
    order.push(obj);
    console.log(order);
    showOrder(key,index);
}
function showOrder(key,index){
    offcanvas.innerHTML='';
    order.forEach((prod,ind)=>{
        if(order.length-1 == ind){
            return offcanvas.innerHTML +=`
            <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">Order</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between align-items-center">
                <div class='d-flex flex-column align-items-center'>
                    <img src="${prod.img}" class="w-75" alt="">
                    <h3 id='productDes'>${prod.name}</h3>
                    <h3 id='price'>${prod.price} EGP</h3>
                </div>
               
                <button class="btn btn-warning w-75" onclick="addToCart('${key}', ${index})">Add to Cart</button>
            </div>
    
            `
        }
    })
    // order=[]
}

function addToCart(key,index){
    alert('Order Added');
    let obj = products[key][index];
    let isValid =cart.findIndex((el)=>{return el.name == obj.name});
    if(isValid == -1){
        obj.qty=1;
        cart.push(obj);
    }
    else{
        cart[isValid].qty++;
    }
    // showCart()
    
}
function showCart(){
    tBody.innerHTML ='';
    cart.forEach((el,index)=>{
        console.log(el)
        tBody.innerHTML += `
        <tr> 
            <td>
                <div class="d-flex align-items-center gap-2 text-secondary">
                    <img src="${el.img}" width="30" height="30" alt="">
                    <h3 style="font-size: 1rem;">${el.qty} X ${el.name}</h3>
                </div>
            </td>
            <td>
                <h3 style="font-size: 1rem;">${el.qty * el.price}</h3>
            </td>
        </tr>`;
    })
    let sum=0;
    cart.forEach((el)=>{
        let x = +el.qty * +el.price
        sum += x ;
    })
    
    totalCell.innerText = sum;
    btnCharge.innerText=`Charge Customer ${sum} EGP`;
    
    btnCharge.addEventListener('click',()=>{
        renderRecipt(sum);
        tBody.innerHTML ='';
        // order= [];
    });
}


function addToRecipt(cart,sum){
    console.log(cart);
    let newCart = [...cart];
    console.log(newCart)
    alert('cart added to the recipt!')
    recipt.push(newCart);
    console.log(recipt)
    renderRecipt(sum);
}

function renderRecipt(sum){
    totalCell.innerText = 0;
    btnCharge.innerText=`Charge Customer ${0} EGP`;
    orderList.classList.replace('d-none','d-block');
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    orderList.innerHTML='';
    recipt.forEach((order,index)=>{
        orderList.innerHTML +=`
        <li style="list-style: none;" class="d-flex justify-content-between align-items-center p-3 border rounded mx-2" >
            <div class="billInfo d-flex flex-column" >
                <div class="orderStatus d-flex align-items-center" >
                    <h1 style="font-size: 1rem;" >#${order.orderNumber}</h1>
                    <div class="dot bg-warning mx-2" style="width: 5px; height: 5px; border-radius: 50%;"></div>
                    <h3 style="font-size: 1rem;">active</h3>
                </div>
                <div class="tableInfo d-flex align-items-center text-secondary">
                    <h2 style="font-size: 0.8rem;">${order.table}</h2>
                    <div class="dot bg-secondary mx-1" style="width: 3px; height: 3px; border-radius: 50%;"></div>
                    <h2 style="font-size: 0.8rem;">${order.noOfGuest}</h2>
                </div>
            </div>
            <div class="orderPrice text-secondary">
                <h1 style="font-size: 1rem;">${sum}</h1>
                <h1 style="font-size: 1rem;">${hours}:${mins}</h1>
            </div>
         </li>
        `
    })
    // showCart();
}


function showDashboard(){
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    dashboard.classList.add('btn-warning');
    homeText.innerText='Soon...';
    homeText.style.fontSize='3rem';
}
function showMessages(){
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    homeText.innerText='Soon...';
    homeText.style.fontSize='3rem';
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    messages.classList.add('btn-warning');
}
function showBills(){
    showCart();
    homeText.innerText='Bills';
    homePOS.classList.add('align-self-start','px-5');
    bill.classList.replace('d-none','d-flex');
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    bills.classList.add('btn-warning');
    // homeText.innerText='Soon...';
    // homeText.style.fontSize='3rem';
}
function showSettings(){
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    settings.classList.add('btn-warning');
    homeText.innerText='Soon...';
    homeText.style.fontSize='3rem';
}
function showNotifications(){
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    notifications.classList.add('btn-warning');
    homeText.innerText='Soon...';
    homeText.style.fontSize='3rem';
}
function showSupport(){
    foodAndDrinks.classList.replace('d-flex','d-none');
    posTitle.classList.replace('d-flex','d-none');
    homePOS.classList.replace('d-none','d-flex');
    
    uncheckedBtn.forEach((btn)=>{
        if(btn.classList.contains('btn-warning')){
            btn.classList.remove('btn-warning')
        }
    })
    support.classList.add('btn-warning');
    homeText.innerText='Soon...';
    homeText.style.fontSize='3rem';
}