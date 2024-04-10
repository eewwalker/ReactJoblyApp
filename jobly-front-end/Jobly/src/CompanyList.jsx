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

    useEffect(function fetchCompaniesFromDB() {
        async function fetchCompanies() {
            const resp = await JoblyApi.getCompanies();
            console.log('resp', resp);
            setCompanies(resp);
        }
        fetchCompanies();
    }, []);


    return (
        <div className="CompanyList">
            <SearchInput />
            <h1>All Companies</h1>
            {companies.map(c => <CompanyCard key={c.handle} companyData={c} />)}
        </div>
    );
}
export default CompanyList;