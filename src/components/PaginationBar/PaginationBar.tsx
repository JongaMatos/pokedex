import React, { Dispatch, SetStateAction } from 'react';
// import { useHistory } from 'react-router-dom';
import { PaginationButton, PaginationContainer } from './PaginationBarStyles';
import { range } from '../../utils';
import { useQuery } from '../../utils/hooks';

interface IProps {
    currentPage: number;
    maxPerPage: number;
    isLoading?: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    count: number;
};

export default function PaginationBar({ currentPage, maxPerPage, isLoading, setIsLoading, count }: IProps) {
    // const push = useHistory().push;
    const { setQuery } = useQuery();
    // const { count, perPage } = paginationData;


    const amountOfPages = Math.ceil(count / maxPerPage);
    // const isEven = (amountOfPages % 2 === 0);


    const paginationRange = (curentPage: number = 1, size: number = 5) => {
        const maxSize = Math.ceil(count / maxPerPage);
        if (size > maxSize)
            size = maxSize;

        const tail = Math.floor(size / 2);

        if (curentPage <= tail)
            return range(1, size, amountOfPages);

        if (amountOfPages - tail <= curentPage)
            return range(amountOfPages - tail * 2, size, amountOfPages);

        return (range(currentPage - tail, size, amountOfPages));
    }

    const handleGoTo = (Number: Number) => {
        if (currentPage === Number)
            return;
        setIsLoading(true);

    
        // push(`/type/${filter}/${Number}`);
        setQuery('page', Number.toString())
        return;



    }

    return (
        <PaginationContainer isLoading={isLoading}>
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
