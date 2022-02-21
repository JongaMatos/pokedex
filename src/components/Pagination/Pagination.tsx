import React, { Dispatch, SetStateAction } from 'react';
import { PaginationButton, PaginationContainer } from './PaginationStyles';
import { range, usePush } from '../../utils';

interface IProps {
    currentPage: number;
    maxPerPage: number;
    isLoading?: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    count: number;
};

export default function Pagination({ currentPage, maxPerPage, isLoading, setIsLoading, count }: IProps) {
    const push = usePush();
    // const { count, perPage } = paginationData;


    const amountOfPages = Math.ceil(count / maxPerPage);
    // const isEven = (amountOfPages % 2 === 0);


    const paginationRange = (curentPage: number = 1, size: number = 5) => {
        const maxSize = Math.ceil(count / maxPerPage);
        if (size > maxSize)
            size = maxSize;

        const tail = Math.floor(size / 2);
        // console.log({ Quantia: amountOfPages, Par: isEven, Rabo: tail });

        if (curentPage <= tail)
            return range(1, size, amountOfPages);

        if (amountOfPages - tail <= curentPage)
            return range(amountOfPages - tail * 2, size, amountOfPages);

        return (range(currentPage - tail, size, amountOfPages));
    }

    const handleGoTo = (Number: Number) => {
        if (Number !== currentPage) {
            setIsLoading(true);
            push(`/pokemons/${Number}`)
        }
    }

    return (
        <PaginationContainer isLoading={isLoading}>
            {paginationRange(currentPage)
                .map((Number) => {

                    return (
                        <PaginationButton
                            // isCurrentPage={currentPage === Number}
                            key={Number}
                            onClick={() => handleGoTo(Number)}
                        >
                            {Number}
                        </PaginationButton>
                    )
                }
                )}

        </PaginationContainer>
    )
};
