import React from 'react';

const MovieEntry = () => {
    const [movie, setMovie] = useState({
        title: '',
        director: '',
        year: '',
        genre: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovie((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(movie);
        setMovie({
            title: '',
            director: '',
            year: '',
            genre: ''
        });
    }
    return (
        <div>
            <h2>Movie Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title :</label>
                    <input
                        type="text"
                        name="title"
                        value={movie.title}
                        onChange={handleInputChange}  
                        required                  
                    />
                </div>
                <div>
                    <label>Director :</label>
                    <input
                        type="text"
                        name="director"
                        value={movie.director}
                        onChange={handleInputChange}    
                        required                
                    />
                </div>
                <div>
                    <label>Year :</label>
                    <input
                        type="number"
                        name="year"
                        value={movie.year}
                        onChange={handleInputChange} 
                        required                   
                    />
                </div>
                <div>
                    <label>Genre :</label>
                    <input
                        type="text"
                        name="genre"
                        value={movie.genre}
                        onChange={handleInputChange}   
                        required                 
                    />
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default MovieEntry;