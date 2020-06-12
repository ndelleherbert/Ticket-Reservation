const data = [
    {
        title: 'This is title',
        image: '../../../res/images/bd1.png',
        description: 'This is more text for the description'
    },
    {
        title: 'This is title',
        image: '../../../res/images/bd1.png',
        description: 'This is more text for the description'
    },
    {
        title: 'This is title',
        image: '../../../res/images/bd1.png',
        description: 'This is more text for the description'
    },
    {
        title: 'This is title',
        image: '../../../res/images/bd1.png',
        description: 'This is more text for the description'
    }
];

document.getElementById('house').innerHTML = `
${data.map(() => {
    return `
        <div class= "listItem">
            <div>   
                <img src = "${data.image}" class = "image" />
                <p>${data.title}</p>
            </div>
            <div>
                <p>${data.description}</p>
            </div>
        </div>
    `
}).join('')}
`