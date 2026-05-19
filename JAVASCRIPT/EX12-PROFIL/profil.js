const laDiv = document.querySelector('.userProfil');
laDiv.style.background = 'linear-gradient(135deg, #6c63ff, #c850c0)';
laDiv.style.color = 'white';
laDiv.style.width = '400px';
laDiv.style.fontWeight = '700';
laDiv.style.borderRadius = '10px';
laDiv.style.padding = '20px';
laDiv.style.marginLeft = '800px';
laDiv.style.marginTop = '100px';
laDiv.style.boxShadow = '4px 4px 4px rgba(0, 0, 0, 0.5)';
console.log(laDiv);

const image = document.createElement('img');
image.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";
image.width = 400;
laDiv.appendChild(image);

const name = document.createElement('p');
name.innerText = "John delavega";
name.style.fontSize = '30px';
laDiv.appendChild(name);

const email = document.createElement('p');
email.innerText = "john.doe@example.com";
laDiv.appendChild(email);

const age = document.createElement('p');
age.innerText = "25";
laDiv.appendChild(age);

const dob = document.createElement('p');
dob.innerText = "08/02/1989";
laDiv.appendChild(dob);

const active = document.createElement('p');
active.innerText = "true";
laDiv.appendChild(active);

