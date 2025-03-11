import { useEffect, useState } from 'react'
import MenuNav from './component/MenuNav'
import menu from './data'
import MenuContainer from './component/MenuContainer'

const App = () => {
  const data = menu
  const menuCategory = [
    { id: 0, category: 'all' },
    ...data.reduce((acc, item) => {
      const existing = acc.find((ct) => ct.category === item.category)
      if (!existing) acc.push({ id: item.id, category: item.category })
      return acc
    }, []),
  ]
  const [category, setCategory] = useState('all')

  const getItemByCategory = (category) => {
    const filtredData =
      category === 'all'
        ? data
        : data.filter((item) => item.category === category)

    return filtredData
  }

  const [menuItems, setMenuItems] = useState(getItemByCategory(category))
  useEffect(() => {
    const newMenuItems = getItemByCategory(category)
    setMenuItems(newMenuItems)
  }, [category])

  console.log(`Current category: ${category}`)
  return (
    <main
      style={{
        margin: '5rem auto',
        padding: '1.5rem auto',
        width: '60vw',
        minWidth: '600px',
      }}
    >
      <MenuNav menuCategory={menuCategory} setCategory={setCategory} />
      <MenuContainer menuItems={menuItems} />
    </main>
  )
}
export default App
