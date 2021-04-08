import MoviesPerGenders from "../../components/Home/MoviesPerGenders";

const index = () =>(
    <>
        <h2>Movies per genders </h2>
        <MoviesPerGenders gender="horror"/>
        <hr/>
        <MoviesPerGenders gender="drama"/>
        <hr/>
        <MoviesPerGenders gender="comedy"/>
        <hr/>
        <MoviesPerGenders gender="mystery"/>
    </>
)
export default index;
