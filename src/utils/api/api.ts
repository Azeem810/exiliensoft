import axios from 'axios';

export const httpCall:any = async( config:{headers:any;}) => {
  let headerConfig;
  if (config?.headers) {
    headerConfig = {
      ...config,
      headers: {
        ...config.headers,
        'Cache-Control': 'no-store,no-cache,',
        Pragma: 'no-cache',
      },
    };
  } else {
    headerConfig = {
      ...config,
      headers: {
        'Cache-Control': 'no-store,no-cache,',
        Pragma: 'no-cache',
      },
    };
  }
  try {
    const response:any = await axios(headerConfig);
    return {
      success: true,
      data: response.data,
      ...response,
    };
  } catch (err:any) {
    console.log(err);

    return { success: false, err: err.response };
    // }
  }
};

// apis

export const GET_ALL_BLOGS = 'https://jsonplaceholder.org/posts';

