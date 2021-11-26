import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {getInvoices} from './Data'

const Invoices = () => {
    const {id} = useParams();
    const dataAPI = getInvoices()
    return (
        <div>
            <nav>
                {dataAPI.map(invoice =>(
                    <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
                        {invoice.name} | {' '}
                    </Link>
                ))}
            </nav>
            <p>Param is : {id}</p>
        </div>
    );
}

export default Invoices;
