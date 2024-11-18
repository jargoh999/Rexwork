

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mail, Phone, MessageSquare, Star, MoreHorizontal, UserPlus } from 'lucide-react';

const contacts = [
  { id: '1', name: 'Alice Johnson', role: 'UI Designer', email: 'alice@example.com', phone: '+1 234 567 890', avatar: 'AJ', favorite: true },
  { id: '2', name: 'Bob Smith', role: 'Frontend Developer', email: 'bob@example.com', phone: '+1 234 567 891', avatar: 'BS', favorite: false },
  { id: '3', name: 'Charlie Brown', role: 'Project Manager', email: 'charlie@example.com', phone: '+1 234 567 892', avatar: 'CB', favorite: true },
  { id: '4', name: 'Diana Ross', role: 'Backend Developer', email: 'diana@example.com', phone: '+1 234 567 893', avatar: 'DR', favorite: false },
  { id: '5', name: 'Ethan Hunt', role: 'QA Engineer', email: 'ethan@example.com', phone: '+1 234 567 894', avatar: 'EH', favorite: false },
];

const ContactCard = ({ contact }) => (
  <Card>
    <CardContent className="flex items-center p-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={`/placeholder.svg?text=${contact.avatar}`} alt={contact.name} />
        <AvatarFallback>{contact.avatar}</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex-grow">
        <h3 className="font-semibold">{contact.name}</h3>
        <p className="text-sm text-gray-500">{contact.role}</p>
      </div>
      <div className="flex space-x-2">
        <div className="relative group">
          <Button size="icon" variant="ghost">
            <Mail className="h-4 w-4" />
          </Button>
          <span className="absolute bottom-full mb-1 hidden group-hover:block px-2 py-1 text-xs text-white bg-green-500 rounded">
            {contact.email}
          </span>
        </div>
        <div className="relative group">
          <Button size="icon" variant="ghost">
            <Phone className="h-4 w-4" />
          </Button>
          <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-3 text-xs text-white w-[120px] h-[50px] bg-[#E6AE9E] rounded">
            {contact.phone}
          </span>
        </div>
        <div className="relative group">
          <Button size="icon" variant="ghost">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <span className="absolute bottom-full mb-1 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded">
            Send a message
          </span>
        </div>
        <div className="relative group">
          <Button size="icon" variant="ghost">
            <Star className={`h-4 w-4 ${contact.favorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
          </Button>
          <span className="absolute bottom-full mb-1 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded">
            {contact.favorite ? 'Unfavorite' : 'Favorite'}
          </span>
        </div>
        <div className="relative group">
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <span className="absolute bottom-full mb-1 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded">
            More options
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ContactsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#E6AE9E]">Contacts</h1>
        <Button className="mt-[100px]">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
          icon={<Search className="h-4 w-4 text-gray-500" />}
        />
      </div>
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Contacts</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {filteredContacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </TabsContent>
        <TabsContent value="favorites" className="space-y-4">
          {filteredContacts.filter(contact => contact.favorite).map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          {filteredContacts.slice(0, 3).map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContactsPage;
