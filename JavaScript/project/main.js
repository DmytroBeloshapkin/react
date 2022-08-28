let users = document.getElementsByClassName('users')[0]

fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then(value => {
        for (const item of value) {

            let user = document.createElement('div')
            user.classList.add('user')


            let box = document.createElement('div')
            box.classList.add('box')

            let userId = document.createElement('h2')
            userId.classList.add('h2')
            userId.innerText = `${item.id}. `

            let userName = document.createElement('h2')
            userName.classList.add('h2')
            userName.innerText = `${item.name}`

            box.append(userId,userName)


            let userDetails = document.createElement('a')
            userDetails.classList.add('userDetails')
            userDetails.innerText = 'info'
            userDetails.href = `./user-details.html?data=${JSON.stringify(item)}`

            user.append(box, userDetails)
            users.append(user)
        }
    })










