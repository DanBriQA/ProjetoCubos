Feature: Realizar testes da Cubos

    Realizar teste de cadastro utilizando o BDD e automatizar com o Cypress

    Background: Comum em todos os cenários
        Given estou na página de cadastro

    Scenario: Fazer cadastro

        When submeto o meu cadastro completo
        Then aparece a mensagem cadastrado

    Scenario: Clicar em Voltar

        When Clico em voltar
        Then aparece a mensagem voltou!

    Scenario: Cadastro sem o nome
        When submeto o meu cadastro sem o nome
        Then aparece a mensagem "Nome eh obrigatorio"

    Scenario: Cadastro sem o sobrenome
        When submeto o meu cadastro sem o sobrenome
        Then aparece a mensagem "Sobrenome eh obrigatorio"

    Scenario: Cadastro sem o sexo
        When submeto o meu cadastro sem o sexo
        Then aparece a mensagem "Sexo eh obrigatorio"

    Scenario: Cadastrar a comida favorita
        When faço o cadastro até o campo Sexo
        And escolho as opções Carne e Vegetariano
        Then eu vejo a mensagem "Tem certeza que voce eh vegetariano?"

    Scenario: preenchimento tabela 
        When Preencho a tabela
        Then eu vejo a mensagem Francisco

