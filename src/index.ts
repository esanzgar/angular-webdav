import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
