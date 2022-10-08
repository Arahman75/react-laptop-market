import React from 'react';
import './DashBoard.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            month: "Mar",
            investment: 4000,
            sell: 2400,
            revenue: 2400
        },
        {
            month: "Apr",
            investment: 3000,
            sell: 1398,
            revenue: 2210
        },
        {
            month: "May",
            investment: 2000,
            sell: 9800,
            revenue: 2290
        },
        {
            month: "Jun",
            investment: 2780,
            sell: 3908,
            revenue: 2000
        },
        {
            month: "Jul",
            investment: 1800,
            sell: 4800,
            revenue: 2181
        },
        {
            month: "Aug",
            investment: 2390,
            sell: 3800,
            revenue: 2500
        }

    ];
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    //   const data02 = [
    //     { name: 'A1', value: 100 },
    //     { name: 'A2', value: 300 },
    //     { name: 'B1', value: 100 },
    //     { name: 'B2', value: 80 },
    //     { name: 'B3', value: 40 },
    //     { name: 'B4', value: 30 },
    //     { name: 'B5', value: 50 },
    //     { name: 'C1', value: 100 },
    //     { name: 'C2', value: 200 },
    //     { name: 'D1', value: 150 },
    //     { name: 'D2', value: 50 },
    //   ];

    return (
        <section className='chart'>
            <div className='chart-title'>
                <h1>Month Wise Sell</h1>
                {/* Line chart */}

                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d"></Line>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                </LineChart>
            </div>
            <div>
                <h1>Investment VS Revenue</h1>
                <AreaChart width={600} height={300} data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <YAxis></YAxis>
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                    <Legend></Legend>
                </AreaChart>

            </div>
            <div>
                <h1>Investment VS Revenue</h1>
                <BarChart width={600} height={300} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
<div>
<h1>Investment VS Revenue</h1>
<PieChart width={600} height={300}>
<Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
</div>

            {/* <div>
                <LineChart width={600} height={250} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div> */}
        </section>
    );
};

export default DashBoard;
// const data1 = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];