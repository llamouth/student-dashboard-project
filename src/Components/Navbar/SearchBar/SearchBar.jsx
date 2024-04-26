import { FaSearch } from "react-icons/fa";
import Select from "react-select"

const SearchBar = ({students, setCurrentStudent}) => {

    const searchUsers = (e) => {
        setCurrentStudent(e.id)
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            flexWrap: 'nowrap',
            borderColor: '#DCDCDC',
            width: "400px",
            borderRadius: "20px",
            cursor: "pointer"
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: 0,
            lineHeight: "30px"
        }),
        indicatorSeparator: () => ({
            display: 'none'
        }),
        dropdownIndicator: () => ({
            display: "none" 
        }),
        option : () => ({
            cursor: "pointer",
        })
    };

    return (
        <>
            <Select
                options={students}
                className="searchUsers"
                placeholder="Search Users"
                onChange={searchUsers}
                styles={customStyles}
            /> 
            <FaSearch className="search" onClick={searchUsers}/>
        </>
    )
}

export default SearchBar;