import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
    Container,
    ChartContainer,
    Header,
} from './styles';

interface IHistoryBoxProps {
    data: {
        name: string,
        uv: number,
    }[]
}

const HistoryBoxGains: React.FC<IHistoryBoxProps> = (
    data
) => {

    const gradientOffset = () => {
        const dataMax = Math.max(...data.data.map(i => i.uv));
        const dataMin = Math.min(...data.data.map(i => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };


    const off = gradientOffset();


    return (
        <Container>
            <Header>
                <h2>Histórico de ganhos</h2>
            </Header>
            <ChartContainer>
                <ResponsiveContainer>
                    <AreaChart
                        data={data.data}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke='#cecece' />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="green" stopOpacity={1} />
                                <stop offset={off} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" fill="url(#splitColor)" name='Ganhos'/>
                    </AreaChart>
                </ResponsiveContainer>

            </ChartContainer>
        </Container>
    )
}
export default HistoryBoxGains;