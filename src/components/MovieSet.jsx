import { useNavigate } from "react-router-dom";

export default function MovieSet({ id, title, imgUrl }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${id}`);
        }}
      >
        {imgUrl ? (
          <img src={`${import.meta.env.VITE_API_IMG}${imgUrl}`} alt="" />
        ) : (
          <div
            style={{ width: 500, height: 750, backgroundColor: "lightgray" }}
          ></div>
        )}
        <div className="movieName">{title}</div>
      </div>
    </>
  );
}
