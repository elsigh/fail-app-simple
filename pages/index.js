import Link from 'next/link'

const Index = () => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h3>Server exceptions</h3>
    <ul className="exceptions">
      <li>
        <p>
          getServerSideProps throws an Error. This should cause _error.js to
          render and record Error('Server Test 1') in Sentry.
        </p>
        <a href="/server/test1" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          getServerSideProps returns a Promise that rejects. This should cause
          _error.js to render and record Error('Server Test 2') in Sentry.
        </p>
        <a href="/server/test2" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          getServerSideProps calls a Promise that rejects, but does not handle
          the rejection or await its result (returning synchronously). Sentry
          should record Error('Server Test 3').
        </p>
        <a href="/server/test3" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          getStaticProps calls a Promise that rejects, but does not handle the
          rejection or await its result (returning synchronously). `revalidate:
          1` is set. Sentry should record Error('Server Test 4').
        </p>
        <a href="/server/test4" target="_blank">
          Open in a new tab
        </a>
      </li>
    </ul>

    <h3>Client exceptions</h3>
    <ul className="exceptions">
      <li>
        <p>
          There is a top-of-module Promise that rejects, but its result is not
          awaited. Sentry should record Error('Client Test 1').
        </p>
        <Link href="/client/test1">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test1" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          There is a top-of-module exception. _error.js should render and record
          ReferenceError('process is not defined') in Sentry.
        </p>
        <Link href="/client/test2">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test2" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          There is an exception during React lifecycle that is caught by
          Next.js's React Error Boundary. In this case, when the component
          mounts. This should cause _error.js to render and record Error('Client
          Test 3') in Sentry.
        </p>
        <Link href="/client/test3">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test3" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          There is an unhandled Promise rejection during React lifecycle. In
          this case, when the component mounts. Sentry should record
          Error('Client Test 4').
        </p>
        <Link href="/client/test4">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test4" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          An Error is thrown from an event handler. Sentry should record
          Error('Client Test 5').
        </p>
        <Link href="/client/test5">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test5" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          An Error is thrown in the render lifecycle method. Sentry should record
          Error('Client Test 6').
        </p>
        <Link href="/client/test6">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test6" target="_blank">
          Open in a new tab
        </a>
      </li>
      <li>
        <p>
          An Error is thrown in the componentDidMount lifecycle method. Sentry should record
          Error('Client Test 7').
        </p>
        <Link href="/client/test7">
          <a>Perform client side navigation</a>
        </Link>{' '}
        or{' '}
        <a href="/client/test7" target="_blank">
          Open in a new tab
        </a>
      </li>
    </ul>
  </div>
)

export default Index
