
import type { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'React: From Beginner to Advanced',
    instructor: 'Jane Doe',
    price: 129.99,
    imageUrl: 'https://picsum.photos/seed/react/600/400',
    description: 'A comprehensive guide to mastering React, from core concepts to advanced patterns like Hooks and Context.',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: 2,
    title: 'Modern Python for Data Science',
    instructor: 'John Smith',
    price: 149.99,
    imageUrl: 'https://picsum.photos/seed/python/600/400',
    description: 'Learn Python programming and its application in the world of data science with libraries like Pandas and NumPy.',
    tags: ['Python', 'Data Science', 'Machine Learning'],
  },
  {
    id: 3,
    title: 'Go (Golang) for Backend Development',
    instructor: 'Emily White',
    price: 119.99,
    imageUrl: 'https://picsum.photos/seed/golang/600/400',
    description: 'Build fast, scalable, and concurrent backend services with Google\'s Go programming language.',
    tags: ['Go', 'Backend', 'API'],
  },
  {
    id: 4,
    title: 'Node.js & Express - Full Course',
    instructor: 'Chris Green',
    price: 99.99,
    imageUrl: 'https://picsum.photos/seed/nodejs/600/400',
    description: 'Create powerful REST APIs and backend applications using Node.js and the popular Express framework.',
    tags: ['Node.js', 'JavaScript', 'Backend'],
  },
  {
    id: 5,
    title: 'Advanced TypeScript & Design Patterns',
    instructor: 'Sophia Blue',
    price: 159.99,
    imageUrl: 'https://picsum.photos/seed/typescript/600/400',
    description: 'Take your TypeScript skills to the next level by learning advanced types, decorators, and software design patterns.',
    tags: ['TypeScript', 'Frontend', 'Software Design'],
  },
  {
    id: 6,
    title: 'DevOps Fundamentals with Docker & K8s',
    instructor: 'David Black',
    price: 179.99,
    imageUrl: 'https://picsum.photos/seed/devops/600/400',
    description: 'An introduction to DevOps principles, containerization with Docker, and orchestration with Kubernetes.',
    tags: ['DevOps', 'Docker', 'Kubernetes'],
  },
];
