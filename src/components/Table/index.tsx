import { ITable } from "./interface";
import { FC } from 'react'

const Table: FC<ITable> = ({ columns, data, title }) => {
    return (
        <div className='flex flex-col font-mono overflow-x-hidden py-2'>
            {title && (
                <h1 className="pl-2 text-2xl font-mono font-bold pb-2">{title}:</h1>
            )}
            <div className='overflow-x-hidden'>
                <div className='p-1.5 w-full inline-block align-middle'>
                    <div className='overflow-hidden border rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    {columns.map(columns => (
                                        <th
                                            scope='col'
                                            className='px-6 py-3 text-base font-normal text-left capitalize font-mono'
                                            style={{color: '#101827'}}
                                        >
                                            {columns.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200'>
                                {data.map((val: any) => (
                                    <tr>
                                        {columns.map(columns => (
                                            <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap font-mono'>
                                                {!!columns.render ? columns.render(columns.data === 'all' ? val : val[columns.data]) : val[columns.data]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table