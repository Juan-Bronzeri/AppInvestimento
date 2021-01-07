import React from 'react';
import {
    Container,
    Tag
} from './styles';

interface IHistoryFinanceCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    price: number;
    total: string;
    amount: string;
    activeValueDay: number;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    tagColor,
    title,
    subtitle,
    price,
    amount,
    total,
    activeValueDay
}) => (
    <Container>
        <Tag color={tagColor}/>
        <div>
            <span>{amount} - {title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>
            {total}
        </h3>
    </Container>
);
export default HistoryFinanceCard;