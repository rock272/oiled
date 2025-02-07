"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Team = {
  id: number
  name: string
  members: string[]
  streak: number
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Team Awesome", members: ["User1", "User2", "User3"], streak: 5 },
  ])
  const [newTeamName, setNewTeamName] = useState("")

  const createTeam = () => {
    if (newTeamName) {
      setTeams([...teams, { id: teams.length + 1, name: newTeamName, members: ["You"], streak: 0 }])
      setNewTeamName("")
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Team Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Create a New Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} placeholder="Enter team name" />
            <Button onClick={createTeam}>Create Team</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Members: {team.members.join(", ")}</p>
              <p>Streak: {team.streak} days</p>
              <Button className="mt-2">View Team</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

