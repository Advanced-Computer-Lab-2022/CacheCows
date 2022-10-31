import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ courses, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(courses)

        const resultsArray = courses.filter(course => course.title.includes(e.target.value) || course.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}
export default SearchBar