import { useEffect, useState } from "react";
import JoblyApi from "./app";
import SearchInput from './SearchInput';
import CompanyCard from "./CompanyCard";

/**
 * CompanyList component renders info about all companies
 *
 * Props: none
 * State: none
 *
 * App-> RoutesList -> CompanyList
 */


function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput, 'SEARCH INPUT OUTSIDE OF USE EFFECt');
    useEffect(function fetchCompaniesFromDB() {
        console.log(searchInput, 'SEARCH INPUT COMPANY INSIDE');
        async function fetchCompanies() {
            const resp = await JoblyApi.getCompanies(searchInput);
            setCompanies(resp);
        }
        fetchCompanies();
    }, [searchInput]);
    //Don't build object data here
    function handleCompanySearch(companyData) {
        console.log('COMPANU DATA', companyData);
        setSearchInput({ nameLike: companyData.search });
        // setSearchInput(`nameLike?${companyData.search}`);
    }

    //If searchInput then show Search Results for {searchInput}, else show All Companies
    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchInput handleCompanySearch={handleCompanySearch} />
            <h1 className="CompanyList-title text-center">{searchInput.nameLike}</h1>
            {companies.map(c => <CompanyCard key={c.handle} companyData={c} />)}
        </div>
    );
}
export default CompanyList;