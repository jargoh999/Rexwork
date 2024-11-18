import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MoreVertical, Send } from 'lucide-react'

const messages = [
  { id: '1', content: "Were you able to attend this morning's meeting?", sender: 'other', timestamp: '2h ago' },
  { id: '2', content: "Yes, very informative", sender: 'user', timestamp: '2h ago' },
  { id: '3', content: "I'll get back to you", sender: 'other', timestamp: '2h ago' },
]

const MessagingPopup = ({ triggerButton }) => {
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    (<Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Messaging</span>
            <Button variant="ghost" size="icon">
              {/* <MoreVertical className="h-4 w-4" /> */}
            </Button>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <React.Fragment key={message.id}>
                {(index === 0 || new Date(messages[index - 1].timestamp).toDateString() !== new Date(message.timestamp).toDateString()) && (
                  <div className="text-center text-sm text-gray-500 my-2">
                    {new Date().toLocaleDateString()}
                  </div>
                )}
                <div
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                    className={`max-w-[70%] ${message.sender === 'user' ? 'bg-gray-200' : 'bg-green-500 text-white'} rounded-lg p-3`}>
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
                </div>
              </React.Fragment>
            ))}
      </div>
        </ScrollArea>
        <form onSubmit={handleSendMessage} className="flex items-center mt-4">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow" />
          <Button type="submit" size="icon" className="ml-2 bg-green-500">
            <Send className="h-4 w-4"/>
          </Button>
        </form>
      </DialogContent>
    </Dialog>)
  );
}

export default MessagingPopup
