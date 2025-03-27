document.querySelectorAll('.letter').forEach((letter, key) => {
    letter.addEventListener("click", (e) => {
        console.log('click')
        console.log(key);
    })
})