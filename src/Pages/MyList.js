import React, {useContext} from "react";
import {MyListContext} from "../Context/MyListContext";
import {Link} from 'react-router-dom';
import "../Styles/MyList.css";

const image = "https://image.tmdb.org/t/p/w1280";

function MyList (){

	const [myListFavorites, setMyListFavorites] = useContext(MyListContext);

	return(
		<>
			<h3>My List</h3>
			<div className="favorites-container">
				{myListFavorites.map((movie) => (
					<div className="favoriteposter-container" key={movie.id}>
						<img 
							className="favoriteimage-container"
							src={image + movie.poster_path}
							alt={movie.title}
						/>
					</div>
				))}
			</div>
		</>
	)
}

export default MyList;