import React, { useState } from 'react'
import { Img, Load } from './ImageLoadStyle'
import { Oval } from 'react-loader-spinner'



interface IProps {
    src: string | string[];
    onError: () => void | undefined;
    alt: string | undefined;
};

interface IImage {
    url: string;
    index: number;
};


export default function ImageLoad({ src, alt, onError }: IProps) {

    const isString = (typeof (src) === "string");

    const [isLoading, setIsLoading] = useState(true);

    // Sets image to first index o src if array, else set to src value;
    const [image, setImage] = useState<IImage>(isString ? { url: src, index: 0 } as IImage : { url: src[0], index: 0 } as IImage);
    
    // Set image to be the next index in src array
    const setNextImage = () => { setImage({ url: src[image.index + 1], index: image.index + 1 }) };

    const handleLoad = () => { setIsLoading(false) };

    const handleError = () => {
        if (isString || image.index >= src.length - 1)
            if (onError)
                onError();
        //Calls function if src is array and current image is not the last one        
        setNextImage();
    };


    return (
        <>
            <Img src={image.url} isLoading={isLoading} alt={alt} onLoad={handleLoad} onError={handleError} />

            <Load isLoading={isLoading}>
                <Spinner />
            </Load>

        </>
    );
}

const Spinner = () => (
    <Oval color='#B3D7FB' width={"100%"} />
);