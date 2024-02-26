import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import { useSelector } from 'react-redux';
import './ViewEmployee.scss';

// la barre de recherche de la table des données pour filtrer les données
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
        <span className='search-bar'>
            Search:{' '}
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Type to search..."
            />
        </span>
    );
};

export default function ViewEmployee() {
    //recupere les données de Redux store
    const employees = useSelector(state => state.employee.employees);

    //definition des colonnes de la table
    const columns = useMemo(() => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Birth Date', accessor: 'dateOfBirth' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Start Date', accessor:'startDate' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,    
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
    } = useTable(
        { columns, data: employees, initialState: { pageIndex: 0 } },
        useGlobalFilter,
        useSortBy, 
        usePagination 
    );

    return (
        <div className="employee-list-container">
            <h1>Current Employees</h1>
            <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <table {...getTableProps()} className="employee-list">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <select
                    value={pageSize}
                    onChange={e => {
                        const newSize = parseInt(e.target.value, 10);
                        setPageSize(newSize);
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSizeOption => (
                        <option key={pageSizeOption} value={pageSizeOption}>
                            Show {pageSizeOption}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}