import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs,getBlogLoader } from "../redux/slices/AllBlogsSlice";
import { AllBlogsWrapper } from "../StyledComponets/AllBlogsStyle";
import Loading from "../Components/Loader/Loading";
interface allBlogsType {
  id: React.Key;
  slug: string;
  url: string;
  content: string;
  title: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

const AllBlogsPage = () => {
  const dispatch = useDispatch();
  const allBlogs = useSelector(getAllBlogs);
  const isLoading = useSelector(getBlogLoader)

  useEffect(() => {
    dispatch({
      type: "GET_ALL_BLOGS_DATA",
    });
  }, []);

  return (
    <>
    {/* isLoading ? <Loading/> :<> </> */}
     <AllBlogsWrapper>
      <h1>All Blogs</h1>
       <div className="main">
        {allBlogs &&
          allBlogs.map((blog: allBlogsType) => (
            <div key={String(blog.id)}>
              <h2>{blog.slug}</h2>
              <img src={blog.image} alt={blog.slug} />
              <p>{blog.title}</p>
            </div>
          ))}
      </div>
    </AllBlogsWrapper>
    </>

  );
};

export default AllBlogsPage;
