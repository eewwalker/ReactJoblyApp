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
    const [title, setTitle] = useState("All Companies");

    useEffect(function fetchCompaniesFromDB() {
        async function fetchCompanies() {
            const resp = await JoblyApi.getCompanies(title);
            setCompanies(resp);
        }
        fetchCompanies();
    }, [title]);

    function handleCompanySearch(companyData) {
        console.log('company', companyData);
    }


    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchInput handleCompanySearch={handleCompanySearch} />
            <h1 className="CompanyList-title text-center">{title}</h1>
            {companies.map(c => <CompanyCard key={c.handle} companyData={c} />)}
        </div>
    );
}
export default CompanyList;