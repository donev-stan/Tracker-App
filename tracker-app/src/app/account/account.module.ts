import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountEditComponent } from './account-edit/account-edit.component';

@NgModule({
  declarations: [
    AccountInfoComponent,
    AccountCreateComponent,
    AccountEditComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
