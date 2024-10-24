

'use client';
import { React , useState} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import imageToUse from "@/assets/mylogo.png" 
import { CreateNewModalComponent } from "@/components/create-new-modal"
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Users,
  ChevronDown,
  Star,
  MoreHorizontal,
  ArrowUpRight,
  Bell,
  MessageSquare,
  Settings,
  Plus,
  MoreHorizontalIcon,
  
} from 'lucide-react'
import { ProjectsComponent } from './projects';
import TaskManagement from './task-management';
import ActivityFeedPopup from './activity-feed-popup';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from './ui/scroll-area';
import { Calendar } from './ui/calendar';
import { Separator } from './ui/separator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Component from './ui/chartComponent';
import MessagingPopup from './messaging-popup';


let Sidebar = ({ activePage, setActivePage }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  return( 
    <ScrollArea>
  <div className="w-25 bg-white border-r p-4 flex flex-col h-120">
    <div className="flex items-center mb-8">
      <div className="w-8 h-8 bg-purple-600 rounded-sm mr-2">
         <img src={imageToUse}></img>
      </div>
      <h1 className="text-xl font-bold">Rexwork's</h1>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <Avatar className="w-16 h-16 mb-2">
        <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Théo G." />
        <AvatarFallback>TG</AvatarFallback>
      </Avatar>
      <h2 className="font-semibold">Théo G.</h2>
      <p className="text-sm text-gray-600">Fullstack developer</p>
      <div className="mt-2 bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center">
        <span className="font-semibold mr-1">856</span>
        <span className="text-gray-600">/ 1200 xp</span>
      </div>
    </div>
    <nav className="space-y-2 flex-grow">
    <Button 
          variant={activePage === 'dashboard' ? "default" : "ghost"} 
          className="w-full justify-start"
          onClick={() => setActivePage('dashboard')}
        >      
        <LayoutDashboard className="mr-2 h-4 w-4" />
        Home
      </Button>
      <Button 
          variant={activePage === 'projects' ? "default" : "ghost"} 
          className="w-full justify-start"
          onClick={() => setActivePage('projects')}
        >       
         <FileText className="mr-2 h-4 w-4" />
        Projects
      </Button>
      <Button 
          variant={activePage === 'tasks' ? "default" : "ghost"} 
          className="w-full justify-start"
          onClick={() => setActivePage('tasks')}
        >  
        <CheckSquare className="mr-2 h-4 w-4" />
        Tasks
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Users className="mr-2 h-4 w-4" />
        Contacts
      </Button>
      <Component/>
    </nav>
    <Accordion type="single" collapsible className="w-full pl-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>Favorites</AccordionTrigger>
        <AccordionContent>
        <ul className="space-y-1">
        <li className="flex items-center text-sm">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
          Refactoring project..
        </li>
        <li className="flex items-center text-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
          Rexwork's
        </li>
        <li className="flex items-center text-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Alternative to..
        </li>
      </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Button 
        className="mt-4" 
        variant="outline"
        onClick={() => setIsCreateModalOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        New
      </Button>
      <CreateNewModalComponent 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />

  </div>
  </ScrollArea>
  )
}

const Stats = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Stats</CardTitle>
      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">132 / 314</div>
      <Progress value={42} className="mt-2" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <div className="text-sm font-medium">In progress:</div>
          <div className="text-2xl font-bold text-orange-500">15</div>
        </div>
        <div>
          <div className="text-sm font-medium">Overdue:</div>
          <div className="text-2xl font-bold text-red-500">4</div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ActivityFeed = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Activity Feed</CardTitle>
      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex items-start">
          <Badge className="mr-2 mt-1">✓</Badge>
          <div>
            <p className="font-medium">Task completed</p>
            <p className="text-sm text-muted-foreground">Finish the application wireframe</p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="William R." />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <div>
            <p><span className="font-medium">William R.</span> assigned you a task:</p>
            <p className="text-sm text-muted-foreground">Develop the back-end</p>
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ProjectCard = ({
  name,
  description,
  completion,
  members
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{name}</CardTitle>
      <div className="flex items-center">
        <Star className="h-4 w-4 text-yellow-400 mr-1" />
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Completion</span>
          <span>{completion}%</span>
        </div>
        <Progress value={completion} />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Member" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">+{members} members</span>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardContent>
  </Card>
)

const WeeklyCalendar = () => (
  <Card className="col-span-full">
    <CardHeader>
      <CardTitle>Schedule</CardTitle>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="January">
        <TabsList>
          <TabsTrigger value="January">January</TabsTrigger>
        </TabsList>
        <TabsContent value="January">
          <div className="grid grid-cols-7 gap-4 mt-4">
            {['7', '8', '9', '10', '11', '12', '13'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="font-medium">{day}</div>
                <div className="text-sm text-muted-foreground">
                  {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'][index]}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="bg-purple-100 p-2 rounded">
              <p className="font-medium">Meeting with client 4</p>
              <p className="text-sm text-muted-foreground">From Jan 8 - Jan 11</p>
            </div>
            <div className="bg-blue-100 p-2 rounded">
              <p className="font-medium">Production deployment</p>
              <p className="text-sm text-muted-foreground">From Jan 8 - Jan 13</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
)

const DashboardComponent = () => {
  const [activePage, setActivePage] = useState('dashboard')
  const [popupVisible, setPopupVisible] = useState(false);
  const bellButton = <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
  const messagingButton=<Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>


  return (
    (
      <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100">
          { activePage==='dashboard' &&(
          <><h2 className="text-2xl font-bold mb-6">Dashboard</h2><div className="grid grid-cols-3 gap-6 mb-6">
              <Stats />
              <ActivityFeed />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-2xl font-bold">180</CardTitle>
                  <Badge variant="outline">Last month</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">Completed quests</p>
                  <Button variant="outline" className="mt-4">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Quests
                  </Button>
                </CardContent>
              </Card>
            </div><h3 className="text-xl font-bold mb-4">Ongoing Projects</h3><div className="grid grid-cols-3 gap-6 mb-6">
                <ProjectCard
                  name="Rexork's"
                  description="A brief explanation of what this project is about"
                  completion={25}
                  members={2} />
                <ProjectCard
                  name="Goyave"
                  description="Travel expense management app project"
                  completion={50}
                  members={5} />
                <ProjectCard
                  name="Omega"
                  description="Smart home connectivity app project"
                  completion={6}
                  members={5} />
              </div><WeeklyCalendar /></>
          )}
          {activePage === 'projects' 
          && <ProjectsComponent />}
          {activePage === 'tasks'
          && <TaskManagement />}
          </main>
         

      </div>
      <div className="absolute top-4 right-4">
        <Button onClick={
          () => setPopupVisible(!popupVisible)
          } className="mr-10" variant="ghost"><MoreHorizontalIcon/></Button>
      </div>
      {popupVisible && (
        <div className="absolute top-16 right-4 bg-grey shadow-lg rounded-lg p-4 w-54 z-50 mr-4">
          <div className="flex items-center space-x-4">
            <ActivityFeedPopup triggerButton={bellButton}/>
            <MessagingPopup triggerButton={messagingButton}/>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
   
    )
  );
}

export {DashboardComponent};