import React from "react";
import { Friends } from "@/pages/friends";
import { Portfolio } from "@/pages/portfolio";
import { Tasks } from "@/pages/tasks";
import { Route } from "react-router-dom";
import { TasksFull } from "@/pages/tasks-full";

export const App: React.FC = () => {
    return (
        <Route path="/" element={<Portfolio />}>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks-full" element={<TasksFull />} />
        </Route>
    );
}