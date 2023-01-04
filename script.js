const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "7 jan 2023"// Data do Lançamento


function countDown(){
    const dataLancamento = new Date(lancamento)
    const hoje = new Date() //retorna a data atual

    const segTotal = (dataLancamento - hoje)/1000; //calcula segundos da data atual até a data de lançamento

    const finalDias = Math.floor(segTotal / 60 / 60 / 24) ; //retorna os dias
    const finalHoras = Math.floor((segTotal / 60 / 60) % 24); //retorna as horas
    const finalMinutos = Math.floor((segTotal / 60 ) % 60); //retorna os minutos
    const finalSegundos = Math.floor((segTotal) % 60);//retorna os segundos


    dia.innerHTML = formatoTempo(finalDias)+ "D";
    hora.innerHTML = formatoTempo(finalHoras) + "H";
    minuto.innerHTML = formatoTempo(finalMinutos) + "M";
    segundo.innerHTML = formatoTempo(finalSegundos)  + "S";
}

function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo; //acrescenta um zero lado esquerdo para numeros menores que 10
}


countDown();

setInterval(countDown, 1000)
