import { useState, useEffect } from "react"

const SearchBar = ({ data, setData, search }) => {

  const [searchData, setSearchData] = useState('')

  const handleSearch = (e) => {
    setSearchData(e.target.value)
    console.log(searchData);

  }

  const fetchData = () => {
    const filteredData = data.filter((item) => {
      return item[search].toLowerCase().includes(searchData.toLowerCase())
    })

    setData(filteredData)
  }

  const resetSearchData = () => {
    fetchData()
    setData(data)
    setSearchData('')
  }

  useEffect(() => {
    fetchData()
  }, [searchData])

  return (
    <div className="searchBar">
      <div className="d-flex" role="search"  >
        <input className="form-control custom-input me-2" type="search" placeholder="Cerca" aria-label="Search" value={searchData} onChange={handleSearch} />
        {searchData.length > 0 && <button className="btn btn-outline-danger" onClick={resetSearchData}><i className="bi bi-x-lg"></i></button>}
      </div>
    </div>
  )
}

export default SearchBar
