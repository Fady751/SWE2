import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private userData: any = null;

  constructor() { }

  async ngOnInit() {

  }

  async setUser(user: any): Promise<void> {
    this.userData = user;
    if(this.userData && !this.userData.urlphoto) {
      this.userData.urlphoto = 'images/defProfile.jpg';
    }
  }

  async getUser() {

    if(this.userData)
      return this.userData;
    
    const token = localStorage.getItem('WSToken');

    const req = await fetch('http://localhost:3000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });

    if (!req.ok) {
      return this.userData = null;
    }

    this.userData = (await req.json()).user;
    await this.setUser(this.userData);

    return this.userData;
  }
}
