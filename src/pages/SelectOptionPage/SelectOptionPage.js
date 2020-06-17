const data = [
    {
        id: 1,
        title: 'Board a bus',
        image: '../../../res/images/bs2.jpeg',
        link: "../Home/Home.html",
        description: 'Here You can board a bus for a travell,you will have to select your region and town where you are'
    },
    {
        id: 2,
        title: 'See Settings',
        image: '../../../res/images/s3.jpeg',
        link: "../SettingsPage/SettingsPage.html",
        description: 'Go through your account settings and other settings like language, location and also premium services'
    },
    {
        id: 3,
        title: 'Our Location',
        image: '../../../res/images/l1.jpeg',
        link: "../Home/Home.html",
        description: 'Know our Location and also more about us'
    },
    {
        id: 4,
        title: 'This is title',
        image: '../../../res/images/bd1.png',
        link: "../Home/Home.html",
        description: 'This is more text for the description'
    }
];

document.getElementById('house').innerHTML = `
${data.map((item) => {
    return `
            <a  href=${item.link} class= "listItem" id=${item.id}>
                <div class = "imageAndTitle">   
                    <img src = "${item.image}" class = "image" />
                    <p class = "title">${item.title}</p>
                </div>
                <div class = "descriptionContainer">
                    <p class = "description" >${item.description}</p>
                </div>
            </a>
    `
}).join('')}
`