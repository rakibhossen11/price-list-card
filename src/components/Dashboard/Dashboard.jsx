import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
          id: 1,
          name: "John",
          math: 85,
          physics: 75,
          chemistry: 90
        },
        {
          id: 2,
          name: "Jane",
          math: 78,
          physics: 82,
          chemistry: 88
        },
        {
          id: 3,
          name: "Bob",
          math: 89,
          physics: 91,
          chemistry: 87
        },
        {
          id: 4,
          name: "Alice",
          math: 80,
          physics: 85,
          chemistry: 86
        },
        {
          id: 5,
          name: "Tom",
          math: 91,
          physics: 85,
          chemistry: 88
        },
        {
          id: 6,
          name: "Sara",
          math: 87,
          physics: 83,
          chemistry: 82
        },
        {
          id: 7,
          name: "Peter",
          math: 80,
          physics: 84,
          chemistry: 87
        },
        {
          id: 8,
          name: "Alex",
          math: 92,
          physics: 85,
          chemistry: 88
        },
        {
          id: 9,
          name: "Eva",
          math: 86,
          physics: 90,
          chemistry: 85
        },
        {
          id: 10,
          name: "David",
          math: 89,
          physics: 90,
          chemistry: 91
        }
      ];
      
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math" stroke='#8884d8'></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;