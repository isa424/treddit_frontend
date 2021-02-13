export interface IUser {
	id: string;
	username: string;
	email: string;
}

export interface IPost {
	id: string;
	title: string;
	body: string;
	comments: IComment[];
	tags: string[];
}

export interface IComment {
	id: string;
	user: IUser;
	body: string;
}

export interface IHub {
	id: string;
	members: IUser[];
	posts: IPost[];
}
