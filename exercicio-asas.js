//Em resposta à crise econômica, a companhia aérea "Asas" está
//implementando uma nova estratégia para aumentar a receita, 
//oferecendo voos domésticos e internacionais. A companhia 
//aérea tem diferentes estruturas de preços para diferentes 
//regiões e classes de voo.

let regiao = "Ásia"; //Essa let representa o destino do vôo
let classe = "Econômica"; // Essa let representa o tipo de classe da passagem
let criancaECO = 2; // Quantidade de crianças com passagem econômica
let criancaEXE = 3; // Quantidade de crianças com passagem executiva
let adultoECO = 4; // Quantidade de adultos com passagem econômica
let adultoEXE = 6; // Quantidade de adultos com passagem econômica

if (regiao === "Norte" && classe === "Econômica"){ //Representa o que aparecerá se o vôo for para o Norte, com passagem econômica
        console.log(`----- Dados do Pacote -----`);
        console.log(``)
        console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
        console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
        console.log(`A quantidade de passageiros adultos é: ${adultoECO}`); //Mostra a quantidade de passageiros adultos
        console.log(`A quantidade de passageiros infantis é: ${criancaECO}`); //Mostra a quantidade de passageiros infantis
        console.log(`O custo total da viagem é R$ ${(criancaECO * 2500.00) + (adultoECO * 1800.00)}`); //Mostra o custo total que o cliente irá pagar em passagens
        console.log(`---------------`);
}
else if (regiao === "Norte" && classe === "Executiva"){ //Representa o que aparecerá se o vôo for para o Norte, com passagem executiva
    console.log(`----- Dados do Pacote -----`);
    console.log(``);
    console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
    console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
    console.log(`A quantidade de passageiros adultos é: ${adultoEXE}`); //Mostra a quantidade de passageiros adultos
    console.log(`A quantidade de passageiros infantis é: ${criancaEXE}`); //Mostra a quantidade de passageiros infantis
    console.log(`O custo total da viagem é R$ ${(criancaEXE * (2500.00 + ((2500.00 / 100)* 2)) + (adultoEXE * (1800.00 + (1800.00 / 100))))}`);  //Mostra o custo total que o cliente irá pagar em passagens
    console.log(`---------------`);
}
 else if (regiao === "Sul" && classe === "Econômica"){ //Representa o que aparecerá se o vôo for para o Sul, com passagem econômica
    console.log(`----- Dados do Pacote -----`);
    console.log(``)
    console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
    console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
    console.log(`A quantidade de passageiros adultos é: ${adultoECO}`); //Mostra a quantidade de passageiros adultos
    console.log(`A quantidade de passageiros infantis é: ${criancaECO}`); //Mostra a quantidade de passageiros infantis
    console.log(`O custo total da viagem é R$ ${(criancaECO * 3000.00) + (adultoECO * 3000.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
    console.log(`---------------`);
}
else if (regiao === "Sul" && classe === "Executiva"){ //Representa o que aparecerá se o vôo for para o Sul, com passagem executiva
console.log(`----- Dados do Pacote -----`);
console.log(``);
console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
console.log(`A quantidade de passageiros adultos é: ${adultoEXE}`); //Mostra a quantidade de passageiros adultos
console.log(`A quantidade de passageiros infantis é: ${criancaEXE}`); //Mostra a quantidade de passageiros infantis
console.log(`O custo total da viagem é R$ ${(criancaEXE * 4000.00) + (adultoEXE * 4000.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
console.log(`---------------`);
}
else if (regiao === "África" && classe === "Econômica"){ //Representa o que aparecerá se o vôo for para a África, com passagem econômica
    console.log(`----- Dados do Pacote -----`);
    console.log(``)
    console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
    console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
    console.log(`A quantidade de passageiros adultos é: ${adultoECO}`); //Mostra a quantidade de passageiros adultos
    console.log(`A quantidade de passageiros infantis é: ${criancaECO}`); //Mostra a quantidade de passageiros infantis
    console.log(`O custo total da viagem é R$ ${(criancaECO * 4200.00) + (adultoECO * 4200.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
    console.log(`---------------`);
}
else if (regiao === "África" && classe === "Executiva"){ //Representa o que aparecerá se o vôo for para a África, com passagem executiva
console.log(`----- Dados do Pacote -----`);
console.log(``);
console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
console.log(`A quantidade de passageiros adultos é: ${adultoEXE}`); //Mostra a quantidade de passageiros adultos
console.log(`A quantidade de passageiros infantis é: ${criancaEXE}`); //Mostra a quantidade de passageiros infantis
console.log(`O custo total da viagem é R$ ${(criancaEXE * 6900.00) + (adultoEXE * 6900.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
console.log(`---------------`);
}
else if (regiao === "Ásia" && classe === "Econômica"){ //Representa o que aparecerá se o vôo for para a Ásia, com passagem econômica
    console.log(`----- Dados do Pacote -----`);
    console.log(``)
    console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
    console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
    console.log(`A quantidade de passageiros adultos é: ${adultoECO}`); //Mostra a quantidade de passageiros adultos
    console.log(`A quantidade de passageiros infantis é: ${criancaECO}`); //Mostra a quantidade de passageiros infantis
    console.log(`O custo total da viagem é R$ ${(criancaECO * 4600.00) + (adultoECO * 4600.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
    console.log(`---------------`);
}
else if (regiao === "Ásia" && classe === "Executiva"){ //Representa o que aparecerá se o vôo for para a Ásia, com passagem executiva
console.log(`----- Dados do Pacote -----`);
console.log(``);
console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
console.log(`A quantidade de passageiros adultos é: ${adultoEXE}`); //Mostra a quantidade de passageiros adultos
console.log(`A quantidade de passageiros infantis é: ${criancaEXE}`); //Mostra a quantidade de passageiros infantis
console.log(`O custo total da viagem é R$ ${(criancaEXE * 6000.00) + (adultoEXE * 6000.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
console.log(`---------------`);
}
else if (regiao === "Europa" && classe === "Econômica"){ //Representa o que aparecerá se o vôo for para a Europa, com passagem econômica
    console.log(`----- Dados do Pacote -----`);
    console.log(``)
    console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
    console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
    console.log(`A quantidade de passageiros adultos é: ${adultoECO}`); //Mostra a quantidade de passageiros adultos
    console.log(`A quantidade de passageiros infantis é: ${criancaECO}`); //Mostra a quantidade de passageiros infantis
    console.log(`O custo total da viagem é R$ ${(criancaECO * 5800.00) + (adultoECO * 5800.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
    console.log(`---------------`);
}
else if (regiao === "Europa" && classe === "Executiva"){ //Representa o que aparecerá se o vôo for para a Europa, com passagem executiva
console.log(`----- Dados do Pacote -----`);
console.log(``);
console.log(`O destino do vôo é: ${regiao}`); //Mostra o destino, de acordo com  a equivalência da variável
console.log(`A classe selecionada é: ${classe}`); //Mostra a classe selecionada para o vôo
console.log(`A quantidade de passageiros adultos é: ${adultoEXE}`); //Mostra a quantidade de passageiros adultos
console.log(`A quantidade de passageiros infantis é: ${criancaEXE}`); //Mostra a quantidade de passageiros infantis
console.log(`O custo total da viagem é R$ ${(criancaEXE * 7300.00) + (adultoEXE * 7300.00)}`);  //Mostra o custo total que o cliente irá pagar em passagens
console.log(`---------------`);
}
