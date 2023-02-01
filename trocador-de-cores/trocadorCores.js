const colors = ['green', 'yellow', 'red', 'black', 'purple' ]

const changeBackground = function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
};
document.querySelector('button').addEventListener('click', changeBackground);