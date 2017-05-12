import { Course } from './course.model';
import { Project } from './project.model';

export class Person {
  id: string;
  name: string;
  email: string;
  role: string;
  telephone: string;
  sex: string;
  age: string;
  projects: [Project];
  courses: [Course];
  contact: { tel: string, wechat: string }
}
