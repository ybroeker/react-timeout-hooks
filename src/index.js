import {useEffect} from 'react'

export const useInterval = (callback, ms, props = []) => {
    useEffect(() => {
        const id = window.setInterval(callback, ms);
        return () => window.clearInterval(id)
    }, [...props, callback, ms])
};

export const useTimeout = (callback, ms, props = []) => {
    useEffect(() => {
        const id = window.setTimeout(callback, ms);
        return () => window.clearTimeout(id)
    }, [...props, callback, ms])
};

export const useAnimationFrame = (callback, props = []) => {
    useEffect(() => {
        const id = window.requestAnimationFrame(callback);
        return () => window.cancelAnimationFrame(id)
    }, [...props, callback])
};
