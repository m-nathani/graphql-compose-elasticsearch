import HttpRequest from './httpRequest';
import { PROJECT_SERVICE_HOST } from '../../config';

export default class ProjectService extends HttpRequest {
  private readonly path: string;

  constructor(path: string) {
    super(PROJECT_SERVICE_HOST);
    this.path = `${PROJECT_SERVICE_HOST}/${path}`;
  }

  public createProject(data: any) {
    return this.create(this.path, data);
  }
}
