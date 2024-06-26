import { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchInput from './SearchInput';
import CompanyCard from "./CompanyCard";

/**
 * CompanyList component renders info about all companies
 *
 * Props: none
 * State:
 * -companies = [list of companies]
 * -searchInput = 'searchInput'
 *
 * App-> RoutesList -> CompanyList
 */


function CompanyList() {
    const [companies, setCompanies] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    useEffect(function fetchCompaniesFromDB() {
        setCompanies(null);

        async function fetchCompanies() {
            const resp = await JoblyApi.getCompanies(searchInput);
            setCompanies(resp);
        }
        fetchCompanies();

    }, [searchInput]);

    /** sets SearchInput state to data from child component */
    function handleCompanySearch(companyData) {
        setSearchInput(companyData);
    }

    const title = searchInput.length !== 0 ? `Search Results for "${searchInput}"` : `All Companies`;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            {!companies ? <div>Loading...</div> :
                <div>
                    <SearchInput handleSubmit={handleCompanySearch} />
                    <h1 className="CompanyList-title text-center">{title}</h1>
                    {companies.length ?
                        companies.map(c => <CompanyCard key={c.handle} companyData={c} />)
                        : <p className="CompanyList-noResults text-center">Sorry, no results were found!</p>
                    }
                </div>
            }
        </div>
    );
}
export default CompanyList;