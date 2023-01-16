import React, { useState } from 'react';

function Hero() {
  const [data, setData] = useState([
    {
      date: '2021-01-01',
      appName: 'App 1',
      adRequest: 100,
      adResponse: 80,
      impression: 70,
      clicks: 50,
      revenue: 10
    },
    // more data
  ]);
  const [columns, setColumns] = useState([
    'date',
    'appName',
    'adRequest',
    'adResponse',
    'impression',
    'clicks',
    'revenue',
    'fillRate',
    'ctr'
  ]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.date}>
            {columns.map(column => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Hero;
