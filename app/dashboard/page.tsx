import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Habit Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Complete your daily tasks to earn currency!</p>
            <Button asChild className="mt-4">
              <Link href="/tasks">View Tasks</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shop</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Customize your avatar with new accessories!</p>
            <Button asChild className="mt-4">
              <Link href="/shop">Visit Shop</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>See how you rank against other users!</p>
            <Button asChild className="mt-4">
              <Link href="/leaderboard">View Leaderboard</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Create or join a team to achieve goals together!</p>
            <Button asChild className="mt-4">
              <Link href="/teams">Manage Teams</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

