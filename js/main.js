document.getElementById('buy-tickets').addEventListener('click',function(){
const buyTickets = document.getElementById('sit-plane');
if(buyTickets){
    buyTickets.scrollIntoView({behavior:'smooth'});
}
});

let sitClick = 0
totalAmount = 0
const totalSit = document.querySelectorAll('.sit');

for (const sit of totalSit) {
    sit.addEventListener('click', function(){
        if(sitClick < 4){
            sit.style.backgroundColor = 'green';
            sit.style.color = 'white';
            sit.disabled = true;
            if(sitClick === 4){
                for (const sit of click) {
                    if(!sit.disabled){
                        sit.disabled = true;
                    }
                }
            }
            const sitSerial = sit.textContent;
            const ticketPrice = document.getElementById('ticketPrice');
            const price = parseInt(ticketPrice.innerText.split(' ')[0]);
            console.log(price)
            const busType = 'AC';
            const ticketPrintArea = document.getElementById('ticketPrintArea');
            const p = document.createElement('p');
            p.textContent = sitSerial + ' ' + busType + ' ' + price + ' taka';
            ticketPrintArea.appendChild(p);

            totalAmount += price;
            const totalBDT = document.getElementById('totalBDT');
            totalBDT.innerText = totalAmount;
            const singleBDT = document.getElementById('singleBDT');
            singleBDT.innerText = totalAmount;

            let ticketCount = ++sitClick;
            const selectedSit = document.getElementById('sitPlane');
            selectedSit.innerText = ticketCount;
            
            const totalTicketCount = 40;
            let output = totalTicketCount -ticketCount;
            const fourtysit = document.getElementById('fourtysit')
            fourtysit.innerText = output;


        }
    })
}