import '../fonts.css'

import { SiteProvider } from 'context/site-context';
import {AppProps} from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useRef,useState } from 'react';
import { animated,useTransition } from 'react-spring'
import styled from 'styled-components';
import { GlobalStyle } from 'utils/global';

/**
 * Absolute panels since each route must lay on top of each other.
 */
const Panel = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter();
  const scrollPositions = useRef<{ [url: string]: number }>({})
  const isBack = useRef(false)

  const [componentArray, setComponentArray] = useState([
    <Component key={router.pathname} {...pageProps} />,
  ]);

  /**
   * Page transition logic for fade in and out.
   * When opacity is 0, which means the transition is mid way, set the 
   * scroll position to the cached version if going back, or 0 if new page.
   */
  const transitions = useTransition(componentArray,  {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    onRest: (result:any) => {
      
      if(result.value.opacity === 0) {
        const url = router.pathname;
        if (isBack.current && scrollPositions.current[url]) {
          window.scroll({
            top: scrollPositions.current[url],
            behavior: "auto",
          })

          isBack.current = false
        } else {
          window.scroll({
            top: 0,
            behavior: "auto",
          })
        }
      }
    }
  })

  /**
   * For tracking route change and setting the componentArray
   */
  useEffect(() => {
    if (componentArray[0].key === router.pathname) {
      return;
    }
    setComponentArray([<Component key={router.pathname} {...pageProps} />]);

  }, [Component, pageProps, router, componentArray])

  /**
   * On route change check if user hit back, and set router events to fire on route change start to 
   * store the route's last scroll position
   */
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    router.beforePopState(() => {
      isBack.current = true
      return true
    })

    const onRouteChangeStart = () => {
      const url = router.pathname
      scrollPositions.current[url] = window.scrollY
    }

    router.events.on("routeChangeStart", onRouteChangeStart)

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart)
    }
  }, [router])

  return (
    <SiteProvider>
      <GlobalStyle />
      { transitions((props, item) => {
        return (
          <Panel style={props}>
            { item }
          </Panel>
        )
        
      }) }
    </SiteProvider>
  )
}
