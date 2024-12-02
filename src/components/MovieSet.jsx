import { useNavigate } from "react-router-dom";

export default function MovieSet({ id, title, imgUrl }) {
  const navigate = useNavigate();

  if (!imgUrl) {
    return (
      <>
        <div
          className="movieSetContainer"
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          <div
            style={{ width: 500, height: 750, backgroundColor: "lightgray" }}
          />
          <div className="movieName">{title}</div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="movieSetContainer"
        onClick={() => {
          navigate(`/${id}`);
        }}
      >
        <img src={`${import.meta.env.VITE_API_IMG}${imgUrl}`} alt="" />
        <div className="movieName">{title}</div>
      </div>
    </>
  );
}
