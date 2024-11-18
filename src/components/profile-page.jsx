import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, MessageSquare, Search, Settings, Edit, Share2, Trophy, Target, Calendar, Plus, PlusIcon, PlusCircleIcon } from 'lucide-react'
import profilePage from "@/assets/profilePage.png"
import creditIcon from "@/assets/Group 73.png"
import LevelIndicator from './level-indicator'

const ProfilePage = () => {
  return (
    (<div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-[#E6AE9E]">Profile</h1>
      <Card className="mb-8 bg-[#413E54]">
        <CardContent className="p-0">
          <div className="relative-1">
            <img
                src={profilePage}
                alt="Profile Banner"
                className="w-full h-full object-cover rounded-t-lg"/>
              {/* <Button size="icon" className="absolute-1 top-right-2 bg-[#413E54] hover:bg-[#413E54] text-white" variant="outline">
                <Edit className="h-4 w-4"/>
              </Button> */}
            </div>
            <div className="px-6 pb-6">
              <div className="flex items-end -mt-12 mb-4">
                <Avatar className="w-24 h-24 border-4 border-white">
                  <AvatarImage src="/placeholder.svg?height=96&width=96&text=TG" alt="Théo G." />
                  <AvatarFallback>TG</AvatarFallback>
                </Avatar>
                <div className="flex w-23 ml-17">
                  <img src={creditIcon} className='h-19 w-19'/>
                  <Button className={"hover:bg-[#413E54] hover:text-grey bg-[#413E54] text-gray-200 mt-5 "} variant="outline" >625</Button>
                  <Button className={"hover:bg-[#413E54] hover:text-grey bg-[#413E54] text-gray-200 h-5 w-5 mt-7 ml-3"} variant="outline" ><strong>+</strong></Button>
                </div>
                <div className={'ml-[300px]'}>
                   <LevelIndicator level={34} currentXP={10} levelXP={30} totalXP={50} /> 
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
      {/* <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
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
      </div> */}
    </div>)
  );
}

export default ProfilePage