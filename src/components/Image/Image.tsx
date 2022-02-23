import React, { useState } from 'react'
import { Img, Load } from './ImageStyle'



interface IProps {
    //image(s) url(s)
    src: string | string[];
    //Function called if no image is loaded
    onError?: () => void | undefined;
    alt?: string | undefined;
    //Component rendered if no image is loaded
    fallback?: React.ReactNode | undefined;
    //Component rendered while images load
    onLoad?: React.ReactNode | undefined;

};

interface IImage {
    url: string;
    index: number;
};


export default function Image({ src, alt, onError, fallback, onLoad }: IProps) {

    const isString = (typeof (src) === "string");

    const [isLoading, setIsLoading] = useState(true);

    const [toFallback, setToFallback] = useState(false);

    // Sets image to first index o src if array, else set to src value;
    const [image, setImage] = useState<IImage>(isString ? { url: src, index: 0 } as IImage : { url: src[0], index: 0 } as IImage);

    // Set image to be the next index in src array
    const setNextImage = () => { setImage({ url: src[image.index + 1], index: image.index + 1 }) };

    const handleLoad = () => { setIsLoading(false) };

    const handleError = () => {
        if (isString || image.index >= src.length - 1) {
            if (onError)
                onError();

            if (fallback)
                setToFallback(true);
        }
        //Calls function if src is array and current image is not the last one        
        setNextImage();
    };




    return (
        <>
            {toFallback ? fallback :
                <>
                    <Img src={image.url} isLoading={isLoading} alt={alt} onLoad={handleLoad} onError={handleError} style={{backgroundColor:"inherit",borderRadius:"inherit"}}/>

                    <Load isLoading={isLoading}>

                        {onLoad && onLoad}
                    </Load>
                </>

            }
        </>
    );
}


