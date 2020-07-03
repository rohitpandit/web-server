console.log('js in front end');


const weatherForm =  document.querySelector('form');
const search = document.querySelector('input');

const para1 = document.getElementById('message1');
const para2 = document.getElementById('message2');

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const location = search.value;
    console.log(location);
    const url = 'http://localhost:3000/weather?address='+ location;

    para1.textContent = 'Loading...';
    para2.textContent = '';

    fetch(url).then(response =>{
        response.json().then(data =>{
            if(data.error){
                // console.log(data.error);
                para1.textContent = data.error;
            }else{
                // console.log(data.forecast);
                // console.log(data.address)
                para2.textContent = data.forecast;
                para1.textContent = data.address;
            }
        })
    })
})
