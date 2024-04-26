import "./styles/style.scss"
import SearchBar from "./SearchBar/SearchBar";
import FilterUsers from "./FilterUsers/FilterUsers";

const NavBar = ({ students, setStudents, Data, setCurrentStudent,cohort}) => {
    return (
        <header className="navbar">
            <div className="navbar__left">
                <FilterUsers  setStudents={setStudents} Data={Data} cohort={cohort} />
                <SearchBar students={students} setCurrentStudent={setCurrentStudent} />
            </div>
            <div className="navbar__right">
                <h5 className="navbar__text">Welcome Back</h5>
                <div className="navbar__profile"></div>
            </div>
        </header>
    )
}

export default NavBar