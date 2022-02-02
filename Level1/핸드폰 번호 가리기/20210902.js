const phone_number = '01033334444'


const solution = (phone_number) => {
    return '*'.repeat(phone_number.length - 4).concat(phone_number.slice(-4))
}