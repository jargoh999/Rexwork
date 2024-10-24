import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, MessageSquare, Search, Settings, Edit, Share2, Trophy, Target, Calendar } from 'lucide-react'

const ProfilePage = () => {
  return (
    (<div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/placeholder.svg?height=200&width=1000&text=Banner+Image"
                alt="Profile Banner"
                className="w-full h-48 object-cover rounded-t-lg" />
              <Button size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="px-6 pb-6">
              <div className="flex items-end -mt-12 mb-4">
                <Avatar className="w-24 h-24 border-4 border-white">
                  <AvatarImage src="/placeholder.svg?height=96&width=96&text=TG" alt="Théo G." />
                  <AvatarFallback>TG</AvatarFallback>
                </Avatar>
                <div className="ml-4 mb-2">
                  <h2 className="text-2xl font-bold">Théo G.</h2>
                  <p className="text-gray-600">Fullstack Developer</p>
                </div>
                <div className="ml-auto flex space-x-2">
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">625</span>
                    <span className="text-gray-600 ml-1">credits</span>
                  </div>
                  <div className="text-gray-600">|</div>
                  <div>
                    <span className="font-semibold">16</span>
                    <span className="text-gray-600 ml-1">Level</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">856 / 1200 xp</div>
                  <Progress value={71} className="w-32" />
                  <div className="text-xs text-gray-500">56,032 xp total</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Completed:</span>
                  <span className="font-semibold">132 / 314</span>
                </div>
                <Progress value={42} />
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-semibold">314</span>
                </div>
                <div className="flex justify-between">
                  <span>Completed:</span>
                  <span className="font-semibold text-green-600">132</span>
                </div>
                <div className="flex justify-between">
                  <span>In progress:</span>
                  <span className="font-semibold text-yellow-600">15</span>
                </div>
                <div className="flex justify-between">
                  <span>Overdue:</span>
                  <span className="font-semibold text-red-600">4</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="month">
                <TabsList className="mb-4">
                  <TabsTrigger value="month">This Month</TabsTrigger>
                  <TabsTrigger value="year">This Year</TabsTrigger>
                  <TabsTrigger value="all">All Time</TabsTrigger>
                </TabsList>
                <TabsContent value="month" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">78</div>
                    <div className="text-gray-600">Quests completed</div>
                  </div>
                  <Button className="w-full">
                    <Target className="h-4 w-4 mr-2" />
                    View Quests
                  </Button>
                </TabsContent>
                <TabsContent value="year" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">412</div>
                    <div className="text-gray-600">Quests completed</div>
                  </div>
                  <Button className="w-full">
                    <Target className="h-4 w-4 mr-2" />
                    View Quests
                  </Button>
                </TabsContent>
                <TabsContent value="all" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">1,245</div>
                    <div className="text-gray-600">Quests completed</div>
                  </div>
                  <Button className="w-full">
                    <Target className="h-4 w-4 mr-2" />
                    View Quests
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="month">
                <TabsList className="mb-4">
                  <TabsTrigger value="month">This Month</TabsTrigger>
                  <TabsTrigger value="year">This Year</TabsTrigger>
                  <TabsTrigger value="all">All Time</TabsTrigger>
                </TabsList>
                <TabsContent value="month" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">#2</div>
                    <div className="text-gray-600">Total XP Ranking</div>
                  </div>
                  <Button className="w-full">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                </TabsContent>
                <TabsContent value="year" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">#5</div>
                    <div className="text-gray-600">Total XP Ranking</div>
                  </div>
                  <Button className="w-full">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                </TabsContent>
                <TabsContent value="all" className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">#12</div>
                    <div className="text-gray-600">Total XP Ranking</div>
                  </div>
                  <Button className="w-full">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Completed Quest: Design System Update</h3>
                    <p className="text-sm text-gray-600">Earned 50 XP and 2 credits</p>
                  </div>
                  <div className="ml-auto text-sm text-gray-500">2 days ago</div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Activity</Button>
          </CardContent>
        </Card>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <Button size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
        <Button size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Button size="icon" className="rounded-full">
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button size="icon" className="rounded-full">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>)
  );
}

export default ProfilePage