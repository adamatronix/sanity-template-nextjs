import { useEffect,useState } from 'react';

const useMatchMedia = (mediaQuery:string) => {
  const [isMatching, setIsMatching] = useState(typeof window !== 'undefined' ? window.matchMedia(mediaQuery).matches : false);

  useEffect(() => {
    if(typeof window === 'undefined')
      return;

    const watcher = window.matchMedia(mediaQuery)
    setIsMatching(watcher.matches)

    const listener = (matches:any) => {
      setIsMatching(matches.matches)
    }

    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener)
    } 

    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener)
      }
    }

  }, [mediaQuery])

  return isMatching;
}

export default useMatchMedia;