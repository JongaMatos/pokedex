import React from 'react';
import { PaginationButton, PaginationContainer } from './PaginationStyles';
import { range, usePush } from '../../utils';
import paginationData from '../../Data/paginationAux.json';

interface IProps {
    currentPage: number;
    maxPerPage: number;
    totalItens?: number;
};

export default function Pagination({ currentPage, totalItens = 1126, maxPerPage }: IProps) {
    // console.log(paginationData)
    const push = usePush();

    const amountOfPages = Math.ceil(paginationData.totalItens / paginationData.perPage);


    const paginationRange = (curentPage: number = 1, size: number = 5) => {
        const paginationTail = Math.floor(size / 2);

        if (curentPage <= paginationTail)
            return range(1);

        if (curentPage > amountOfPages - paginationTail)
            return range(amountOfPages - paginationTail * 2)

        return (range(currentPage - paginationTail));
    }

    const handleGoTo = (Number: Number) => {
        if (Number !== currentPage) {
            push(`/pokedex/?page=${Number}`)
            window.location.reload();
            window.scrollTo(0, 0)
        }
    }

    return (
        <PaginationContainer >
            {paginationRange(currentPage).map((Number) => (

                <PaginationButton
                    isCurrentPage={currentPage === Number}
                    key={Number}
                    onClick={() => handleGoTo(Number)}
                >
                    {Number}
                </PaginationButton>

            ))}

        </PaginationContainer>
    )
};
