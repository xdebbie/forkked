/* --------------------------------------------
$  SEARCH ENGINE (rankings page)
 --------------------------------------------*/
import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import InputField from '../components/inputField'

const SearchComponent = () => {
    const [query, setQuery] = useState('')
    const data = useStaticQuery(graphql`
        {
            localSearchScores {
                store
                index
            }
        }
    `)

    const { index, store } = data.localSearchScores

    const results = useFlexSearch(query, index, store)

    const handleChange = event => {
        setQuery(event.target.value)
    }

    return (
        <div className="search-component">
            <InputField
                className="search-component__field"
                type="search"
                htmlFor="search"
                onChange={handleChange}
            />
            {results &&
                (results.length > 0 ? (
                    <ul className="search-component__results">
                        {results.map(({ id, url, album }) => (
                            <li key={id}>
                                <Link to={url}>{album}</Link>
                            </li>
                        ))}
                    </ul>
                ) : query !== '' ? (
                    <p>No results</p>
                ) : null)}
        </div>
    )
}

export default SearchComponent
