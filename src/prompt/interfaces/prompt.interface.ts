import { IBase } from '@/_common/base/interfaces/base.interface';

export interface IPrompt extends IBase {
  readonly title: string;
  readonly description: string;
}
