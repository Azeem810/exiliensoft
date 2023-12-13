import { takeLatest, all, call, put,select } from 'redux-saga/effects';
import { setAllBlogs,setBlogLoader,getAllBlogs } from '../slices/AllBlogsSlice';
import {
  httpCall,
  GET_ALL_BLOGS
} from '../../utils/api/api';

import { toast } from 'react-toastify';
export function* getAllBlogsData(): Generator<any>{
    yield put(setBlogLoader(true));
    const cachedResponse:any = yield select(getAllBlogs);

    if(cachedResponse?.length > 0){
      yield put(setBlogLoader(false));
      yield put(setAllBlogs(cachedResponse));
    }else{
    try{
        const allBlogsResponse:any = yield call(httpCall, {
          url:`${GET_ALL_BLOGS}`,
          method: "GET",
          headers:{
            "Content-Type": "application/json",
          }
        });
        if(allBlogsResponse.success){
            yield put(setAllBlogs(allBlogsResponse?.data));
            yield put(setBlogLoader(false));

        }else{
           
            toast.error('Something went wrong', {
              closeOnClick: true,
              draggable: true,
  
          });
          console.log(`Error : ${allBlogsResponse?.err?.data}`)
          if(allBlogsResponse?.err?.status == 401){
            // err?.response?.status
            console.log('Error',allBlogsResponse?.err?.statusText)
            window.location.reload();
        }
          
            yield put(setBlogLoader(false));
        }
    }catch (err){
        console.log("Catch Error", err);
        yield put(setBlogLoader(false));

    }
  }
}

export function* watchAllBlogsSaga() {
  yield takeLatest('GET_ALL_BLOGS_DATA', getAllBlogsData);
}

export default function* AllBlogsSaga() {
  yield all([watchAllBlogsSaga()]);
}
