import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { ProdutoController } from './src/controller/ProdutoController';
import { CD } from './src/model/CD';
import { Vinil } from './src/model/Vinil';

export function main() {
    let opcao, id, tipo, preco: number;
    let nome, tipoCapa, tipoMaterial: string;
    let tipoProduto = ['CD', 'Vinil'];

    // Instanciar um Objeto da Classe ProdutoController
    const produtoController = new ProdutoController();

    // Objetos de Teste
    produtoController.cadastrar(
        new CD(
            produtoController.gerarId(),
            'Iron Maiden',
            1,
            40.00,
            "Caixa Simples"
        )
    );
    produtoController.cadastrar(
        new Vinil(
            produtoController.gerarId(),
            'Killers',
            2,
            50.00,
            "Vinil Preto Clássico"
        )
    );
    produtoController.cadastrar(
        new Vinil(
            produtoController.gerarId(),
            'The Number of the Beast',
            2,
            90.00,
            "Vinil Transparente"
        )
    );
    produtoController.cadastrar(
        new CD(
            produtoController.gerarId(),
            'Piece of Mind',
            1,
            65.00,
            "Capa Digipack"
        )
    );

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "******************************************************");
        console.log("                                                      ");
        console.log("                     Iron Brasil                      ");
        console.log("        O melhor do Iron Maiden ao seu dispor         ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("         Bem-Vindos ao E-Commerce Iron Brasil         ");
        console.log("                                                      ");
        console.log("         Por favor, escolha a opção desejada:         ");
        console.log("                                                      ");
        console.log("          1 - Listar todos os Produtos                ");
        console.log("          2 - Listar Produto pelo ID                  ");
        console.log("          3 - Cadastrar Produto                       ");
        console.log("          4 - Atualizar Produto                       ");
        console.log("          5 - Deletar Produto                         ");
        console.log("          6 - Sair                                    ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nIron Brasil - O melhor do Iron Maiden ao seu dispor \n**** Up the Irons! ****");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nListar todos os Produtos\n\n',
                    colors.reset
                );
                produtoController.listarTodas();
                keyPress();
                break;
            case 2:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nConsultar dados do Produto - por Id\n\n',
                    colors.reset
                );

                id = readlinesync.questionInt('Digite o Id: ');
                produtoController.procurarPorId(id);

                keyPress();
                break;
            case 3:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nCriar Produto\n\n',
                    colors.reset
                );

                nome = readlinesync.question('Digite o Nome do Produto: ');

                // Seleção do tipo de produto: CD ou Vinil
                tipo = readlinesync.keyInSelect(tipoProduto, '', {
                    cancel: false,
                }) + 1;

                preco = readlinesync.questionFloat('Digite o preço: ');

                if (tipo === 1) {  // Se o tipo for CD
                    // Laço para garantir que o usuário escolha um tipo de capa válido
                    let tipoCapa: string = '';
                    while (true) {
                        console.log('\nEscolha o tipo de capa do CD:');
                        console.log('1 - Caixa Simples');
                        console.log('2 - Caixa Digipack');
                        console.log('3 - Edição Especial');
                        
                        let tipoCapaIndex = readlinesync.questionInt('Digite 1, 2 ou 3 para o tipo da capa: ');

                        // Verifica se a opção digitada é válida
                        if (tipoCapaIndex === 1 || tipoCapaIndex === 2 || tipoCapaIndex === 3) {
                            // Atribui o tipo de capa de acordo com a escolha
                            tipoCapa = tipoCapaIndex === 1 ? 'Caixa Simples' : tipoCapaIndex === 2 ? 'Caixa Digipack' : 'Edição Especial';
                            break;  // Sai do laço, pois a escolha foi válida
                        } else {
                            console.log('Opção inválida! Tente novamente.');
                        }
                    }

                    // Cadastro do CD com a capa escolhida
                    produtoController.cadastrar(
                        new CD(
                            produtoController.gerarId(),
                            nome,
                            tipo,
                            preco,
                            tipoCapa
                        )
                    );
                } else if (tipo === 2) {  // Se o tipo for Vinil
                    // Laço para garantir que o usuário escolha um tipo de material válido
                    let tipoMaterial: string = '';
                    while (true) {
                        console.log('\nEscolha o tipo de material do Vinil:');
                        console.log('1 - Vinil Colorido');
                        console.log('2 - Vinil Transparente');
                        console.log('3 - Vinil Preto Clássico');

                        let tipoMaterialOption = readlinesync.questionInt('Digite 1, 2 ou 3 para o tipo de material: ');

                        // Verifica se a opção digitada é válida
                        if (tipoMaterialOption === 1 || tipoMaterialOption === 2 || tipoMaterialOption === 3) {
                            // Atribui o tipo de material de acordo com a escolha
                            tipoMaterial = tipoMaterialOption === 1 ? 'Vinil Colorido' : tipoMaterialOption === 2 ? 'Vinil Transparente' : 'Vinil Preto Clássico';
                            break;  // Sai do laço, pois a escolha foi válida
                        } else {
                            console.log('Opção inválida! Tente novamente.');
                        }
                    }

                    // Cadastro do Vinil com o material escolhido
                    produtoController.cadastrar(
                        new Vinil(
                            produtoController.gerarId(),
                            nome,
                            tipo,
                            preco,
                            tipoMaterial
                        )
                    );
                }

                keyPress();
                break;
            case 4:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nAtualizar dados do Produto\n\n',
                    colors.reset
                );

                id = readlinesync.questionInt('Digite o Id do Produto: ');

                // Verifica se o Produto existe
                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {
                    nome = readlinesync.question('Digite o Nome do Produto: ');

                    tipo = produto.tipo;

                    preco = readlinesync.questionFloat('Digite o preço: ');

                    switch (tipo) {
                        case 1:
                            tipoCapa = readlinesync.question(
                                'Digite o Tipo de capa do CD: '
                            );

                            produtoController.atualizar(
                                new CD(id, nome, tipo, preco, tipoCapa)
                            );
                            break;
                        case 2:
                            tipoMaterial = readlinesync.question(
                                'Digite o Material do Vinil: '
                            );

                            produtoController.atualizar(
                                new Vinil(id, nome, tipo, preco, tipoMaterial)
                            );
                            break;
                    }
                } else console.log('Produto não Encontrado!');

                keyPress();
                break;
            case 5:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nApagar um Produto\n\n',
                    colors.reset
                );

                id = readlinesync.questionInt('Digite o Id: ');
                produtoController.deletar(id);

                keyPress();
                break;
            default:
                console.log(
                    colors.fg.whitestrong,
                    '\nOpção Inválida!\n',
                    colors.reset
                );

                keyPress();
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jonas Gomes");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/JunoPrice");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
