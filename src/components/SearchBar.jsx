import { useState, useEffect } from "react"

const SearchBar = ({ data, setData, searchKey1, searchKey2 }) => {

  const [searchData, setSearchData] = useState('')

  const handleSearch = (e) => {
    setSearchData(e.target.value)

  }

  const fetchData = () => {
    const filteredData = data.filter(item => {
      return (
        (item[searchKey1] && item[searchKey1].toLowerCase().includes(searchData.toLowerCase())) ||
        (item[searchKey2] && item[searchKey2].toLowerCase().includes(searchData.toLowerCase()))
      )
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
    <div className="searchBar py-3">
      <div className="d-flex justify-content-center justify-content-lg-end" role="search"  >
        <input className="form-control custom-input" type="search" placeholder="Cerca" aria-label="Search" value={searchData} onChange={handleSearch} />
        {searchData.length > 0 && <button className="btn btn-outline-danger ms-2" onClick={resetSearchData}><i className="bi bi-x-lg"></i></button>}
      </div>
    </div>
  )
}

export default SearchBar
