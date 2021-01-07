import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
    Container,
    ChartContainer,
    Header,
    LegendContainer,
    Legend
} from './styles';

// const data = [
//     {
//       name: 'Page A', uv: 4000,
//     },
//     {
//       name: 'Page B', uv: 3000,
//     },
//     {
//       name: 'Page C', uv: -1000,
//     },
//     {
//       name: 'Page D', uv: 500,
//     },
//     {
//       name: 'Page E', uv: -2000,
//     },
//     {
//       name: 'Page F', uv: -250, pv: 3800, amt: 2500,
//     },
//     {
//       name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
//   ];

  interface IHistoryBoxProps {
    data: {
        name: string,
        uv: number,
    }[],
}
  

const HistoryBoxGains: React.FC<IHistoryBoxProps> = (
    data,
) => {

    // const gradientOffset = () => {
    //     const dataMax = Math.max(...data.map(i => i.uv));
    //     const dataMin = Math.min(...data.map(i => i.uv));
      
    //     if (dataMax <= 0) {
    //       return 0;
    //     }
    //     if (dataMin >= 0) {
    //       return 1;
    //     }
      
    //     return dataMax / (dataMax - dataMin);
    //   };


    //   const off = gradientOffset();
    const a = data;
    return(
    // <AreaChart
    //     width={500}
    //     height={400}
    //     data={data}
    //     margin={{
    //         top: 10, right: 30, left: 0, bottom: 0,
    //     }}
    // >
    //     <CartesianGrid strokeDasharray="3 3" stroke='#cecece'/>
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
    //     <defs>
    //         <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
    //             <stop offset={off} stopColor="green" stopOpacity={1} />
    //             <stop offset={off} stopColor="red" stopOpacity={1} />
    //         </linearGradient>
    //     </defs>
    //     <Area type="monotone" dataKey="uv" fill="url(#splitColor)" name='Ganhos' stroke='#034400'/>
    // </AreaChart>
    <h1>teste</h1>
)
    }
export default HistoryBoxGains;