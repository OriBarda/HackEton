import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LessonContext = createContext();

axios.defaults.withCredentials = true;

const LessonProvider = ({ children }) => {

    const handleCreateLesson = async (lesson) => {
        try {
            response = await axios.post(
                `${import.meta.env.VITE_FRONTEND}/lesson`,
                lesson
            );
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleEditLesson = async (lesson) => {
        try {
            response = await axios.post(
                `${import.meta.env.VITE_FRONTEND}/lesson/update`,
                lesson
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteLesson = async (lessonId) => {
        try {
            await axios.delete(`${import.meta.env.VITE_FRONTEND}/lesson`, lessonId);
        } catch (err) {
            console.log(err);
        }
    };

    const contextValues = {
        //v
        //a
        handleCreateLesson,
        handleEditLesson,
        handleDeleteLesson,
    };

    return (
        <LessonContext.Provider value={contextValues}>
            {children}
        </LessonContext.Provider>
    );
};

export { LessonContext, LessonProvider };
