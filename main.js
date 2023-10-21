const body = document.querySelector('body');
const navBtn = document.querySelector('.open-nav')

navBtn.addEventListener('click', () => {
   body.classList.toggle('open')
})

window.addEventListener('scroll', function() {
    if (window.scrollY >= 200) {
       body.classList.add("nav-design")
        // Your scroll position is greater than or equal to 200
        // You can now apply the function to your nav-bar
        // For example, you can add a CSS class or modify its style
    } else {
       body.classList.remove("nav-design")
        // Your scroll position is less than 200
        // You can reset the nav-bar to its initial state
    }
});