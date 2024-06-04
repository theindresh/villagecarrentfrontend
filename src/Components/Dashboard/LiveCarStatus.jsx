import React from 'react';

const LiveCarStatus = () => {
  const data = [
    { id: 1, carNo: '6465', driver: 'Alex Noman', status: 'Completed', earning: '$35.44' },
    { id: 2, carNo: '5665', driver: 'Razib Rahman', status: 'Pending', earning: '$0.00' },
    { id: 3, carNo: '1755', driver: 'Luke Norton', status: 'In route', earning: '$23.50' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="text-gray-600 mb-2">Live Car Status</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">No.</th>
              <th className="py-2">Car no.</th>
              <th className="py-2">Driver</th>
              <th className="py-2">Status</th>
              <th className="py-2">Earning</th>
              <th className="py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.carNo}</td>
                <td className="py-2">{item.driver}</td>
                <td className="py-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-white ${
                      item.status === 'Completed' ? 'bg-green-500' :
                      item.status === 'Pending' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2">{item.earning}</td>
                <td className="py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveCarStatus;
