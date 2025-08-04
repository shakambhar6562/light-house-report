import React from 'react';

const CircularProgress = ({ value, size = 80, strokeWidth = 8, color }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      {/* Value text in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-800">
          {value}
        </span>
      </div>
    </div>
  );
};

const PerformanceMetrics = ({ data }) => {
  // Default data if none provided
  const defaultData = [
    { label: 'Performance', value: 26, color: '#ef4444' }, // red
    { label: 'Accessibility', value: 86, color: '#f97316' }, // orange
    { label: 'Best Practices', value: 57, color: '#f97316' }, // orange
    { label: 'SEO', value: 82, color: '#f97316' } // orange
  ];

  const metricsData = data || defaultData;

  const getColorByValue = (value) => {
    if (value < 50) return '#ef4444'; // red
    if (value < 90) return '#f97316'; // orange
    return '#22c55e'; // green
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metricsData.map((metric, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            {/* Circular Progress */}
            <CircularProgress
              value={metric.value}
              color={metric.color || getColorByValue(metric.value)}
              size={80}
              strokeWidth={6}
            />
            
            {/* Label */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 leading-tight">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component
const App = () => {
  const sampleData = [
    { label: 'Performance', value: 26, color: '#ef4444' },
    { label: 'Accessibility', value: 86, color: '#f97316' },
    { label: 'Best Practices', value: 57, color: '#f97316' },
    { label: 'SEO', value: 82, color: '#f97316' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Website Performance Metrics
        </h1>
        
        <div className="space-y-8">
          {/* Main example */}
          <PerformanceMetrics data={sampleData} />
          
          {/* Custom example */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Custom Example:
            </h2>
            <PerformanceMetrics 
              data={[
                { label: 'Speed', value: 95, color: '#22c55e' },
                { label: 'Security', value: 78, color: '#f97316' },
                { label: 'Quality', value: 42, color: '#ef4444' },
                { label: 'Reliability', value: 89, color: '#22c55e' }
              ]} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;