class Cliente {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}

var listaClientes = [];
var auxPosicao = '';

function cadastrar(objeto, lista) {
	lista.push(objeto);
}

function alterar(objeto, lista, posicao) {
	lista[posicao] = objeto;
}

function excluir(lista, posicao) {
	lista.splice(posicao, 1);
}

function listar(lista) {
	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
		auxHtml += '<tr>'+
		           '<td>'+ lista[i].nome +'</td>'+
		           '<td>'+ lista[i].idade +'</td>'+
		           '<td>'+
		           '<button class="btn btn-warning" rel="'+ i +'">A</button>'+
		           '</td>'+
		           '<td>'+
		           '<button class="btn btn-danger" rel="'+ i +'">X</button>'+
		           '</td>'+
		           '</tr>';
	}
	return auxHtml;
}
$(document).ready(() => {
	$('#btnSalvar').click(() => {
		let nome = $('#nome').val();
		let idade = $('#idade').val();
		
		if (nome != '' && idade != '' ) {
			let cliente = new Cliente(nome, idade);
			if (auxPosicao == '') {
				cadastrar(cliente, listaClientes);
			}
			
			else {
				alterar(cliente, listaClientes, auxPosicao);
				auxPosicao = '';
			}
			$('#tbTabela').html(listar(listaClientes));
			$('input').val('');
		} else {
			alert('Todos os dados são necessários!');
		}
	});

	$('#tbTabela').on('click', '.btn-warning', function() {
		//let posicaoAtual = $(this).attr('rel');
		auxPosicao = $(this).attr('rel');
		$('#nome').val(listaClientes[auxPosicao].nome);
		$('#idade').val(listaClientes[auxPosicao].idade);

	});

	$('#tbTabela').on('click', '.btn-danger', function() {
		let posicaoExcluir = $(this).attr('rel');
		if (confirm('Tem certeza que deseja excluir?')) {
			excluir(listaClientes, posicaoExcluir);
			$('#tbTabela').html(listar(listaClientes));
		}
	});

	$('#btnAjax').click(() => {
		$.ajax({
		  url: 'http://date.jsontest.com/',
		  method: 'GET'
		}).done(function(resposta) {
		  $('#retornoAjax').html(resposta.time);
		});		
	});

	$('#btnJson').click(() => {
		let jsonClientes = JSON.stringify(listaClientes);
		console.log(jsonClientes);
	});
});