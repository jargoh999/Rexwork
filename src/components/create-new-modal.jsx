
'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Network, LayoutGrid, CheckSquare } from 'lucide-react';

export function CreateNewModalComponent({ isOpen, onClose }) {
  const options = [
    { icon: Network, label: 'Project', onClick: () => console.log('Create Project') },
    { icon: LayoutGrid, label: 'Kanban', onClick: () => console.log('Create Kanban') },
    { icon: CheckSquare, label: 'Task', onClick: () => console.log('Create Task') },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[783px] h-96 animate-fadeIn">
        <div className="grid grid-cols-3 gap-4 py-3 h-37">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-34 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
              onClick={option.onClick}
            >
              <option.icon className="h-16 w-16 mb-2 animate-spin-slow" />
              <span>{option.label}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
