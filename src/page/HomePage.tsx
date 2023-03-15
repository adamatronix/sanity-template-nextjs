import {PageData} from './types'

export function HomePage(props: {data: PageData | null}) {
  const {data} = props

  return (
    <div className="p-5">
      <div className="max-w-xl m-auto">
        <div className="prose dark:prose-invert">
          <h1 className="text-xl font-extrabold tracking-tight">Homepage</h1>
        </div>
      </div>
    </div>
  )
}
