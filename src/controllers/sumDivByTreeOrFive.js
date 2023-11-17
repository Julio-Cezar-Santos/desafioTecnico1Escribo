const sumDivByThreeOrFive = (req, res) => {
    const number = Number(req.params.number);
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return res.status(200).json(`O Somatório de todos os valores inteiros divisíveis por 3 ou 5 é: ${sum}.`);
};

module.exports = sumDivByThreeOrFive