const currency_one = document.querySelector("#currency-one");
        const currency_two = document.querySelector("#currency-two");
        const amount_one = document.querySelector("#amount-one");
        const amount_two = document.querySelector("#amount-two");
        const rate = document.querySelector("#rate");
        const swap = document.querySelector("#swap");

        function calculate() {
            const currencyElement_one = currency_one.value;
            const currencyElement_two = currency_two.value;

            fetch(`https://api.exchangerate-api.com/v4/latest/${currencyElement_one}`)
                .then((res) => res.json())
                .then((data) => {
                    const exchangeRate = data.rates[currencyElement_two];
                    amount_two.value = (amount_one.value * exchangeRate).toFixed(2);
                    rate.innerText = `1 ${currencyElement_one} = ${exchangeRate} ${currencyElement_two}`;
                });
        }

        swap.addEventListener("click", () => {
            const temp = currency_one.value;
            currency_one.value = currency_two.value;
            currency_two.value = temp;
            calculate();
        });

        currency_one.addEventListener("change", calculate);
        amount_one.addEventListener("input", calculate);
        currency_two.addEventListener("change", calculate);
        amount_two.addEventListener("input", calculate);

        calculate();