"use client";

import { useSearchParams } from 'next/navigation';
import { getRecommendation, Priority, Doneness } from '../lib/steak-selector-data';
import Link from 'next/link';

export default function QuizResults() {
  const searchParams = useSearchParams();
  
  const priority1 = searchParams.get('priority1') as Priority;
  const priority2 = searchParams.get('priority2') as Priority;
  const priority3 = searchParams.get('priority3') as Priority;
  const doneness = searchParams.get('doneness') as Doneness;

  // Validate that we have all required parameters
  if (!priority1 || !priority2 || !priority3 || !doneness) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-red-800 mb-2">Missing Information</h2>
          <p className="text-red-600">Please complete the quiz to see your results.</p>
          <Link 
            href="/quiz" 
            className="mt-4 inline-block bg-steak-300 text-white px-6 py-2 rounded-lg hover:bg-steak-100 transition-colors"
          >
            Take Quiz
          </Link>
        </div>
      </div>
    );
  }

  const priorities: [Priority, Priority, Priority] = [priority1, priority2, priority3];
  const result = getRecommendation(priorities, doneness);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className={`text-5xl text-black dark:text-white  mb-2`}>Your Steak Recommendations</h1>
        <p className="text-black dark:text-stone-50 text-2xl">
        Based on your priorities: {priorities.join(' → ')} | Doneness: {doneness}
        </p>

        {/* Options Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A */}
            <div className="bg-steak-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{result.optionA}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                {result.descriptionA}
                </p>
            </div>
            </div>

            {/* Option B */}
            <div className="bg-steak-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{result.optionB}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                {result.descriptionB}
                </p>
            </div>
            </div>
        </div>

        {/* Actions */}
        <div className="px-8 py-6 flex gap-4">
          <Link 
            href="/quiz" 
            className="flex-1 text-center bg-steak-300 text-white px-6 py-3 rounded-lg hover:bg-steak-100 transition-colors font-medium"
          >
            Retake Quiz
          </Link>
          <Link 
            href="/" 
            className="flex-1 text-center bg-steak-50 text-gray-800 px-6 py-3 rounded-lg hover:bg-steak-50 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
  );
}