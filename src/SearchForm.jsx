import { UseGlobalContext } from "./context";

const SearchForm = () => {
 const {setSearchTerm} = UseGlobalContext()
    const handleSubmit =  (e) => {
        e.preventDefault();
        // console.log(e.target.elements);
        const searchValue = e.target.elements.search.value
        if(!searchValue) return;
        setSearchTerm(searchValue)
    }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" className="form-input search-input" />
        <button type="submit" className="btn">
            Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
