import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Typography } from '@material-tailwind/react';

const Table = ({ headers, rows, onEdit, onDelete }) => (
    <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
            <tr>
                {headers.map((head) => (
                    <th key={head} className="border-y border-blue-gray-100 bg-purple p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
                <tr key={row.id}>
                    {row.cells.map((cell, index) => (
                        <td key={index}>
                            <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {cell}
                                </Typography>
                            </div>
                        </td>
                    ))}
                    <td>
                        <Tooltip content="Edit">
                            <IconButton variant="text" onClick={() => onEdit(row)}>
                                <PencilIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                    <td>
                        <Tooltip content="Delete">
                            <IconButton variant="text" onClick={() => onDelete(row)}>
                                <TrashIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            cells: PropTypes.arrayOf(PropTypes.node),
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Table;
