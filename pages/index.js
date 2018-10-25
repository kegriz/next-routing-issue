import Link from 'next/link'

const Index = () => (
  <div>
    <p>Home</p>
    <Link href="/"><a>home </a></Link>
    <Link href="/aaa"><a>aaa </a></Link>
    <Link href="/bbb"><a>bbb </a></Link>
    <Link href="/ccc"><a>ccc </a></Link>
    <Link href="/ddd"><a>ddd </a></Link>
  </div>
)

export default Index