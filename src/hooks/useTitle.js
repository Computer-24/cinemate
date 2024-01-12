import {useEffect} from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} / Cinemate`
    }, [title])

    return null

};

export default UseTitle;