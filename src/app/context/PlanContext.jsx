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
    if (loaded) localStorage.setItem('fitlog-plan', JSON.stringify(planItems));
  }, [planItems, loaded]);

  useEffect(() => {
    if (loaded)
      localStorage.setItem('fitlog-saved', JSON.stringify(savedItems));
  }, [savedItems, loaded]);

  const addToPlan = workout => {
    setPlanItems(prev =>
      prev.some(w => w.id === workout.id)
        ? prev
        : [...prev, { ...workout, done: false }],
    );
  };

  const addToSaved = workout => {
    setSavedItems(prev =>
      prev.some(w => w.id === workout.id) ? prev : [...prev, workout],
    );
  };

  const removeFromPlan = id =>
    setPlanItems(prev => prev.filter(w => w.id !== id));
  const removeFromSaved = id =>
    setSavedItems(prev => prev.filter(w => w.id !== id));

  const markAsDone = id => {
    setPlanItems(prev =>
      prev.map(w => (w.id === id ? { ...w, done: !w.done } : w)),
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
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
