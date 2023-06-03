import { useAppDispatch, useAppSelector } from "utils/hooks"
import { changeSorting, search  } from "../actions"
import { DropDown, SearchBar } from "components"
import { changeSearchValue } from "../slice"
import { StyledAppbar } from "../styles"

const SORTING = [
  { label: "Lowest ID (First)", value: "numAsc" },
  { label: "Highest ID (First)", value: "numDesc" },
  { label: "A-Z", value: "nameAsc" },
  { label: "Z-A", value: "nameDesc" },
]

const Appbar = () => {
  const dispatch = useAppDispatch()
  const sorting = useAppSelector(store => store.home.sorting)
  const searchValue = useAppSelector(store => store.home.search.value)
  const allPokemons = useAppSelector(store => store.home.allPokemons!)

  const handleChangeSort = (value: string) => {
    dispatch(changeSorting(allPokemons, value as SortingValues))
  }

  const handleChangeSearch = (value: string) => {
    if (value === "") {
      dispatch(changeSearchValue({ value, results: null }))
    } else {
      dispatch(changeSearchValue({ value }))
    }
  }

  const handleSearch = (value: string) => {
    dispatch(search(value, allPokemons))
  }

  return (
    <StyledAppbar>
      <SearchBar
        value={ searchValue }
        placeholder="Search a name or number"
        onChange={ handleChangeSearch }
        onSearch={ handleSearch }
      />
      <DropDown
        label="Sort by:"
        options={ SORTING }
        selected={ sorting }
        onSelect={ handleChangeSort }
      />
    </StyledAppbar>
  )
}

export default Appbar