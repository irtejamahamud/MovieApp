import React , {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import Loading from "../Components/Loading";
import SeriePoster from "../Components/SeriePoster";
import "../Styles/Series.css";

function Series(){

	const [genreOptions, setGenreOptions] = useState([]);
	const [selectOptions, setSelectOptions] = useState({orden: 'popularity.desc', genero: ''});
	const [results, setResults] = useState([]);
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setSpinner(false);
		fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES')
			.then((res) => res.json())
			.then((data) => {
		  		setGenreOptions(data.genres);
		  	})
		  	.catch((error)=>{
            	console.log(error)
       	 	})
	}, []);

	const handleChange = (e) => {
		setSelectOptions({
			...selectOptions,
			[e.target.name] : e.target.value
		})
	}

	useEffect(() => {
		setSpinner(true);
		fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c2c2cd525b5005c063f7b1a9d54ab699&language=es-ES&sort_by=${selectOptions.orden}&include_adult=false&page=1&with_genres=${selectOptions.genero}`)
	    	.then((res) => res.json())
	      	.then((data) => {
	      		console.log(data);
				setResults(data.results);
	      		setSpinner(false);
	      	})
	      	.catch((error)=>{
            	console.log(error)
        })

	}, [selectOptions]);

	return(
		<>
			{spinner &&
				<Loading />
			}

			<h3>TV Series</h3>

			<div className="select-container">
				<h6>Select genre:</h6>
				<Form.Control className="select" as="select" onChange={handleChange} name="genero">
					<option value="">All genres</option>
						{genreOptions.map((genreOption)=><option value={genreOption.id}>{genreOption.name}</option>)}
				</Form.Control>
				<h6>Sort by:</h6>
				<Form.Control className="select" as="select"onChange={handleChange} name="orden">
					<option value="popularity.desc" >Most popular</option>			
					<option value="vote_average.desc" >Highest rated</option>
					<option value="first_air_date.desc" >Most recent</option>
				</Form.Control>
			</div>

			<div className="results-container">	
				{results.length > 0 && results.map((result)=><SeriePoster key={result.id} {...result} results={results} />)}		
			</div>	
		</>
	)
}

export default Series;