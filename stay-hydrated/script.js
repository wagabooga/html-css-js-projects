const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// i would not use this again
function highlightCups(idx) {
    if (idx === smallCups.length - 1 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    const totalVolume = 4 * 1000; // Goal is 4 liters, converted to ml
    const cupVolume = 750; // Each cup is 750 ml

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = reduceFraction(fullCups, totalCups)
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${(totalVolume - (cupVolume * fullCups)) / 1000}L`
    }
}

https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
function reduceFraction(numerator, denominator) {
    const gcd = (a, b) => {
        if (!b) return a
        return gcd(b, a % b)
    }

    const divisor = gcd(numerator, denominator)
    return `${numerator / divisor}/${denominator / divisor}`
}
