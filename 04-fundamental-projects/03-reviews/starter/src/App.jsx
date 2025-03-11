import ProfilesList from './components/ProfileList'
import reviews from './data'
const App = () => {
  return (
    <main>
      <h2>Hello on my page</h2>
      <ProfilesList reviews={reviews} />
    </main>
  )
}
export default App
