import React from 'react';

interface UserCourseCardProps {
  userName: string;
  avatarUrl: string | null;
  courses: { id: string; title: string }[];
}

const UserCourseCard: React.FC<UserCourseCardProps> = ({ userName, avatarUrl, courses }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm flex flex-col items-center">
      {avatarUrl && <img src={avatarUrl} alt={`${userName}'s avatar`} className="w-16 h-16 rounded-full mb-2" />}
      <h2 className="text-xl font-semibold mb-2">Identity: {userName}</h2>
      <h3 className="text-lg font-medium mb-2">Courses Published:</h3>
      <ul className="list-disc list-inside">
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCourseCard;
