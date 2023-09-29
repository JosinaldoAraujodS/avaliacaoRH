function NomeEmail() {
    let selecionados = document.querySelectorAll("form :checked");
    let totalSelecionado = selecionados.length;
    let inputs = document.querySelectorAll('div>input')

    if (inputs[0].value.length < 4 && inputs[1].value.length < 4 && inputs[2].value.length < 4 && inputs[3].value.length < 4) {
        alert('Os campos nome, telefone, vaga e empresa são obrigatórios!')
        inputs[0].focus()
    } else if (inputs[0].value.length < 4) {
        alert('O campo nome é obrigatório!')
        inputs[0].focus()
    } else if (inputs[1].value.length < 4) {
        alert('O campo telefone é obrigatório!')
        inputs[1].focus()
    } else if (inputs[2].value.length < 4) {
        alert('O campo vaga é obrigatório!')
        inputs[2].focus()
    } else if (inputs[3].value.length < 4) {
        alert('O campo empresa é obrigatório!')
        inputs[3].focus()
    } else if (totalSelecionado < 25) {
        alert(`${25 - totalSelecionado} Perguntas sem resposta!`)
        alert('Responda todas as questões para concluir o envio das respostas!')
        // alert(selecionados[1].value)
    } else {
        alert('Respostas geradas!')
        // alert(totalSelecionado)

        let a = i = o = c = 0
        for (let j = 0; j < selecionados.length; j++) {
            if (selecionados[j].value == `${j + 1}a`) {
                a += 1
            } else if (selecionados[j].value == `${j + 1}i`) {
                i += 1
            } else if (selecionados[j].value == `${j + 1}o`) {
                o += 1
            } else if (selecionados[j].value == `${j + 1}c`) {
                c += 1
            }
        }

        // alert(`respostas A(${a})respostas I(${i})respostas O(${o})respostas C(${c})`)
        // gerarPdf()
        //INSTANCIAR O JSPDF
        var doc = new jsPDF();
        // var vlrh1 = document.querySelector('h1')

        // doc.text(vlrh1.innerText, 10, 10);
        doc.text(`\nCandidato: ${inputs[0].value}\nTelefone:   ${inputs[1].value}\nVaga:         ${inputs[2].value}\nEmpresa:   ${inputs[3].value}\n\n\n
              ${a} respostas A = ${a * 4}%\n
              ${i} respostas I = ${i * 4}%\n
              ${o} respostas O = ${o * 4}%\n
              ${c} respostas C = ${c * 4}%\n\n
              
        DIREITO (I + C) = ${(i * 4) + (c * 4)}%                   ANTERIOR (O + I) = ${(o * 4) + (i * 4)}%\n
        ESQUERDO (O + A) = ${(o * 4) + (a * 4)}%           POSTERIOR (C + A) = ${(c * 4) + (a * 4)}%`, 10, 10);
        doc.save(`${inputs[0].value}.pdf`);

        document.querySelector('form').reset();
    }

}

// function gerarPdf() {
//     //INSTANCIAR O JSPDF
//     var doc = new jsPDF();
//     // var vlrh1 = document.querySelector('h1')

//     // doc.text(vlrh1.innerText, 10, 10);
//     doc.text(`respostas A(${a})\n
//               respostas I(${i})\n
//               respostas O(${o})\n
//               respostas C(${c})`, 10, 10);
//     doc.save('a4.pdf');
// }

// function contarAIOC() {
//     let selecionados = document.querySelectorAll("form :checked");
//     let a, i, o, c
//     for (let j = 0; j < selecionados.length; j++) {
//         if (selecionados[j].value == `${j + 1}a`) {
//             a += 1
//         } else if (selecionados[j].value == `${j + 1}i`) {
//             i += 1
//         } else if (selecionados[j].value == `${j + 1}o`) {
//             o += 1
//         } else if (selecionados[j].value == `${j + 1}c`) {
//             c += 1
//         }
//     }

// }
// function verificarSelecionados() {

//     let selecionados = document.querySelectorAll("form :checked");
//     let totalSelecionado = selecionados.length;
//     const valoresSelecionados = []
//     selecionados.forEach(item => {
//         console.log(item.value);
//         valoresSelecionados.push({
//             campo: item.name,
//             valor: item.value
//         })
//     })

//     console.table(valoresSelecionados);

// }