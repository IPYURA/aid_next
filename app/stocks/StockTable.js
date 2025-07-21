'use client';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
function StockTable({ data }) {
    return (
        <DataTable value={data} paginator rows={20}>
            <Column field='seq' header='Seq' />
            <Column field='symbol' header='Symbol' />
            <Column field='date' header='Date' />
            <Column field='close' header='Close' />
            <Column field='high' header='High' />
            <Column field='low' header='Low' />
            <Column field='open' header='Open' />
        </DataTable>
    );
}
export default StockTable;
