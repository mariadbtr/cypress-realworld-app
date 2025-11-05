import { sign } from 'crypto';
import userData from '../../fixtures/userData.json'
import SignUpPage from '../../pages/signUpPage'
import LoginPage from "../../pages/loginPage";

const signUpPage = new SignUpPage()
const loginPage = new LoginPage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.acessSignUpPage()
    signUpPage.signUpPage(userData.signUpSucess.firstName, userData.signUpSucess.lastName, userData.signUpSucess.username, userData.signUpSucess.password, userData.signUpSucess.confirmPassword)
    signUpPage.signUpButtom()
    loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password)
    signUpPage.firstLogin(userData.bankAccount.bankName, userData.bankAccount.routingNumber, userData.bankAccount.accountingNumber)

  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    signUpPage.acessSignUpPage()
    signUpPage.signUpPage(userData.signUpFail.firstName, userData.signUpFail.lastName, userData.signUpFail.username, userData.signUpFail.password, userData.signUpFail.confirmPassword)      
    signUpPage.acessInvalid()
  });
});