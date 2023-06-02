import { useAppDispatch, useAppSelector } from "utils/hooks"
import { changeSorting  } from "../actions"
import { DropDown, SearchBar } from "components"
import { changeSort, changeValue } from "../slice"

const SORTING = [
  { label: "Lowest Number (First)", value: "numAsc" },
  { label: "Highest Number (First)", value: "numDesc" },
  { label: "A-Z", value: "nameAsc" },
  { label: "Z-A", value: "nameDesc" },
]

const Appbar = () => {
  const dispatch = useAppDispatch()
  const sorting = useAppSelector(store => store.home.sorting)
  const search = useAppSelector(store => store.home.search)
  const allPokemons = useAppSelector(store => store.home.allPokemons!)
  const error = useAppSelector(store => store.home.error)

  const handleOpenSort = () => {
    dispatch(changeSort(null))
  }

  const handleChangeSort = (value: string) => {
    dispatch(changeSorting(allPokemons, value as SortingValues))
  }

  const handleChangeSearch = (value: string) => {
    dispatch(changeValue("search", value))
  }

  const handleSearch = (value: string) => {
    alert("search" + value)
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Error: { error}</h1>
      <div>
        <SearchBar value={ search } placeholder="Search a name or number" onChange={ handleChangeSearch } onSearch={ handleSearch }/>
        <DropDown options={ SORTING } selected={ sorting.value } onSelect={ handleChangeSort } onClick={ handleOpenSort } open={ sorting.open }/>
      </div>
    </div>
  )
}

export default Appbar