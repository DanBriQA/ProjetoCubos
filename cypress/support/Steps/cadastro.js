import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';


Given(/^estou na página de cadastro$/, () => {
    cy.visit("./toTest.html")

});

When(/^submeto o meu cadastro completo$/, () => {
    cy.get("input[id='elementosForm:nome']").type("Danilo")
    cy.get("input[id$=sobrenome]").type("Brito")
    cy.get("input[id='elementosForm:sexo:0']").click() 
    cy.get("input[id='elementosForm:comidaFavorita:0']").click()
    cy.get("select[id$=escolaridade]").select("superior")
    cy.get("select[id='elementosForm:esportes']").select("futebol")
    cy.get("textarea[id='elementosForm:sugestoes']").type("Vôlei e Basquete")
    cy.get("input[id$=cadastrar]").click();

});

Then(/^aparece a mensagem cadastrado$/, () => {
    cy.get("div[id=resultado]").contains("Cadastrado!")
	
});


When(/^Clico em voltar$/, () => {
	cy.get("a[onclick*=voltou]").click()
});

Then(/^aparece a mensagem voltou!$/, () => {
	cy.get("div[id=resultado]").contains("Voltou!")
});



When(/^submeto o meu cadastro sem o nome$/, () => {
    cy.get("input[id$=sobrenome]").type("Brito")
    cy.get("input[id='elementosForm:sexo:0']").click()
    cy.get("input[id$=cadastrar]").click();
 
});

Then(/^aparece a mensagem "([^"]*)"$/, (mensagem_nome) => {
	console.log(mensagem_nome);
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get("input[id$=cadastrar]").click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(mensagem_nome)      
      })
});

When(/^submeto o meu cadastro sem o sobrenome$/, () => {
	cy.get("input[id='elementosForm:nome']").type("Danilo")
    cy.get("input[id='elementosForm:sexo:0']").click()
    cy.get("input[id$=cadastrar]").click()
});

Then(/^aparece a mensagem "([^"]*)"$/, (mensagem_sobrenome) => {
    console.log(mensagem_sobrenome);
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get("input[id$=cadastrar]").click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(mensagem_sobrenome)      
        })     
});


When(/^submeto o meu cadastro sem o sexo$/, () => {
	cy.get("input[id='elementosForm:nome']").type("Danilo")
    cy.get("input[id$=sobrenome]").type("Brito")
    cy.get("input[id$=cadastrar]").click()
});

Then(/^aparece a mensagem "([^"]*)"$/, (sexo) => {
	console.log(sexo);
	const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get("input[id$=cadastrar]").click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(sexo)      
        }) 
});



When(/^faço o cadastro até o campo Sexo$/, () => {
	cy.get("input[id='elementosForm:nome']").type("Danilo")
    cy.get("input[id$=sobrenome]").type("Brito")
    cy.get("input[id='elementosForm:sexo:0']").click() 
});


When(/^escolho as opções Carne e Vegetariano$/, () => {
    cy.get("input[id='elementosForm:comidaFavorita:0']").click()
    cy.get("input[id='elementosForm:comidaFavorita:3']").click()
    cy.get("input[id$=cadastrar]").click()
});

Then(/^eu vejo a mensagem "([^"]*)"$/, (comida) => {
	console.log(comida);
    const stub = cy.stub()  
    cy.on('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(comida)      
      })
});


When(/^Preencho a tabela$/, () => {
    cy.get(":nth-child(2) > :nth-child(1) > :nth-child(4) > input").click()
    cy.get(":nth-child(1) > :nth-child(5) > table > tbody > tr > td > input").click()
    cy.get("table > :nth-child(2) > :nth-child(1) > :nth-child(6) > input").type("Thank You")
    cy.get("input[onclick*=Francisco]").click()
});


Then(/^eu vejo a mensagem Francisco$/, () => {
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get("input[onclick*=Francisco]").click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Francisco')      
      })
});

