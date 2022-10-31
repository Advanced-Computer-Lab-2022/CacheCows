import Post from "./Post"

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(course => <Post key={course.id} course={course} />)

    const content = results?.length ? results : <article><p>No Matching Courses</p></article>

    return (
        <main>{content}</main>
    )
}
export default ListPage