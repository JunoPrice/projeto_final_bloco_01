import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

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
        console.log("                                                      ", 
        colors.reset);

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
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todos os Produtos da loja\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nLista de Produtos pelo ID\n\n", colors.reset);
                    
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar Produto\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jonas");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();