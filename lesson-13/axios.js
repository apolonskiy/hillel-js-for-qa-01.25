import axios from 'axios';

// let userToken;

// beforeEach(async () => {
//     const resp = await axios.post('https://demoqa.com/Account/v1/GenerateToken', 
//             { userName: 'andrii_1', password: 'TestPass1!'});
//     userToken = resp.data.token;
// })

// it();

// const callAxios = async () => {
//     const resp = await axios.post('https://demoqa.com/Account/v1/GenerateToken', 
//             { userName: 'andrii_1', password: 'TestPass1!'});
//     // console.log(resp.data);
    
//     const respGetBooks = await axios.get('https://demoqa.com/BookStore/v1/Books', 
//         { 
//             headers: {
//                 Authorization: `Bearer ${resp.data.token}`
//             }
//         }
//     );
//     // console.log(respGetBooks.data);

//     const userId = '2532876c-188b-416f-8e68-a4439b5db706'

//     const respPutUserBooks = await axios.post(`https://demoqa.com/BookStore/v1/Books`, 
//         {
//             userId,
//             collectionOfIsbns: [
//                 {
//                     isbn: respGetBooks.data.books[3].isbn
//                 }
//             ]            
//         },
//         { 
//             headers: {
//                 Authorization: `Bearer ${resp.data.token}`
//             },
//              validateStatus: function (status) {
//                 return true;
//             }
//         }
//     );

//     console.log(respPutUserBooks.data);

//     const respGetUserBooks = await axios.get(`https://demoqa.com/Account/v1/User/${userId}`, 
//         { 
//              validateStatus: function (status) {
//                 return true;
//             },
//             // headers: {
//             //     Authorization: `Bearer ${resp.data.token}`
//             // }
//             auth: {
//                 username: 'andrii_1',
//                 password: 'TestPass1!'
//             }
//         }
//     );

//     console.log(respGetUserBooks.config);     
// }

// callAxios()


const callAxiosInstance = async () => {
    const resp = await axios.post('https://demoqa.com/Account/v1/GenerateToken', 
            { userName: 'andrii_1', password: 'TestPass1!'});  

        const axiosInstance = axios.create({
            baseURL: 'https://demoqa.com/',
            validateStatus: function () {
                return true;
            },
            headers: {
                Authorization: `Bearer ${resp.data.token}`
            }
        }); 

        const respGetBooks = await axiosInstance.get('BookStore/v1/Books');
        const userId = '2532876c-188b-416f-8e68-a4439b5db706'

        const respPutUserBooks = await axiosInstance.post(`BookStore/v1/Books`, 
        {
            userId,
            collectionOfIsbns: [
                {
                    isbn: respGetBooks.data.books[3].isbn
                }
            ]            
        }
         );

        console.log(respPutUserBooks.data);

        const respGetUserBooks = await axiosInstance.get(`Account/v1/User/${userId}`);

        console.log(respGetUserBooks.data);   


}

callAxiosInstance();