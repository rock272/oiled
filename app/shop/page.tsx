"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const shopItems = [
  { id: 1, name: "Cool Hairstyle", price: 100, type: "hair" },
  { id: 2, name: "Stylish Shirt", price: 150, type: "shirt" },
  { id: 3, name: "Fancy Pants", price: 200, type: "pants" },
  { id: 4, name: "Awesome Shoes", price: 175, type: "shoes" },
]

export default function Shop() {
  const [currency, setCurrency] = useState(500)

  const buyItem = (itemPrice: number) => {
    if (currency >= itemPrice) {
      setCurrency(currency - itemPrice)
      // Here you would also update the user's avatar
    } else {
      alert("Not enough currency!")
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Avatar Shop</h1>
      <p className="mb-4">Your current balance: {currency} coins</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shopItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: {item.price} coins</p>
              <Button onClick={() => buyItem(item.price)} className="mt-2">
                Buy
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

