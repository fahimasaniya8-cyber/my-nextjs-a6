'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [planItems, setPlanItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const plan = JSON.parse(localStorage.getItem('fitlog-plan') || '[]');
    const saved = JSON.parse(localStorage.getItem('fitlog-saved') || '[]');

    setPlanItems(plan);
    setSavedItems(saved);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem('fitlog-plan', JSON.stringify(planItems));
    }
  }, [planItems, loaded]);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem('fitlog-saved', JSON.stringify(savedItems));
    }
  }, [savedItems, loaded]);

  const addToPlan = workout => {
    setPlanItems(prev => {
      if (prev.length >= 5) {
        return prev;
      }

      if (prev.some(item => item.id === workout.id)) {
        return prev;
      }

      return [...prev, { ...workout, done: false }];
    });
  };

  const addToSaved = workout => {
    setSavedItems(prev => {
      if (prev.some(item => item.id === workout.id)) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = id => {
    setPlanItems(prev => prev.filter(item => item.id !== id));
  };

  const removeFromSaved = id => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const markAsDone = id => {
    setPlanItems(prev =>
      prev.map(item => (item.id === id ? { ...item, done: !item.done } : item)),
    );
  };

  return (
    <PlanContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        loaded,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
