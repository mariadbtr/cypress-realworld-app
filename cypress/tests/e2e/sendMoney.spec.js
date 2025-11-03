import SendMoney from "../../pages/sendMoney"; 
import LoginPage from "../../pages/loginPage"; 
import userData from '../../fixtures/userData.json'

const sendMoney = new SendMoney()
const loginPage = new LoginPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    sendMoney.newTransaction(userData.sendMoneySucess.amount, userData.sendMoneySucess.note)
    sendMoney.sucessTransation()
});
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    sendMoney.newTransaction(userData.sendMoneyFail.amount, userData.sendMoneyFail.note)
    
  });
});