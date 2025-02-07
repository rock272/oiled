import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const leaderboardData = [
  { id: 1, name: "User1", points: 1000 },
  { id: 2, name: "User2", points: 950 },
  { id: 3, name: "User3", points: 900 },
  { id: 4, name: "User4", points: 850 },
  { id: 5, name: "User5", points: 800 },
]

export default function Leaderboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Global Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

