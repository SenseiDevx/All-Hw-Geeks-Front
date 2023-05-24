const buttons = document.getElementsByTagName("button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (item) => {
        document.body.style.background = item.target.innerText
        buttons[i].style.background = item.target.innerText
    }
}