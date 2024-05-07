import { MenuItem } from "../types.ts"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type Props = {
  menuItem: MenuItem
  addToCart: () => void
}

const Menu_Item = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  )
}

export default Menu_Item