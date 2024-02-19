let totalSelected = 0;
let totalFair;
const seats = document.getElementsByClassName('seat')
console.log(seats[3])
changeBg(seats)

const seatsObject = {
    seat1: "",
    seat2: '',
    seat3: '',
    class: 'Ecomony',
    price: 550
}



function changeBg(seats) {

    for (let seat of seats) {
        seat.addEventListener('click', function () {
            sitNo = seat.innerText
            console.log('selected seat no is :', sitNo)
            

            const selectedSeat = document.getElementById('selected-seat')
            console.log(selectedSeat.innerText)


            seatsObject.seatNo = sitNo;
            totalSelected += 1;

            if (totalSelected <= 4) {
                seat.classList.add('bg-[#1dd100]')
                document.getElementById('no-of-seats-selected').innerText = totalSelected;
                let remainingSeat = 8 - totalSelected;
                document.getElementById('seats-left').innerText = remainingSeat;

                console.log(seat.classList)


                totalFair = seatsObject.price * totalSelected;
                console.log('total fair', totalFair)
                document.getElementById('total-price').innerText = totalFair;
                const grandTotal = document.getElementById('grand-total');
                grandTotal.innerText=totalFair;

                const applyButton = document.getElementById('apply-button');
                applyButton.addEventListener('click', getValue);
                function getValue() {
                    const input = document.getElementById('coupon-input');
                    let inputValue = input.value;
                    console.log(typeof inputValue);
                    couponCode1 = 'NEW15';
                    couponCode2 = 'Couple 20';

                    if (inputValue === couponCode1) {
                        console.log('matched')
                        totalFair = document.getElementById('total-price').innerText;
                        console.log(totalFair)
                        input.classList.add('hidden')
                        applyButton.classList.add('hidden')

                        const discount = totalFair*15/100;
                        console.log('discount',discount)
                        grandTotal.innerText=totalFair-discount;

                        const discountContainer =  document.getElementById('text')
                        const amountContainer = document.getElementById('amount')
                        const discountTextD = document.createElement('p');
                        const discountAmountD = document.createElement('p');
                        const discountText = discountTextD.innerText='Discount';
                        const discountAmount = discountAmountD.innerText=discount;
                        console.log(discountText, discountAmount)
                        discountContainer.appendChild(discountText)
                        amountContainer.appendChild(discountAmount)
                    }
                    else if (inputValue === couponCode2) {
                        console.log('matched')
                        totalFair = document.getElementById('total-price').innerText;
                        console.log(totalFair)
                        input.classList.add('hidden')
                        applyButton.classList.add('hidden')

                        const discount = totalFair*20/100;
                        console.log('discount',discount)
                        grandTotal.innerText=totalFair-discount;


                    }
                    else {
                        console.log('did not matched')
                        grandTotal.innerText=totalFair;

                    }
                }


                if (totalSelected == 1) {
                    console.log('totalSelected', totalSelected)
                    document.getElementById('seat-class').innerText = seatsObject.class;
                    document.getElementById('seat-fair').innerText = seatsObject.price;
                    document.getElementById('seat-number').innerText = seatsObject.seatNo;
                    console.log(seatsObject);

                }

                else if (totalSelected == 2) {
                    console.log('totalSelected', totalSelected)
                    document.getElementById('seat-2-class').innerText = seatsObject.class;
                    document.getElementById('seat-2-fair').innerText = seatsObject.price;
                    document.getElementById('seat-2-number').innerText = seatsObject.seatNo;
                    console.log(seatsObject);
                }
                else if (totalSelected == 3) {
                    console.log('totalSelected', totalSelected)
                    document.getElementById('seat-3-class').innerText = seatsObject.class;
                    document.getElementById('seat-3-fair').innerText = seatsObject.price;
                    document.getElementById('seat-3-number').innerText = seatsObject.seatNo;
                    console.log(seatsObject);
                }
                else {
                    console.log('totalSelected', totalSelected)
                    document.getElementById('seat-4-class').innerText = seatsObject.class;
                    document.getElementById('seat-4-fair').innerText = seatsObject.price;
                    document.getElementById('seat-4-number').innerText = seatsObject.seatNo;
                    console.log(seatsObject);
                }
                

            }
            else {
                const warning = 'You can not buy more than 4 tickets';
                alert(warning);
                return;
            }


        })

    }
}

const userPhoneInput = document.getElementById('phone-number');
const userPhone = userPhoneInput.value;
console.log()
function getValue() {
    const input = document.getElementById('phone-number');
    let inputValue = input.value;
    console.log(inputValue.length);
}


