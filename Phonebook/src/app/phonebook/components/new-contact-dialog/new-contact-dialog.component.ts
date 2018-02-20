import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  user: User

  name = new FormControl('', Validators.required)
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5']
  getErrorMessage() {
    this.name.hasError('required')
    return 'You must enter a name'
  }

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User()
  }

  save(): void{
    this.userService.addUser(this.user).then(user=>{
      this.dialogRef.close()
    })
  }

  close():void{
    this.dialogRef.close(null)
  }

}
