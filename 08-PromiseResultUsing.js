const cards = document.querySelector('#cards');
const cars = [
    {
        name: 'Model s',
        image: './images/s.jpeg',
        price: 72000
    },
    {
        name: 'Model 3',
        image: './images/3.jpeg',
        price: 45000
    },
    {
        name: 'Model x',
        image: './images/x.jpeg',
        price: 68500
    },
    {
        name: 'Model y',
        image: './images/y.jpeg',
        price: 44000
    }
];

const teslaCars = new Promise((resolve, reject) => {
    if (cars) {
        resolve(cars)
    } else {
        reject('Sorry, something is getting wrong')
    };
});

teslaCars
.then(data => {
    setTimeout(() => {
        cards.innerHTML = data.map(car => `
    <div class="card m-3" style="width: 18rem">
          <img src="${car.image}" class="card-img-top" alt="car" />
          <div class="card-body">
            <h5 class="card-title text-danger">${car.name}</h5>
            <p
              class="card-text bg-success text-light rounded text-center p-1 h3">
              ${car.price} $</p>
          </div>
        </div>
      </div>`).join('')
    },500)
})
.catch(err => alert(err));