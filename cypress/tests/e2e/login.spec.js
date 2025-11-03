import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
     loginPage.accessLoginPage()
     loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
     loginPage.checkAccessInvalid()
  });
});