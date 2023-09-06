import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { data } = useGenres();
    // const { genres: data } = useGenres();

    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
