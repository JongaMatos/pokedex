import React from 'react';
import { useHistory } from 'react-router-dom';
import { PaginationButton, PaginationContainer } from './PaginationStyles';
import { range } from '../../utils';

interface IProps {
    currentPage: number;
    maxPerPage: number;
    totalItens?: number;
    refresher: any;
};

export default function Pagination({ currentPage, totalItens = 1126, maxPerPage, refresher }: IProps) {

    const amountOfPages = Math.ceil(totalItens / maxPerPage);
    const history = useHistory();


    const paginationRange = (curentPage: number = 1, size: number = 5) => {
        const paginationTail = Math.floor(size / 2);

        if (curentPage <= paginationTail)
            return range(1);

        if (curentPage > amountOfPages - paginationTail)
            return range(amountOfPages - paginationTail * 2)

        return (range(currentPage - paginationTail));
    }

    const handleGoTo = (number: number) => {
        history.push(`/?page=${number}`)
        refresher(number);
    }

    return (
        <PaginationContainer >
            {paginationRange(currentPage).map((number) => (

                <PaginationButton
                    isCurrentPage={currentPage === number}
                    key={number}
                    onClick={() => handleGoTo(number)}
                >
                    {number}
                </PaginationButton>

            ))}

        </PaginationContainer>
    )
};
