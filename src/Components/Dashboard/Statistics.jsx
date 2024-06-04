import React from 'react';

const StatisticsCard = ({ title, amount, percentage, description, positive }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-gray-600">{title}</div>
      <div className="text-2xl font-bold">{amount}</div>
      <div className={`text-sm ${positive ? 'text-green-500' : 'text-red-500'}`}>
        {percentage}%
      </div>
      <div className="text-gray-400 text-sm">{description}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <StatisticsCard
        title="Income"
        amount="$9460.00"
        percentage="-1.5"
        description="Compared to $9940 yesterday"
        positive={false}
      />
      <StatisticsCard
        title="Expenses"
        amount="$5660.00"
        percentage="2.5"
        description="Compared to $5240 yesterday"
        positive={true}
      />
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="text-gray-600">Hire vs Cancel</div>
        <div className="flex items-center justify-center h-32">[Insert Pie Chart Here]</div>
      </div>
    </div>
  );
};

export default Statistics;
