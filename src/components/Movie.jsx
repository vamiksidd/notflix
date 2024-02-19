import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("login to save show");
    }
  };
  return (
    <div className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:bg-black/70 hover:opacity-100 text-white">
        <p className="flex text-xs md:text-sm font-bold justify-center items-center h-full whitespace-normal">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4" />
          ) : (
            <FaRegHeart className="absolute  top-4 left-4" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
