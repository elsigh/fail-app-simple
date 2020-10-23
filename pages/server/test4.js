const Test4 = ({ time }) => (
  <div>
    <h1>Server Test 4</h1>
    <p>Date.now(): {time}</p>
  </div>
)

export async function getStaticProps() {
  const doAsyncWork = () => Promise.reject(new Error('Server Test 4'))

  doAsyncWork()

  return { props: { time: Date.now() }, revalidate: 1 }
}

export default Test4
