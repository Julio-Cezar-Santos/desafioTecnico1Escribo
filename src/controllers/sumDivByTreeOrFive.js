const sumDivByThreeOrFive = (req, res) => {
    try {
        const num = Number(req.params.number);
        console.log(typeof (num))
        if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
            return res.status(400).json({ mesagem: 'Por favor, insira um número inteiro maior que zero.' })
        }

        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

        return res.status(200).json(`O Somatório de todos os valores inteiros divisíveis por 3 ou 5 é: ${sum}.`);
    } catch (error) {
        return res.status(500).json({ mesagem: error.message });
    }
};

module.exports = sumDivByThreeOrFive