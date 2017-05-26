import { ModuleUnit } from './module-unit.model';

export class Project {
  id: string;
  name: string;
  grade: string;
  desc: string;
  type: string;
  modulesUnits: [ModuleUnit];
}
