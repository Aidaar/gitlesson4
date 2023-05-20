const btn = document.getElementById('btn')

const text = document.createElement('p')


addEventListener('click', ()=> {
    btn.style.background = 'blue'
    btn.before(text)
    text.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minima consectetur odit perspiciatis beatae officia recusandae 
    corrupti expedita accusamus fugiat, ipsam facere vero, 
    perferendis, earum eaque pariatur optio dolor excepturi quas!
    `
})
