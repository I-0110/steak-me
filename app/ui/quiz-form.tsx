"use client";

import { ArrowRightIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Priority, Doneness } from '../lib/steak-selector-data';

export default function SteakQuizForm() {
  const [priorities, setPriorities] = useState<Priority[]>(['cost', 'texture', 'flavor']);
  const [doneness, setDoneness] = useState<Doneness | ''>('');
  const [drag, setDrag] = useState<Priority | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Match the data format with hyphens
  const donenessOptions: { label: string; value: Doneness }[] = [
    { label: 'Rare', value: 'rare' },
    { label: 'Medium Rare', value: 'medium-rare' },
    { label: 'Medium', value: 'medium' },
    { label: 'Medium Well', value: 'medium-well' },
    { label: 'Well Done', value: 'well-done' }
  ];

  const handleDragStart = (item: Priority) => {
    setDrag(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetItem: Priority) => {
    if (!drag) return;

    const newPriorities = [...priorities];
    const dragIndex = priorities.indexOf(drag);
    const targetIndex = priorities.indexOf(targetItem);

    newPriorities.splice(dragIndex, 1);
    newPriorities.splice(targetIndex, 0, drag);

    setPriorities(newPriorities);
    setDrag(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!doneness) {
        setErrorMessage('Please select a doneness level');
        return;
    }

    // Build URL with query parameters for the results page
    const params = new URLSearchParams({
      priority1: priorities[0],
      priority2: priorities[1],
      priority3: priorities[2],
      doneness: doneness
    });
    
    // Navigate to results page
    window.location.href = `/results?${params.toString()}`;
  };

  const getPriorityLabel = (index: number) => {
    if (index === 0) return 'Top Priority';
    if (index === 1) return 'Medium Priority';
    return 'Bottom Priority';
  };

  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`text-steak-400 mb-3 text-2xl`}>
          Please answer these questions: 
        </h1>
        <div className="w-full">
          <label
            className="mb-3 mt-5 block text-lg text-black"
            htmlFor="priority"
          >
            Question 1: Organize Your Priorities
          </label>
          <p className="mb-4 text-sm text-gray-800">
            Drag to reorder from most important (top) to least important (bottom).
          </p>

          <div className="space-y-3">
            {priorities.map((priority, index) => (
              <div
                key={priority}
                draggable
                onDragStart={() => handleDragStart(priority)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(priority)}
                className="bg-transparent text-black p-4 rounded-md border-steak-400 border-2 cursor-move hover:bg-steak-100 hover:text-white transition-colors"
              >
                <div className="flex justify-between items-center text-gray-800 hover:text-white">
                  <span className="font-medium capitalize">{priority}</span>
                  <span className="text-sm">{getPriorityLabel(index)}</span>
                </div>
              </div>
            ))}
          </div>

          <label
            className="mb-3 mt-5 block text-lg text-black"
            htmlFor="doneness"
          >
            Question 2: Select Your Preferred Doneness
          </label>

          <div className="mb-6">
            <select
              id="doneness"
              name="doneness"
              value={doneness}
              onChange={(e) => setDoneness(e.target.value as Doneness)}
              className="peer block w-full bg-transparent text-black p-4 rounded-md border-2 border-steak-400 cursor-move hover:bg-steak-100 hover:text-white transition-colors text-sm outline-2 placeholder:text-gray-800 focus:ring-2"
              aria-describedby="doneness-error"
            >
              <option value="">
                Select Doneness
              </option>
              {donenessOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <button
              className="w-1/3 flex items-center justify-center gap-2 rounded-lg bg-steak-300 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-steak-100"
              type="button"
              onClick={handleSubmit}
            >
              Submit <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex h-8 items-end space-x-1 mt-2">
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>  
            )}
          </div>
        </div>
      </div>
    </div>
  );
}