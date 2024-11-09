const s1_h1 = document.querySelector('.s1>h1')
const opt_esthetic = document.querySelector('.s1>.opts>.opt1')
const opt_mechanic = document.querySelector('.s1>.opts>.opt2')
const mechanic = document.querySelector('.mechanic')
const esthetic = document.querySelector('.esthetic')
const interior_detail = document.querySelector('.esthetic>.opts>.opt1')
const exterior_detail = document.querySelector('.esthetic>.opts>.opt2')
const back_s1 = document.querySelector('.mechanic>.back_s1')

function opt_clicked_animation() {
    opt_esthetic.style.transition = '0.7s ease-in'
    // opt_mechanic.style.transition = '0.5s ease-in'
    s1_h1.style.transition = '1s ease-in'
    setTimeout(()=>{
        s1_h1.style.transform = `translateX(-${innerWidth}px)`
        setTimeout(()=>{
            opt_esthetic.style.transform = `translateY(${innerHeight}px)`
            setTimeout(()=>{
                // opt_mechanic.style.transform = `translateY(-${innerHeight}px)`
            },75)
        },125)
    },50)
}

function back_s1_animation() {
    opt_esthetic.style.transition = ''
    // opt_mechanic.style.transition = ''
    s1_h1.style.transition = '0.1 ease-out'
    setTimeout(()=>{
        s1_h1.style.transform = ''
        setTimeout(()=>{
            opt_esthetic.style.transform = ''
            setTimeout(()=>{
                // opt_mechanic.style.transform = ''
            },75)
        },125)
    },50)
}

// opt_mechanic.addEventListener('click', () => {
//     opt_clicked_animation()
//     setTimeout(()=>{
//         mechanic.style.transform = 'translate(0%, 0%) scale(1)'
//     },250)
// })

opt_esthetic.addEventListener('click', () => {
    opt_clicked_animation()
    setTimeout(()=>{
        esthetic.style.transform = 'translate(0%, 0%) scale(1)'
    },250)
})

back_s1.addEventListener('click', () => {
    // mechanic.style.transform = ''
    esthetic.style.transform = ''
    back_s1_animation()
})

interior_detail.addEventListener('click', () => {
    // https://buy.stripe.com/cN27sT4OZg4A6Yw5kk
    // window.open('../Appointment.html')
    window.location.href = '../Appointment.html'
})

exterior_detail.addEventListener('click', () => {
    // https://buy.stripe.com/cN27sT4OZg4A6Yw5kk
    // window.open('../Appointment.html')
    window.location.href = '../Appointment.html'
})

// https://calendar.google.com/calendar/u/6?cid=Y2FyeGRldGFpbGluZzEwMUBnbWFpbC5jb20