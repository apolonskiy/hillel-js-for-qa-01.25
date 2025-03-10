import { Account } from "../endpoints";
import { faker } from '@faker-js/faker';

const account = new Account('https://demoqa.com');
const userObject = {}
let userId;

describe('Account endpoints tests', () => {
  beforeEach(async () => {
    userObject.userName = faker.internet.username();
    userObject.password = 'TestPass1!';
    const response = await account.createUser(userObject);
    userId = response.data.userID;
    await account.generateToken(userObject);
  })

  test('GET: Is user authorised should succeed with valid credentials', async() => {
    const resp = await account.isAuthorised(userObject);
    expect(resp.status).toBe(200);
    expect(resp.data).toBe(true);
  })

  test('GET: Is user authorised should fail with invalid creds', async() => {
    const invalidCreds = {...userObject, password: 'invalid'}
    const resp = await account.isAuthorised(invalidCreds);
    expect(resp.status).toBe(404);
    expect(resp.data.message).toBe('User not found!');
  })

  test('DELETE: Cann delete existing user', async() => {
    const resp = await account.deleteUser(userId);
    expect(resp.status).toBe(204);

    const respGet = await account.getUser(userId);
    expect(respGet.status).toBe(401);
    expect(respGet.data.message).toBe('User not found!')
  })

})