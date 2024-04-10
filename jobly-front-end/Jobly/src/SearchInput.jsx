import { useState } from "react";

/**
 * SearchInput component search bar with submit
 *
 * Props: handleCompanySearch()
 * State: searchInput("company")
 *
 * App-> RoutesList -> {CompanyList, JobList} -> SearchInput
 */


function SearchInput({ handleCompanySearch }) {
    const initialValue = { search: "" };
    const [searchInput, setSearchInput] = useState(initialValue);

    /** Get company data from input field and update state*/
    function handleChange(evt) {
        const { name, value } = evt.target;
        setSearchInput(sData => ({
            ...sData,
            [name]: value,
        }));
    }

    /** Send company data to parent and reset search input to initial value */
    //trim search input here
    function handleSearch(evt) {
        evt.preventDefault();
        handleCompanySearch(searchInput);
        setSearchInput(initialValue);
    }
    return (
        <div className="SearchInput mb-4">
            <form onSubmit={handleSearch}>
                <div className="row justify-content-center justify-content-lg-start gx-0">
                    <div className="col-8">
                        <input className="form-control form-control-lg" id="search"
                            name="search"
                            value={searchInput.name}
                            placeholder="Enter search term..."
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-auto">
                        <button className='SearchInput-btn btn btn-lg btn-primary' type="submit">Submit</button>
                    </div>
                </div>
            </form>


        </div>
    );
}

export default SearchInput;