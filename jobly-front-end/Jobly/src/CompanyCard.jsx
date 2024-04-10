import { Link } from "react-router-dom";


function CompanyCard({ companyData }) {


    return (
        <div className="CompanyCard">
            <Link className='CompanyCard card m-3 link-underline link-underline-opacity-0' to={`/company/${companyData.handle}`}>
                <div className="card-body">
                    <h6 className="title">{companyData.name}
                        {/* <img src="" alt="" className="float-end ms-5" /> */}
                    </h6>
                    <p>{companyData.description}</p>
                </div>
            </Link>

        </div >
    );
}

export default CompanyCard;;