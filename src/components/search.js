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

    const results = useFlexSearch(query, index, store, 20)

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
                    <table className="search-component__results">
                        <thead>
                            <tr>
                                <th>Artwork</th>
                                <th>Score</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Label</th>
                                <th>Year</th>
                                <th>Genre</th>
                                <th>Pitchfork's review</th>
                            </tr>
                        </thead>
                        {results.map(
                            ({
                                id,
                                url,
                                album,
                                artist,
                                label,
                                year,
                                artwork,
                                score,
                                genre,
                                pubdate
                            }) => (
                                <tbody>
                                    <tr key={id}>
                                        <td className="artwork">
                                            <img
                                                src={artwork}
                                                alt="album artwork"
                                            />
                                        </td>
                                        <td>{score}</td>
                                        <td>{artist}</td>
                                        <td>{album}</td>
                                        <td>{label}</td>
                                        <td>{year}</td>
                                        <td>{genre}</td>
                                        <td>
                                            <Link to={url}>{pubdate}</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        )}
                    </table>
                ) : query !== '' ? (
                    <p>This query has returned no results, please try again.</p>
                ) : null)}
        </div>
    )
}

export default SearchComponent
