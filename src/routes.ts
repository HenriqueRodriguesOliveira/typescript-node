import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  
  CreateCourseService.execute({
    name: "NodeJS", 
    educator: "Henrique",
    duration: 10
  });
  
  CreateCourseService.execute({
    name: "ReactJS", 
    educator: "Rodrigues"
  });
  
  return response.send();
}