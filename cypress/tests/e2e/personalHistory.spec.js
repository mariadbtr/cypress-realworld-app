import PersonalHistory from "../../pages/personalHistory";  
import LoginPage from "../../pages/loginPage";
import userData from '../../fixtures/userData.json'
import SignUpPage from "../../pages/signUpPage";

const loginPage = new LoginPage()
const personalHistory = new PersonalHistory()
const signUpPage = new SignUpPage()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    personalHistory.viewHistory()
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password)
    personalHistory.viewHistory()
    personalHistory.emptyHistory()
  });
});