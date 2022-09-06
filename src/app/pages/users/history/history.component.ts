import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UsersService } from 'src/app/services/users.service'

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
	constructor(private userService: UsersService, private router: Router) {}

	ngOnInit(): void {}

	logout() {
		this.userService.signOut().subscribe(() => {
			this.router.navigate(['/home'])
		})
	}
}
