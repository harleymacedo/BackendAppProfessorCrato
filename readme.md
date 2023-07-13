<h1>SADO - Sistema de Apoio ao Docente - Módulo Backend</h1>

<h2>Um sistema para auxiliar atividades dos professores do IFCE Campus Crato. O sistema possui funcionalidades 
básicas ligadas à informações e professores, laboratórios e comissões de trabalho. Também possui o objetivo didático, servindo como 
sistema de exemplo para aulas de programação de aplicações web e mobile.
</h2>

<h3>Funcionalidades:</h3>

<table>
    <tr>
        <th>Endpoint</th> <th>Descrição</th>
    </tr>
    <tr>
        <td>/professor/todos</td> <td>Retorna a lista de todos os professores</td>
    </tr>
    <tr>
        <td>/professor/porNome/:nome</td> <td>Retorna uma lista com os professores que possuem o parâmetro (nome) como parte do conteúdo</td>
    </tr>
    <tr>
        <td>/professor/porId/:id</td> <td>Retorna um professor específico que possui o (id) informado</td>
    </tr>
    <tr>
        <td>/laboratorio/todos</td> <td>Retorna a lista de todos os laboratórios</td>
    </tr>
    <tr>
        <td>/laboratorio/porNome/:nome</td> <td>Retorna uma lista com os laboratórios que possuem o parâmetro (nome) como parte do conteúdo</td>
    </tr>
    <tr>
        <td>/laboratorio/porId/:id</td> <td>Retorna um laboratório específico que possui o (id) informado</td>
    </tr>
</table>

<h4>Desenvolvido por: Harley Macêdo de Mello</h4>