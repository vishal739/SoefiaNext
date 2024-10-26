export interface GroupedLessons {
    today?: LessonNote[];
    thisWeek?: LessonNote[];
    nextWeek?: LessonNote[];
    next30Days?: LessonNote[];
    past?: LessonNote[];
}

const groupLessonsByTime = (
  lessons: LessonNote[],
  isCompleted: boolean
): GroupedLessons => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of the day
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (7 - today.getDay()));
  const startOfNextWeek = new Date(endOfWeek);
  startOfNextWeek.setDate(endOfWeek.getDate() + 1);
  const endOfNextWeek = new Date(startOfNextWeek);
  endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
  const next30Days = new Date(today);
  next30Days.setDate(today.getDate() + 30);

  if (isCompleted) {
    return {
      past: lessons.filter((lesson) => {
        const lessonDate = new Date(lesson.lessonDate);
        return lessonDate < today;
      }),
    };
  }

  return {
    today: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate.toDateString() === today.toDateString();
    }),
    thisWeek: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate > today && lessonDate <= endOfWeek;
    }),
    nextWeek: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate >= startOfNextWeek && lessonDate <= endOfNextWeek;
    }),
    next30Days: lessons.filter((lesson) => {
      const lessonDate = new Date(lesson.lessonDate);
      return lessonDate > endOfNextWeek && lessonDate <= next30Days;
    }),
  };
};
export default groupLessonsByTime;