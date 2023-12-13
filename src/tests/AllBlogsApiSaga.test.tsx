import AllBlogsSaga,{getAllBlogsData} from '../redux/sagas/AllBlogsSaga';
import { runSaga } from 'redux-saga';
import { takeLatest,all } from 'redux-saga/effects';
import * as api from '../utils/api/api';
import { httpCall } from '../utils/api/api';
import { allBlogsDummyData } from './DummyData/MockApiData';

jest.mock('axios');

describe("Test to All Blogs Api Call ", () => {

    test('test to check config', ()=>{
        let config = {
            headers:{"Content-Type": "application/json"},
            method:'GET',
            url: 'https://jsonplaceholder.org/posts',
        }
        expect(httpCall(config));
    });
   
    test("Check Response of All Blogs Api", async()=>{
     const dispatchedActions: any=[];
     const mockResponse = {
        success :true,
        data:allBlogsDummyData,
     }

     const mockApiCall = jest.spyOn(api, 'httpCall').mockImplementation(()=> Promise.resolve(mockResponse));
     const dummyStore = {
        dispatch: (action:any) => dispatchedActions.push(action),
        getState: ()=> ({}),
     };

     await runSaga(dummyStore, getAllBlogsData).toPromise();
     expect(mockApiCall)


    });
    
  });