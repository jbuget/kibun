import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './localhost.datasource.json';

export class LocalhostDataSource extends juggler.DataSource {
  static dataSourceName = 'localhost';

  constructor(
    @inject('datasources.config.localhost', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
