import React, { useState, useMemo, useCallback } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MenssageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import HistoryBoxGains from '../../components/HistoryBoxGains';

import vendas from '../../repositories/vendas';
import compras from '../../repositories/compra';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';

import {
    Container,
    Content
} from './styles';

const DashBoard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...vendas, ...compras].forEach(item => {
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
    }, []);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, []);

    const totalSells = useMemo(() => {
        let total: number = 0;
        let totalGain: number = 0;

        vendas.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.price);
                    totalGain += Number(item.gain);
                } catch {
                    throw new Error('Invalid amount! Amount must be number');
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected])

    const totalBuys = useMemo(() => {
        let total: number = 0;

        compras.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.price);
                } catch {
                    throw new Error('Invalid amount! Amount must be number');
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let totalGain: number = 0;

        vendas.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    totalGain += Number(item.gain);
                } catch {
                    throw new Error('Invalid amount! Amount must be number');
                }
            }
        });
        return totalGain;
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalGains;
    }, [totalBuys, totalSells])

    const message = useMemo(() => {
        if (totalBuys === 0 && totalSells === 0) {
            return {
                title: 'Ops!',
                description: 'Não há registros!',
                footerText: 'Registre seus investimentos!',
                icon: opsImg
            }
        } else if (totalBalance < 0) {
            return {
                title: 'Que triste!',
                description: 'Nesse mês você perdeu dinheiro!',
                footerText: 'Tente investir com mais sabedoria!',
                icon: sadImg
            }
        } else if (totalBalance === 0) {
            return {
                title: 'Ufa!',
                description: 'Nesse mês você não perdeu nem ganhou!',
                footerText: 'Tenha cuidado. No próximo mês tente investir melhor!',
                icon: grinningImg
            }
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim.!',
                icon: happyImg
            }
        }
    }, [totalBalance, totalBuys, totalSells])

    const relationSellsGuys = useMemo(() => {
        const total = totalBuys + Number(totalSells);

        const percentGains = (totalBuys / total) * 100;
        const percentExpenses = (Number(totalSells) / total) * 100;

        const data = [
            {
                name: 'Compras',
                value: totalBuys,
                percent: Number(percentGains.toFixed(1)) || 0,
                color: '#f7931b'
            },
            {
                name: 'Vendas',
                value: totalSells,
                percent: Number(percentExpenses.toFixed(1)) || 0,
                color: '#e44c4e'
            },
        ]
        return data;
    }, [totalBuys, totalSells])

    const historyData = useMemo(() => {
        return listOfMonths
            .map((_, month) => {
                let amountEntry = 0;
                compras.forEach(buy => {
                    const date = new Date(buy.date);
                    const buyMonth = date.getMonth();
                    const buyYear = date.getFullYear();

                    if (buyMonth === month && buyYear === yearSelected) {
                        try {
                            amountEntry += Number(buy.amount) * Number(buy.amount);
                        } catch {
                            throw new Error('amountEntry is invalid. amountEntry must be valid number');
                        }
                    }
                })
                let amountOutput = 0;
                vendas.forEach(sell => {
                    const date = new Date(sell.date);
                    const sellMonth = date.getMonth();
                    const sellYear = date.getFullYear();

                    if (sellMonth === month && sellYear === yearSelected) {
                        try {
                            amountOutput += Number(sell.price) * Number(sell.amount);
                        } catch {
                            throw new Error('amountOutput is invalid. amountOutput must be valid number');
                        }
                    }
                });
                return {
                    month: listOfMonths[month].substr(0, 3),
                    amountEntry,
                    amountOutput,
                }
            })
            .filter(item => {
                const currentMonth = 10;
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear) || (yearSelected < currentYear)
            });
    }, [yearSelected])

    const historyDataGains = useMemo(() => {
        return listOfMonths
            .map((_, month) => {
                let priceOutput = 0;
                vendas.forEach(sell => {
                    const date = new Date(sell.date);
                    const sellMonth = date.getMonth();
                    const sellYear = date.getFullYear();

                    if (sellMonth === month && sellYear === yearSelected) {
                        try {
                            priceOutput += Number(sell.gain);
                        } catch {
                            throw new Error('amountOutput is invalid. amountOutput must be valid number');
                        }
                    }
                });
                return {
                    name: listOfMonths[month].substr(0, 3),
                    uv: priceOutput,
                }
            })
            .filter(item => {
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear) || (yearSelected < currentYear)
            });
    }, [yearSelected])

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0 - 24.')
        }
    },[]);

    const handleYearSelected = (Year: string) => {
        try {
            const parseYear = Number(Year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Invalid Year value. Is accept integer numbers.')
        }
    }

    return (
            <Container>
                <ContentHeader title="DashBoard" lineColor="#F7931B">
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
                <Content>
                    <WalletBox
                        title='Ganhos'
                        color='#4e41f0'
                        amount={totalBalance}
                        footerLabel='atualizado com base nas entradas e saidas'
                        icon='dolar'
                    />
                    <WalletBox
                        title='Compras'
                        color='#f7931b'
                        amount={totalBuys}
                        footerLabel='atualizado com base nas entradas e saidas'
                        icon='arrowUp'
                    />
                    <WalletBox
                        title='Vendas'
                        color='#e44c4e'
                        amount={totalSells}
                        footerLabel='atualizado com base nas entradas e saidas'
                        icon='arrowDown'
                    />
                    <MenssageBox
                        title={message.title}
                        description={message.description}
                        footerText={message.footerText}
                        icon={message.icon}
                    />
                    <PieChartBox data={relationSellsGuys} />
                    <HistoryBox
                        data={historyData}
                        lineColorAmountEntry='#f7931b'
                        lineColorAmountOutput='#e44c4e'
                    />
                    <HistoryBoxGains 
                        data={historyDataGains}
                    />
                </Content>
            </Container>
    );
}
export default DashBoard;