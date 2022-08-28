let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userBox = document.getElementsByClassName('user-details')[0];

let userId = document.createElement('h4');
userId.innerText = `ID: ${user.id}`;

let userName = document.createElement('h4');
userName.innerText = `Name: ${user.name}`;

let userUsername = document.createElement('h4');
userUsername.innerText = `Username: ${user.username}`;

let userEmail = document.createElement('h4');
userEmail.innerText = `E-mail: ${user.email}`;

let userPhone = document.createElement('h4');
userPhone.innerText = `Phone: ${user.phone}`;

let userWebsite = document.createElement('h4');
userWebsite.innerText = `Web-site: ${user.website}`;

let userAdress = document.createElement(`p`)
userAdress.innerText = `Adress: ${user.address.city}, ${user.address.suite}, ${user.address.street}, ${user.address.zipcode}`

let userCompany = document.createElement(`p`)
userCompany.innerText = `Company info: ${user.company.bs}, ${user.company.catchPhrase}, ${user.company.name}`

userBox.append(userId, userName, userUsername, userEmail, userPhone, userWebsite, userAdress, userCompany);

/********************************************/

let button = document.createElement("button")
button.classList.add('button')
button.innerText = 'post of current user'

let titles = document.createElement(`div`)
titles.classList.add('titles')

button.onclick = (e) => {
    e.target.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)

        .then((value) => value.json())
        .then(value => {

                for (const valueElement of value) {

                    let box = document.createElement(`div`)
                    box.classList.add('boxUser')

                    let p = document.createElement('p')
                    p.classList.add('pTitile')
                    p.innerHTML = `ID post: <b>${valueElement.id}</b> - Title: <b>${valueElement.title}</b>`
                    console.log(valueElement.title);

                    let postBTN = document.createElement('button');
                    postBTN.classList.add('postBTN')
                    postBTN.innerText = 'Show Post';

                    postBTN.onclick = () => {
                        location.href = `./post-details.html?data=${JSON.stringify(valueElement)}`
                    }

                    box.append(p, postBTN)
                    titles.append(box)
                }
            }
        )
}

document.body.append(button, titles)


let home = document.createElement("button")
home.classList.add('home')
home.innerHTML = 'home'
document.body.append(home)

home.onclick = () => {
    location.href = `index.html`;
}







