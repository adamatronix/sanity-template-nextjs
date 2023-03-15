import { Link } from 'components/Link/Link'
import { SiteContext } from 'context/site-context';
import React from 'react';

import {PageData} from './types'

export function HomePage(props: {data: PageData | null}) {
  const { InfoShiftValue } = React.useContext(SiteContext);
  const {data} = props

  return (
    <div className="p-5">
      <div className="max-w-xl m-auto">
        <div className="prose dark:prose-invert">
          <h1 className="text-xl font-extrabold tracking-tight">Homepage</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <div>Site context shift value: { InfoShiftValue }</div>
          <Link href="/about">Go to about</Link>
        </div>
      </div>
    </div>
  )
}
