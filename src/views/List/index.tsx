import React, { useMemo, useState, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import active from '../../repositories/active';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import {
    Container,
    Content,
    Filters
} from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    price: number;
    amount: string;
    total: string;
    dateFormated: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['gain', 'lose']);

    const activeValueDay = 15;
    const movimentType = match.params.type;
    console.log(movimentType);

    const pageData = useMemo(() => {
        return {
            title: 'Entradas',
            lineColor: '#53cc5d',
            data: active
        }
    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        const { data } = pageData;

        data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [pageData]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, []);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);
        } else setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0 - 24.')
        }
    }

    const handleYearSelected = (Year: string) => {
        try {
            const parseYear = Number(Year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Invalid Year value. Is accept integer numbers.')
        }
    }

    useEffect(() => {
        const { data } = pageData;

        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const frequency = activeValueDay + (activeValueDay * 0.1) < Number(item.price) ? 'gain' : 'lose'

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(frequency);
        });
        const formatedData = filteredData.map(item => {
            return {
                id: uuid_v4(),
                description: item.Active,
                amount: item.amount,
                price: Number(item.price),
                total: formatCurrency(Number(item.price) * Number(item.amount)),
                dateFormated: formatDate(item.date),
                tagColor: activeValueDay + (activeValueDay * 0.1) < Number(item.price) ? '#00cc29' : '#85040b'
            }
        });
        setData(formatedData);
    }, [pageData, monthSelected, yearSelected, frequencyFilterSelected]);

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className={`
                        tag-filter 
                        tag-filter-recurrent
                        ${frequencyFilterSelected.includes('gain') && 'tag-actived'}
                        `}
                    onClick={() => handleFrequencyClick('gain')}
                >
                    Ganhos
                    </button>
                <button
                    type="button"
                    className={`
                        tag-filter 
                        tag-filter-eventual
                        ${frequencyFilterSelected.includes('lose') && 'tag-actived'}
                        `}
                    onClick={() => handleFrequencyClick('lose')}
                >
                    Perdas
                    </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormated}
                            price = {item.price}
                            total={item.total}
                            amount={item.amount}
                            activeValueDay = {activeValueDay}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}
export default List;