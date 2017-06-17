export class VoteUser {
    constructor(
        public movieId: string,
        public userId: string,
        public rating: string,
        public date: string,
    ){}
}
