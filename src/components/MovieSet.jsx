import { useNavigate } from "react-router-dom";

export default function MovieSet({ id, title, imgUrl }) {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={`${import.meta.env.VITE_API_IMG}${imgUrl}`}
        alt=""
        // style={{ border: "solid black 1px", width: 100, height: 100 }}
        onClick={() => {
          navigate(`/${id}`);
        }}
      />
      <div className="movieName">{title}</div>
    </>
  );
}
