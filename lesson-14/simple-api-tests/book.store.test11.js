import axios from 'axios';
let axiosInstance;
// let bookIsbn;
const userId = '2532876c-188b-416f-8e68-a4439b5db706'
describe('Book store simple tests', () => {
  beforeAll(async () => {
    const resp = await axios.post('https://demoqa.com/Account/v1/GenerateToken', 
      { userName: 'andrii_1', password: 'TestPass1!'}); 
    axiosInstance = axios.create({
      baseURL: 'https://demoqa.com/',
      validateStatus: function () {
        return true;
      },
      headers: {
        Authorization: `Bearer ${resp.data.token}`
      }
    }); 
  });

  afterEach(async() => {
    const userData = await axiosInstance.get(`/Account/v1/User/${userId}`)
    for await(const {isbn} of userData?.data?.books || []){
      await axiosInstance.delete(`/BookStore/v1/Book`, {data: {
        isbn,
        userId
      }})
    }
  })

  test('GET: User can get all boks', async () => {
    const respGetBooks = await axiosInstance.get('BookStore/v1/Books');
    expect(respGetBooks.status).toBe(200);
    // bookIsbn = respGetBooks.data.books[5].isbn // NEVER RELY ON OTHER TEST
    for await(const {isbn, title, subTitle, author} of respGetBooks.data.books){
      expect(isbn).toBeDefined()
      expect(typeof isbn).toBe('string');
      expect(title).toBeDefined()
      expect(typeof title).toBe('string');
      expect(subTitle).toBeDefined()
      expect(typeof subTitle).toBe('string');
      expect(author).toBeDefined()
      expect(typeof author).toBe('string');
    }
  })

  test('POST: User can ad book to his profile', async () => {
    const respGetBooks = await axiosInstance.get('BookStore/v1/Books');
    expect(respGetBooks.status).toBe(200);
    const respPostUserBooks = await axiosInstance.post(`BookStore/v1/Books`, 
      {
        userId,
        collectionOfIsbns: [
          {
            isbn: respGetBooks.data.books[6].isbn
          }
        ]            
      }
    );
    console.log(respPostUserBooks.data)
    expect(respPostUserBooks.status).toBe(201);
    expect(respPostUserBooks.data.books[0].isbn).toBe(respGetBooks.data.books[6].isbn);
    
  })
})