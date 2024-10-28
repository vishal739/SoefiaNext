import { v4 as uuidv4 } from 'uuid';

interface LessonNote {
    day: string;
    dayOfWeek: string;
    lessonDate: string;
    launchLessonLink: string;
    classname: string;
    topic: string;
}

const generateRandomDate = (year: number): Date => {
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateRandomLesson = (): LessonNote => {
    const currentYear = new Date().getFullYear();
    const date = generateRandomDate(currentYear);
    const day = date.getDate().toString();
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    const lessonDate = date.toISOString().split('T')[0];
    const classname = `Class ${Math.floor(Math.random() * 10) + 1}`;
    const topic = `Topic ${Math.floor(Math.random() * 100) + 1}`;
    const launchLessonLink = `/teacher/live-lesson`;

    return {
        day,
        dayOfWeek,
        lessonDate,
        launchLessonLink,
        classname,
        topic,
    };
};

const generateSampleLessons = (count: number): LessonNote[] => {
    const lessons: LessonNote[] = [];
    for (let i = 0; i < count; i++) {
        lessons.push(generateRandomLesson());
    }
    return lessons;
};

export default generateSampleLessons;