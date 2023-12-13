import { useNavigate } from "react-router-dom";
import { BlogsWrapper } from "../../StyledComponets/BlogsStyle";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import next from "../../assets/images/next.png";
interface BlogsDataType {
  image: string;
  title: string;
  content?: string;
}
const Blogs = () => {
  const navigate = useNavigate();
  const handleAllPost = () => {
    navigate("/allposts");
  };
  return (
    <BlogsWrapper>
      <div className="main-container">
        <h6>Our Blogs</h6>
        <div className="card-container">
          <div>
            <img src={blog1} alt={"blog 1 image"} className="image-style" />
            <div className="card-text">
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#0F0049",
                  marginBottom: "20px",
                }}
              >
                Realtime analytics
              </p>
              <p>
                “The results have been incredible. With Power Digital, it feels
                like they’re in our trench, supporting and understanding us.
                They’re like a partner and mentor in helping us get where we
                want to be. “The results have been incredible.
              </p>
              <img src={next} alt=" next image" className="next-image-style" />
            </div>
          </div>
          <div>
            <img src={blog2} alt={"blog 1 image"} className="image-style" />
            <div className="card-text">
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#0F0049",
                  marginBottom: "20px",
                }}
              >
                Realtime analytics
              </p>
              <p>
                “The results have been incredible. With Power Digital, it feels
                like they’re in our trench, supporting and understanding us.
                They’re like a partner and mentor in helping us get where we
                want to be. “The results have been incredible.
              </p>
              <img src={next} alt=" next image" className="next-image-style" />
            </div>
          </div>
          <div>
            <img src={blog3} alt={"blog 1 image"} className="image-style" />
            <div className="card-text">
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#0F0049",
                  marginBottom: "20px",
                }}
              >
                Realtime analytics
              </p>
              <p>
                “The results have been incredible. With Power Digital, it feels
                like they’re in our trench, supporting and understanding us.
                They’re like a partner and mentor in helping us get where we
                want to be. “The results have been incredible.
              </p>
              <img src={next} alt=" next image" className="next-image-style" />
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={handleAllPost}>View all posts</button>
        </div>
      </div>
    </BlogsWrapper>
  );
};

export default Blogs;
