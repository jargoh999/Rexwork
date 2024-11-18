// 'use client';
// import React from 'react'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { CheckCircle2, CalendarPlus, UserPlus } from 'lucide-react'

// const activities = [
//   { id: '1', type: 'task', content: 'Very long task name to show that the text adapts', time: '2h ago' },
//   { id: '2', type: 'assignment', content: 'Meeting with Client', user: 'William R.', time: '4h ago' },
//   { id: '3', type: 'event', content: 'New task', project: 'Taskiro', time: '5h ago' },
//   { id: '4', type: 'task', content: 'Another very long task name to show that the text adapts', time: '1d ago' },
//   { id: '5', type: 'assignment', content: 'Finish the project', user: 'William R.', time: '1d ago' },
//   { id: '6', type: 'event', content: 'New task', project: 'Taskiro', time: '2d ago' },
// ]

// const ActivityIcon = ({
//   type
// }) => {
//   switch (type) {
//     case 'task':
//       return <CheckCircle2 className="h-5 w-5 text-green-500" />;
//     case 'assignment':
//       return <UserPlus className="h-5 w-5 text-blue-500" />;
//     case 'event':
//       return <CalendarPlus className="h-5 w-5 text-purple-500" />;
//   }
// }

// const ActivityFeedPopup = () => {
//   return (
//     (<Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">View Activity Feed</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Activity Feed</DialogTitle>
//         </DialogHeader>
//         <ScrollArea className="h-[60vh] w-full pr-4">
//           {activities.map((activity) => (
//             <div key={activity.id} className="flex items-start space-x-4 mb-4 last:mb-0">
//               <ActivityIcon type={activity.type} />
//               <div className="flex-1 space-y-1">
//                 <p className="text-sm font-medium leading-none">
//                   {activity.type === 'task' && 'Task completed: '}
//                   {activity.type === 'assignment' && (
//                     <span className="font-semibold text-blue-600">{activity.user} </span>
//                   )}
//                   {activity.type === 'event' && (
//                     <span>Event added to <span className="font-semibold text-purple-600">{activity.project}</span>: </span>
//                   )}
//                   {activity.content}
//                 </p>
//                 <p className="text-sm text-muted-foreground">{activity.time}</p>
//               </div>
//               <Button variant="ghost" size="icon" className="shrink-0">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-5 h-5">
//                   <path
//                     fillRule="evenodd"
//                     d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                     clipRule="evenodd" />
//                 </svg>
//               </Button>
//             </div>
//           ))}
//         </ScrollArea>
//       </DialogContent>
//     </Dialog>)
//   );
// }

// export default ActivityFeedPopup

'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, CalendarPlus, UserPlus } from 'lucide-react';

const activities = [
  { id: '1', type: 'task', content: 'Very long task name to show that the text adapts', time: '2h ago' },
  { id: '2', type: 'assignment', content: 'Meeting with Client', user: 'William R.', time: '4h ago' },
  { id: '3', type: 'event', content: 'New task', project: 'Taskiro', time: '5h ago' },
  { id: '4', type: 'task', content: 'Another very long task name to show that the text adapts', time: '1d ago' },
  { id: '5', type: 'assignment', content: 'Finish the project', user: 'William R.', time: '1d ago' },
  { id: '6', type: 'event', content: 'New task', project: 'Taskiro', time: '2d ago' },
];

const ActivityIcon = ({ type }) => {
  switch (type) {
    case 'task':
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case 'assignment':
      return <UserPlus className="h-5 w-5 text-blue-500" />;
    case 'event':
      return <CalendarPlus className="h-5 w-5 text-purple-500" />;
  }
};

const ActivityFeedPopup = ({ triggerButton }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Activity Feed</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full pr-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 mb-4 last:mb-0">
              <ActivityIcon type={activity.type} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.type === 'task' && 'Task completed: '}
                  {activity.type === 'assignment' && (
                    <span className="font-semibold text-blue-600">{activity.user} </span>
                  )}
                  {activity.type === 'event' && (
                    <span>Event added to <span className="font-semibold text-purple-600">{activity.project}</span>: </span>
                  )}
                  {activity.content}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5">
                <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityFeedPopup;
